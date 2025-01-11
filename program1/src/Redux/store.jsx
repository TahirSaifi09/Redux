
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer as reducer} from "./rootReducer";

export const store = configureStore({
     reducer,
});

export default store;