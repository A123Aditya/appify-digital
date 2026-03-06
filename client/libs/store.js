'use client';

import { create } from 'zustand';

export const useStore = create((set) => ({
  visitorCount: 0,
  setVisitorCount: (count) => set({ visitorCount: count }),
  
  isAdminLoggedIn: false,
  setAdminLoggedIn: (status) => set({ isAdminLoggedIn: status }),
  
  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
