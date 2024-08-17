import google from "../image/7123025_logo_google_g_icon.svg";
import apple from "../image/104490_apple_icon.svg";
import twitter from "../image/317720_social media_tweet_twitter_social_icon.svg";


import { HiHome } from "react-icons/hi";
import { FaUsers} from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiFunctionAddFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa"

import woman_1 from '../image/woman-1.jpg' ;
import woman_2 from '../image/woman-2.png' ;
import man_1 from '../image/man-1.jpg'
import man_2 from '../image/man-2.jpg'
import man_3 from '../image/man-3.jpg'
export const images = [apple, google, twitter] as string[];


interface Link {
    name: string;
    icon: React.ElementType;
    hash: string;
  }
 export interface Message    {
    firstName:string;
    lastName:string;
    isActive:boolean
    time:string;
    image: string; 
}
export const link1 = [
    {
        name: 'Home',
        icon: HiHome,
        hash: "",
    },
    {
        name: 'Friend',
        icon: FaUsers,
        hash: "/freiend",
    },
    {
        name: 'Video',
        icon: MdOutlineOndemandVideo,
        hash: "/video",
    },
    {
        name: 'Post',
        icon: RiFunctionAddFill,
        hash: "/post",
    },
] as Link[] ; 

export const allLinks = [
    {
        name: 'Home',
        icon: HiHome,
        hash: "",
    },
    {
        name: 'Friend',
        icon: FaUsers,
        hash: "/freiend",
    },
    {
        name: 'Video',
        icon: MdOutlineOndemandVideo,
        hash: "/video",
    },
    {
        name: 'Post',
        icon: RiFunctionAddFill,
        hash: "/post",
    },
  {
    name: 'Profile',
    icon:CgProfile,
    hash: "/profile",
},
{
    name: 'Settings',
    icon: IoSettings,
    hash: "/settings",
},
{
    name: 'Messanger ',
    icon: FaFacebookMessenger,
    hash: "/messanger",
},


]as Link[]


