import type { PayloadAction } from '@reduxjs/toolkit';
import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  }
);

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
removeProduct: (state, action) => {
      // dzēš produktu pēc id state.items ir produktu masīvs,
      //payload ir informācija, ko mēs nododam, kad izsaucam dispatch.
      state.items = state.items.filter((p) => p.id !== action.payload);
    },

  }, //seit jaievieto funkcija, kas dzes produktu ar filtru palidzibu un veido jaunu masiivu - sinhrons kods
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export default productsSlice.reducer;
export const { removeProduct } = productsSlice.actions;

// Kas notiek:

// createAsyncThunk - Redux funkcija asinhronām darbībām (API calls)

// fetchProducts - thunk, kas veic GET pieprasījumu uz API

// ProductsState - state struktūra produktiem

// productsSlice - slice, kas pārvalda produktu state

// extraReducers - apstrādā asinhronās darbības stāvokļus:

// pending - ielādējas dati

// fulfilled - dati veiksmīgi ielādēti

// rejected - radusies kļūda