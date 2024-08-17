import { useMemo, useState, useReducer } from "react";
import { useNavigate } from "react-router";
import { PiSealQuestionFill } from "react-icons/pi";
import { IoCloseCircleOutline } from "react-icons/io5";
import Input from "./Input";
import Select from "./Select";

interface State {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  gender: string;
}

const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();
const currentYear = new Date().getFullYear();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as string[];

const initialState: State = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  dateOfBirth: {
    day: currentDay.toString(),
    month: months[currentMonth],
    year: currentYear.toString(),
  },
  gender: "",
};

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "input":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const Register = () => {
  const [showQue, setShowQue] = useState<boolean>(false);
  const [closeFrom, setCloseFrom] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const days = useMemo<number[]>(
    () => Array.from({ length: 31 }, (_, i) => i + 1),
    []
  );

  const years = useMemo<number[]>(() => {
    const currentYear = new Date().getFullYear();
    return Array.from(
      { length: currentYear - 1940 + 1 },
      (_, i) => currentYear - i
    );
  }, []);

  const handelQuestion = () => {
    setShowQue(!showQue);
  };
  const handelCloseForm = () => {
    setCloseFrom(!closeFrom);
    navigate('/') ; 
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "day" || name === "month" || name === "year") {
      dispatch({
        type: "input",
        field: "dateOfBirth",
        value: { ...state.dateOfBirth, [name]: value },
      });
    } else {
      dispatch({
        type: "input",
        field: name,
        value: value,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //TODO : get All data
    console.log(state);
  };
  return (
    <div
      className='w-full h-screen flex justify-center items-center bg-slate-100 '
    >
      <form
        className='bg-white flex flex-col gap-4 px-8 py-9 rounded-2xl shadow w-[31rem]'
        onSubmit={handleSubmit}
      >
        <div className=' relative'>
          <h2 className='text-3xl pb-2'>Sign Up</h2>
          <span>It’s quick and easy.</span>
          <IoCloseCircleOutline
            className=' absolute -top-5 -right-4 text-2xl text-gray-400 '
            onClick={handelCloseForm}
          />
        </div>
        <hr />
        <div className='flex justify-between gap-4 mb-2'>
          <Input
            placeholder='First Name'
            name='firstName'
            value={state.firstName}
            onChange={handleChange}
            className='flex-1 '
          />
          <Input
            placeholder='Last Name'
            name='lastName'
            value={state.lastName}
            onChange={handleChange}
            className='flex-1'
          />
        </div>
        <Input
          placeholder='Email'
          name='email'
          value={state.email}
          onChange={handleChange}
          type='email'
          className='mb-2'
        />
        <Input
          type='password'
          placeholder='Password'
          name='password'
          value={state.password}
          onChange={handleChange}
        />
        <div className='flex flex-col gap-2 relative '>
          <div className='flex items-center gap-1'>
            <h5 className='text-[1rem] font-light'>Date of birth</h5>
            <PiSealQuestionFill
              className='text-green-600'
              onClick={handelQuestion}
            />
          </div>
          <div className='flex items-center justify-between gap-4'>
            <Select
              options={days}
              defaultValue={state.dateOfBirth.day}
              name='day'
              onChange={handleChange}
            />
            <Select
              options={months}
              defaultValue={state.dateOfBirth.month}
              name='month'
              onChange={handleChange}
            />
            <Select
              options={years}
              defaultValue={state.dateOfBirth.year}
              name='year'
              onChange={handleChange}
            />
          </div>
          {showQue && (
            <div className=' absolute px-2 py-2.5 w-80 text-sm bg-white -left-[19.35rem] rounded-sm shadow-inner  drop-shadow-md shadow-black/10 duration-300'>
              <p className=' leading-normal'>
                <strong>Providing your birthday</strong> helps make sure that
                you get the right <strong>OnionLog</strong> experience for your
                age. If you want to change who sees this, go to the About
                section of your profile
              </p>
            </div>
          )}
        </div>
        <div className='w-full flex flex-col gap-2 mb-2'>
          <h5 className='text-[1rem] font-light'>Gender</h5>
          <div className=' w-full flex items-center justify-center gap-6'>
            <Input
              type='radio'
              value='Male'
              name='gender'
              label='Male'
              onChange={handleChange}
              className='flex items-center w-full'
            />
            <Input
              type='radio'
              name='gender'
              value='Female'
              label='Female'
              onChange={handleChange}
              className='flex items-center '
            />
          </div>
        </div>
        <button className='bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-800 transform duration-300 focus:scale-[0.99] shadow'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
