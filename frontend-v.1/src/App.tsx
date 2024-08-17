import { useEffect, useState } from "react";
import MainApp from "./Layout/MainApp";
import Login from "./components/Login";
import InscriptionApp from "./Layout/InscriptionApp";
type UserStatus = "yes" | "no";
function App() {
  const [accessUser, setAccessUser] = useState<UserStatus>("no");
  useEffect(() => {
    const localAccessToken = window.localStorage.getItem(
      "accessToken"
    ) as UserStatus | null;
    setAccessUser(localAccessToken === "yes" ? "yes" : "no");
  }, []);
  return (
    <>
    {accessUser === 'yes' ? <MainApp />: <InscriptionApp />}
    </>
    
  );
}

export default App;
