import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "next-auth";

export type Session = {
  user?: User | {};
} | null;

const initialState: Session = { user: {} };

const sessionSlice = createSlice({
  name: "Session",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session>) => {
      state.user = action.payload?.user;
    },
  },
});

export const { setSession } = sessionSlice.actions;
export default sessionSlice.reducer;

export const checkSession = (sessionUser: object) => {
  return typeof sessionUser === "object"
    ? Object.keys(sessionUser).length === 0
      ? null
      : sessionUser
    : false;
};
