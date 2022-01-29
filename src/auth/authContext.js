import { createContext } from "react";
import { authReducer } from "./authReducer";



export const AuthContext = createContext(authReducer);