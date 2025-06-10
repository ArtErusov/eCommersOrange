import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export const JWT_PERSISTENT_STATE = "userData";

export interface UserPersistentState {
    jwt: string | null
}

export interface UserState {
    jwt: string | null;
}
// Устанавливаем начальное состояние пользователя — по умолчанию `jwt` отсутствует.
const initialState: UserState = {
    jwt: loadState(JWT_PERSISTENT_STATE)?.jwt ?? null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addJwt: (state, actions: PayloadAction<string>) =>{
            state.jwt = actions.payload;
        
    },
        logout: (state) => {
            state.jwt = null;
    }
     }
});


export default userSlice.reducer;
export const userActions = userSlice.actions;