import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SandwichState {
    value: string;
}

const initialState: SandwichState = {
    value: ''
};

const sandwichSlice = createSlice({
  name: 'sandwich',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<string>) => {
      state.value = `${state.value} ${action.payload}`;
    },
    clear: (state) => {
      state.value = '';
    }
  }
});

export const { addIngredient, clear } = sandwichSlice.actions;
export default sandwichSlice.reducer;