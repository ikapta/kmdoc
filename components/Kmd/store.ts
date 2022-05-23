import React from 'react';

type CtxType = {
  docText: string;
  onDocTextChange:(text: string) => void;
};

export const Ctx = React.createContext<CtxType | null>(null);

export const useCtx = () => {
  const ctx = React.useContext(Ctx);
  return ctx as CtxType;
};
