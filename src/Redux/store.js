import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "./Features/adminApi";
import { contactApi } from "./Features/contactApi";

export const store = configureStore({
  reducer: {
    [adminApi.reducerPath]: adminApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(adminApi.middleware)
      .concat(contactApi.middleware),
});
