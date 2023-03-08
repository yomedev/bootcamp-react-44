import { fetchStatus } from "../../constants/fetchStatus";

export const authInitialState = {
  access_token: "",
  token_type: "",
  status: fetchStatus.Idle
}