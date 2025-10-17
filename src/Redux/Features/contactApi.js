import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend-solar-drab.vercel.app" }), // backend URL
  endpoints: (builder) => ({
    sendContact: builder.mutation({
      query: (data) => ({
        url: "/contact",   // ✅ /contact pe POST
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendContactMutation } = contactApi;
