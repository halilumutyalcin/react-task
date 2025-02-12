import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "general", // Varsayılan sekme
  tabs: ["general", "skills", "achievements"], // ✅ Sekme listesi
  tabLabels: {  // ✅ Sekme başlıklarını burada tut
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