export const messages: Message[] = [
    {
        firstName: "Alice",
        lastName: "Smith",
        isActive: true,
        time: "2024-08-16T09:00:00Z",
        image: man_1
    },
    {
        firstName: "Bob",
        lastName: "Johnson",
        isActive: false,
        time: "2024-08-16T09:15:00Z",
        image: man_2
    },
    {
        firstName: "Charlie",
        lastName: "Williams",
        isActive: true,
        time: "2024-08-16T09:30:00Z",
        image: man_3
    },
    {
        firstName: "Diana",
        lastName: "Jones",
        isActive: false,
        time: "2024-08-16T09:45:00Z",
        image: woman_1
    },
    {
        firstName: "Eve",
        lastName: "Brown",
        isActive: true,
        time: "2024-08-16T10:00:00Z",
        image: man_1
    },
    {
        firstName: "Frank",
        lastName: "Davis",
        isActive: false,
        time: "2024-08-16T10:15:00Z",
        image: man_2
    },
    {
        firstName: "Grace",
        lastName: "Miller",
        isActive: true,
        time: "2024-08-16T10:30:00Z",
        image: man_3
    },
    {
        firstName: "Hank",
        lastName: "Wilson",
        isActive: false,
        time: "2024-08-16T10:45:00Z",
        image: man_3
    },
    {
        firstName: "Ivy",
        lastName: "Moore",
        isActive: true,
        time: "2024-08-16T11:00:00Z",
        image: woman_1
    },
    {
        firstName: "Jack",
        lastName: "Taylor",
        isActive: false,
        time: "2024-08-16T11:15:00Z",
        image: man_1
    },
    {
        firstName: "Kara",
        lastName: "Anderson",
        isActive: true,
        time: "2024-08-16T11:30:00Z",
        image: woman_1
    },
    {
        firstName: "Leo",
        lastName: "Thomas",
        isActive: false,
        time: "2024-08-16T11:45:00Z",
        image: man_3
    },
    {
        firstName: "Mia",
        lastName: "Jackson",
        isActive: true,
        time: "2024-08-16T12:00:00Z",
        image: woman_2
    },
    {
        firstName: "Nate",
        lastName: "White",
        isActive: false,
        time: "2024-08-16T12:15:00Z",
        image: man_1
    },
    {
        firstName: "Olivia",
        lastName: "Harris",
        isActive: true,
        time: "2024-08-16T12:30:00Z",
        image: woman_1
    },
    {
        firstName: "Paul",
        lastName: "Martin",
        isActive: false,
        time: "2024-08-16T12:45:00Z",
        image: man_2
    },
    {
        firstName: "Quinn",
        lastName: "Thompson",
        isActive: true,
        time: "2024-08-16T13:00:00Z",
        image: woman_2
    },
    {
        firstName: "Rita",
        lastName: "Garcia",
        isActive: false,
        time: "2024-08-16T13:15:00Z",
        image: woman_1
    },
    {
        firstName: "Sam",
        lastName: "Martinez",
        isActive: true,
        time: "2024-08-16T13:30:00Z",
        image: man_2
    },
    {
        firstName: "Tina",
        lastName: "Roberts",
        isActive: false,
        time: "2024-08-16T13:45:00Z",
        image: man_2
    },
    {
        firstName: "Uma",
        lastName: "Clark",
        isActive: true,
        time: "2024-08-16T14:00:00Z",
        image: woman_2
    },
    {
        firstName: "Vera",
        lastName: "Rodriguez",
        isActive: false,
        time: "2024-08-16T14:15:00Z",
        image: woman_1
    },
    {
        firstName: "Will",
        lastName: "Lewis",
        isActive: true,
        time: "2024-08-16T14:30:00Z",
        image: man_2
    },
    {
        firstName: "Xena",
        lastName: "Walker",
        isActive: false,
        time: "2024-08-16T14:45:00Z",
        image: man_3
    },
    {
        firstName: "Yara",
        lastName: "Hall",
        isActive: true,
        time: "2024-08-16T15:00:00Z",
        image: woman_1
    },
    {
        firstName: "Zane",
        lastName: "Allen",
        isActive: false,
        time: "2024-08-16T15:15:00Z",
        image: man_2
    },
    {
        firstName: "Anna",
        lastName: "Young",
        isActive: true,
        time: "2024-08-16T15:30:00Z",
        image: woman_2
    },
    {
        firstName: "Bruce",
        lastName: "King",
        isActive: false,
        time: "2024-08-16T15:45:00Z",
        image: man_1
    },
    {
        firstName: "Cindy",
        lastName: "Scott",
        isActive: true,
        time: "2024-08-16T16:00:00Z",
        image: woman_2
    },
    {
        firstName: "David",
        lastName: "Green",
        isActive: false,
        time: "2024-08-16T16:15:00Z",
        image: man_3
    },
    {
        firstName: "Ella",
        lastName: "Adams",
        isActive: true,
        time: "2024-08-16T16:30:00Z",
        image: woman_1
    },
    {
        firstName: "Finn",
        lastName: "Baker",
        isActive: false,
        time: "2024-08-16T16:45:00Z",
        image: man_1
    },
    {
        firstName: "Gina",
        lastName: "Wright",
        isActive: true,
        time: "2024-08-16T17:00:00Z",
        image: woman_2
    },
    {
        firstName: "Harry",
        lastName: "Evans",
        isActive: false,
        time: "2024-08-16T17:15:00Z",
        image: man_2
    },
    {
        firstName: "Iris",
        lastName: "Phillips",
        isActive: true,
        time: "2024-08-16T17:30:00Z",
        image: woman_1
    },
    {
        firstName: "John",
        lastName: "Campbell",
        isActive: false,
        time: "2024-08-16T17:45:00Z",
        image: man_3
    }
];

