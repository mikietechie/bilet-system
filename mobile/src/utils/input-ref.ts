import { RefObject } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getInputRefValue = <T>(ref: RefObject<any>) =>
  ref.current?.value as T;
