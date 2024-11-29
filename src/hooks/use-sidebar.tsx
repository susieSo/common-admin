import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { produce } from "immer";

type SidebarSetting = { disabled: boolean; isHoverOpen: boolean };
type SidebarStore = {
  isOpen: boolean;
  isHover: boolean;
  settings: SidebarSetting;
  toggleOpen: () => void;
  setIsOpen: (isOpen: boolean) => void;
  setIsHover: (isHover: boolean) => void;
  getOpenState: () => boolean;
  setSettings: (settings: Partial<SidebarSetting>) => void;
};

export const useSidebar = create(
  persist<SidebarStore>(
    (set, get) => ({
      isOpen: true,
      isHover: false,
      settings: { disabled: false, isHoverOpen: false },
      toggleOpen: () => {
        set({ isOpen: !get().isOpen });
      },
      setIsOpen: (isOpen: boolean) => {
        set({ isOpen });
      },
      setIsHover: (isHover: boolean) => {
        set({ isHover });
      },
      getOpenState: () => {
        const state = get();
        return state.isOpen || (state.settings.isHoverOpen && state.isHover);
      },
      setSettings: (settings: Partial<SidebarSetting>) => {
        set(
          produce((state: SidebarStore) => {
            state.settings = { ...state.settings, ...settings };
          })
        );
      },
    }),
    {
      name: "sidebar",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
