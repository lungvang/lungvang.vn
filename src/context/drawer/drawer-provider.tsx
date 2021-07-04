import React, { useReducer } from 'react';
import { DrawerContext } from "./drawer-context";

const initialState = {
  isOpen: false,
};

type Action =
  | { type: "TOGGLE" }

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    default:
      return state;
  }
}

export const DrawerProvider = (children?: React.ReactNode) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  )
}