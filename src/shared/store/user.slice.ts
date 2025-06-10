import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";
import axios from "axios";
import { LoginResponse } from "../types/auth.interface";

export const JWT_PERSISTENT_STATE = "userData";

export interface UserPersistentState {
    jwt: string | null
}

export interface UserState {
    jwt: string | null;
    loginState: null | 'rejected';
}
// Устанавливаем начальное состояние пользователя — по умолчанию `jwt` отсутствует.
const initialState: UserState = {
    jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
    loginState:null
};

export const login = createAsyncThunk("/auth/login",
    async (params: {email: string, password:string}) =>{
    const { data } = await axios.post<LoginResponse>(
        `https://purpleschool.ru/pizza-api-demo/auth/login`,
        {
          email:params.email,
          password:params.password,
        },
      );
      return data;
    }
 );

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.jwt = null;
    }
     },
     extraReducers: (builder) =>{
        builder.addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>)=>{
            state.jwt = action.payload.access_token;
        } );
        builder.addCase(login.rejected, (state, action) =>{

        })
     }
});


export default userSlice.reducer;
export const userActions = userSlice.actions;