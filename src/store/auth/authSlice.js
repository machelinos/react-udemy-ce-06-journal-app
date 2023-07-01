import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'authenticated', 'not-authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    login: () => {},
    logout: () => {},
    checkingCredentials: () => {},
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
