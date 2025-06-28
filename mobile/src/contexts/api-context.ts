import { createContext } from "react";
import { Configuration } from "../api-client";

export interface IApiCtx {
  user?: unknown;
  setUser: (user: boolean) => void;
  configuration: Configuration;
  setConfiguration: (configuration: Configuration) => void;
}

export const defaultConfiguration = new Configuration({
  basePath: "http://localhost:8000",
});

export const ApiCtx = createContext<IApiCtx | null>(null);
