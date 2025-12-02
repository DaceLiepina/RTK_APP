import { configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import sandwichReducer from '../features/sandwich/sandwichSlice'

import productReducer from '../features/products/productSlice'
import cartReducer from "../features/products/cart/cartSlice"
import authReducer from '../features/auth/authSlice'
import weatherReducer from '../../src/features/WeatherApp/types/weatherSlice';
import apodReducer from "../features/apod/apodSlice"
import { usersApi } from "../features/users/userApi";
//→ Импортируем configureStore — простой способ создать store.
export const store = configureStore({
reducer: {
    counter: counterReducer,
    sandwich: sandwichReducer,
    products: productReducer,
    cart:cartReducer,
    auth: authReducer,
    weather: weatherReducer,
    apod: apodReducer,
     [usersApi.reducerPath]: usersApi.reducer,

},
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    //   .concat(weatherApi.middleware)
      .concat(usersApi.middleware),

})


// Типы для useSelector и useDispatch

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch;
// → Создаём типы для селектора и диспатчера, чтобы использовать в TS-компонентах.