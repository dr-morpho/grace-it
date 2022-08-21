import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Main {
  toggleNav: boolean;
}

const mainState: Main = {
  toggleNav: false,
};

const mainSlice = createSlice({
  name: 'main',
  initialState: mainState,
  reducers: {
    setToggleNav(state, action: PayloadAction<boolean>) {
      state.toggleNav = action.payload;
    },
  },
});

export const toogleNavSelect = (state: RootState) => state.mainSlice.toggleNav;
export const { setToggleNav } = mainSlice.actions;
export default mainSlice.reducer;
