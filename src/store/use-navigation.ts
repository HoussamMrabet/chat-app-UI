import { create } from 'zustand';

type NavigationView = 'messages' | 'contacts' | 'calls' | 'settings';

type NavigationStore = {
  activeView: NavigationView;
  setActiveView: (view: NavigationView) => void;
};

export const useNavigation = create<NavigationStore>((set) => ({
  activeView: 'messages',
  setActiveView: (view) => set({ activeView: view }),
}));