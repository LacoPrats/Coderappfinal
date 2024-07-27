import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  localId: null,
  imageCamara: null,
  profileImage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { email, idToken, localId } = action.payload;
      return { ...state, user: email, token: idToken, localId };
    },
    setLogout: (state) => {
      return { ...state, user: null, token: null, localId: null };
    },
    clearUser: (state) => {
      return {
        ...state,
        user: null,
        token: null,
        localId: null,
        profileImage: null,
      };
    },
    setImageCamara: (state, action) => {
      return { ...state, imageCamara: action.payload };
    },
    setImageProfile: (state, action) => {
      return { ...state, profileImage: action.payload };
    },
  },
});

export const {
  setUser,
  setLogout,
  clearUser,
  setImageCamara,
  setImageProfile,
} = authSlice.actions;

export default authSlice.reducer;
