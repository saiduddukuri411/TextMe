import { RiLockPasswordLine } from "react-icons/ri";
import {MdEmail} from 'react-icons/md';

export const loggingData = [
  { id: "LOG_IN", text: "Log in" },
  { id: "SIGN_UP", text: "Sign up" },
];

export const loginData = [
  [
    {
      placeHolder: "Email",
      icon: MdEmail,
      type:"text"
    },
    {
      placeHolder: "Password",
      icon: RiLockPasswordLine,
      type: "password"
    }
  ],
  {Email:'', password: ''}
];
