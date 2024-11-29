import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
// import { logout } from '../slices/authSlice';

const baseQuery = async (args, api, extraOptions) => {
  const { dispatch } = api
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://673130037aaf2a9aff101068.mockapi.io",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken")
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      console.error('Unauthorized access - Redirecting to login...');
    //   dispatch(logout())
    }
  }
  return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })