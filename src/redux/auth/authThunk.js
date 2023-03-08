import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "../../http/http";
import { loginUserService } from "../../services/userService";

export const loginThunk = createAsyncThunk('auth/login', async (body, {rejectWithValue}) => {
  try {
    const data = await loginUserService(body)
    token.set(data.token_type + ' ' + data.access_token)
    return data
  } catch (error) {
    return rejectWithValue()
  }
})
