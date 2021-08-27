import React, { createContext } from "react";

export const DrawerContext = createContext<{
  state: any;
  dispatch: React.Dispatch<DrawerActions>;
}>({
  state: initialDrawerState,
  dispatch: () => undefined,
});
