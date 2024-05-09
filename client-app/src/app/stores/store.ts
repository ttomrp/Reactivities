import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

interface Store {
    activityStore: ActivityStore
};

export const store: Store = {
    activityStore: new ActivityStore()
};

export const StoreConext = createContext(store);

// react hook to return context
export function useStore() {
    return useContext(StoreConext);
};