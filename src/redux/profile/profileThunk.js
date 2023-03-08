import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "../../http/http";
import { getProfileService } from "../../services/userService";
// import { logoutAction } from "../auth/authSlice";

export const getProfileThunk = createAsyncThunk('profile/getProfile', async (_, {rejectWithValue, getState}) => {
  try {
    const {access_token, token_type} = getState().auth
    if (!access_token || !token_type) {
      return rejectWithValue()
    }
    token.set(token_type + ' ' + access_token)
    const data = await getProfileService()
    return data
  } catch (error) {
    token.unset()
    // dispatch(logoutAction())
    return rejectWithValue()
  }
})