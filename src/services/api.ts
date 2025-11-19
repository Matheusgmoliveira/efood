import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto, Restaurante } from '../pages/Products'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getSelectedProduct: builder.query<Produto, void>({
      query: () => 'Products'
    })
  })
})

export const { useGetSelectedProductQuery, useGetRestaurantesQuery } = api

export default api
