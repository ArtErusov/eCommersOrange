import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { loadState } from "./storage";
import axios from "axios";
import { LoginResponse } from "../types/auth.interface";
import { Profile } from "../types/users.interface";
import { RootState } from "./store";


export const JWT_PERSISTENT_STATE = "userData";

export interface UserPersistentState {
    jwt: string | null
}

export interface UserState {
    jwt: string | null;
    loginErrorMessage?: string;
    profile?: Profile;
    showPromoBlock: boolean;
}
// Устанавливаем начальное состояние пользователя — по умолчанию `jwt` отсутствует.
const initialState: UserState = {
    jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
    showPromoBlock: true
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

 export const getProfile = createAsyncThunk<Profile, void, { state: RootState}>("/profile",
    async (_, thunkApi) =>{
       const jwt = thunkApi.getState().user.jwt
    const { data } = await axios.get<Profile>(
        `https://purpleschool.ru/pizza-api-demo/user/profile`,
        {
          headers:{
                Authorization: `Bearer ${jwt}`
          }
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
    },
    clearLoginError: (state) => {
        state.loginErrorMessage = undefined;
    },
    hidePromoBlock: (state) => {
        state.showPromoBlock = false;
    },
    showPromoBlock: (state) => {
        state.showPromoBlock = true;
    }

    
     },
     extraReducers: (builder) =>{
        builder.addCase(login.fulfilled, (state, action)=>{
            state.jwt = action.payload.access_token;
        } );
        builder.addCase(login.rejected, (state, action) =>{
            state.loginErrorMessage = action.error.message
        });
        // Нужно заменить ссылку
        builder.addCase(getProfile.fulfilled, (state, action) =>{
            state.profile = action.payload;
        });
     }
});


export default userSlice.reducer;
export const userActions = userSlice.actions;