import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
value: number;
} 

const initialState: CounterState = {
    value: 0
}
// createSlice analogs REeducer
export const counterSlice = createSlice({
name: "counter", // stavoklja gabalinja vards  → name — имя кусочка состояния. Redux Toolkit сам создаёт типы action на основе этого имени.
initialState,  //→ Подключаем начальное состояние.
reducers: { // → Раздел, где мы описываем функции, которые изменяют состояние.  Каждый reducer автоматически создаёт action.
increment(state){
    state.value += 1;
},

decrement(state){
    state.value -= 1;
},
// → Раздел, где мы описываем функции, которые изменяют состояние.// Каждый reducer автоматически создаёт action.
incrementByAmount (state,action: PayloadAction<number>){
    state.value += action.payload;
},
},
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
// → Отсюда приходят готовые action creators, которые можно сразу диспатчить.
export default counterSlice.reducer;
// → Экспортируем reducer, чтобы подключить его в store.