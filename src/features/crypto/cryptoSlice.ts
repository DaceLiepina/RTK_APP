import { createSlice} from "@reduxjs/toolkit";

interface CryptoState {
  lastPriceUSD: number | null;
  lastPriceEUR: number | null;
  lastUpdated: string | null;
}

const initialState: CryptoState = {
  lastPriceUSD: null,
  lastPriceEUR: null,
  lastUpdated: null,
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
   setLastPrice(state, action) {
      if (action.payload?.usd != null && action.payload?.eur != null) {
        state.lastPriceUSD = action.payload.usd;
        state.lastPriceEUR = action.payload.eur;
        state.lastUpdated = new Date().toISOString();
      }
    },
  },
});

export const { setLastPrice } = cryptoSlice.actions;
export default cryptoSlice.reducer;
