import { configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import sandwichReducer from '../features/sandwich/sandwichSlice'
import usersReducer from '../features/users/usersSlice'
import productReducer from '../features/products/productSlice'
import cartReducer from "../features/products/cart/cartSlice"
import authReducer from '../features/auth/authSlice'
import weatherReducer from '../../src/features/WeatherApp/types/weatherSlice';
import apodReducer from "../features/apod/apodSlice"
//→ Импортируем configureStore — простой способ создать store.
export const store = configureStore({
reducer: {
    counter: counterReducer,
    sandwich: sandwichReducer,
    users: usersReducer,
    products: productReducer,
    cart:cartReducer,
    auth: authReducer,
    weather: weatherReducer,
    apod: apodReducer
}

})


// Типы для useSelector и useDispatch

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch;
// → Создаём типы для селектора и диспатчера, чтобы использовать в TS-компонентах.