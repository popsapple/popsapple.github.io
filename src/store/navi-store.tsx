import { create } from "zustand";
export enum NaviType {
    HOME,
    ABOUT,
    WORK
}
export const useNaviStore = create((set) => ({
    navi: NaviType,
    setNavi: (value) => {
        set((state) => state.navi = value);
    },
}));