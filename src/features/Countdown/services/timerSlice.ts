// src/store/timerSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TimeLeft } from "./christmasApi";


function normalize(t: TimeLeft) {
  return {
    days: Math.floor(t.days),
    hours: Math.floor(t.hours % 24),
    minutes: Math.floor(t.minutes % 60),
    seconds: Math.floor(t.seconds % 60),
  };
}

// 1. Описываем состояние этого слайса
interface TimerState {
 lastData: TimeLeft | null;
}
// 2. Начальное состояние
const initialState: TimerState = {
 lastData: null,
};

// 3. Создаём slice
const timerSlice = createSlice({
 name: "timer", // имя слайса
 initialState, // начальное состояние
 reducers: {
 
    // 4. Редьюсер для сохранения последних данных с сервера
 setLastData(state, action: PayloadAction<TimeLeft>) {
 state.lastData = action.payload;
 },
},
});
// 5. Экспортируем action и reducer
export const { setLastData } = timerSlice.actions;
export default timerSlice.reducer;
