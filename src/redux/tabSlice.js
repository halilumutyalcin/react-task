import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "general",  
  tabs: ["general", "skills", "achievements"], 
  tabLabels: {  
    general: "Genel",
    skills: "Yetenekler",
    achievements: "Kazanımlar",
  },
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabSlice.actions;
export default tabSlice.reducer;
