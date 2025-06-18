import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CartItem {
    id:number;
    count:number;
}

export interface CartState {
    items: CartItem[];

}

const initialState: CartState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Добавляем товар в корзину
        add: (state, action: PayloadAction<number> ) =>{
            const existed = state.items.find(i => i.id === action.payload)
            if (!existed){
                state.items.push({ id: action.payload, count: 1});
                return;
            }
            state.items.map(i=>{
                if (i.id === action.payload){
                    i.count += 1;
                }
                return i;
            })
        },
        // Удаляем товар из корзины 
      remove: (state, action: PayloadAction<number>) => {
  const existingItem = state.items.find(i => i.id === action.payload);
  if (!existingItem) return;

  if (existingItem.count === 1) {
    state.items = state.items.filter(i => i.id !== action.payload);
  } else {
    existingItem.count -= 1;
  }
}

    }
});


export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
