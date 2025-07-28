import { createContext } from "react";
import { Configuration, User } from "../api-client";

export interface IApiCtx {
  user?: User;
  setUser: (user: User) => void;
  configuration: Configuration;
  setConfiguration: (configuration: Configuration) => void;
}

export const getDefaultConfiguration = () => new Configuration({
  basePath: "http://localhost:8000",
});

export const ApiCtx = createContext<IApiCtx | null>(null);
