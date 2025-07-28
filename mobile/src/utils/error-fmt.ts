import { AxiosError } from "axios";

export const fmtAxiosError = (error: AxiosError) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ((error.response?.data as any)?.message as string) || "";
