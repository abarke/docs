import { createContext, Dispatch, SetStateAction } from 'react';
import { ColorMode } from '@aws-amplify/ui-react';

type LayoutContextType = {
  colorMode: ColorMode;
  handleColorModeChange: (value: ColorMode) => ColorMode;
  menuOpen: boolean;
  tocOpen: boolean;
  toggleMenuOpen: Dispatch<SetStateAction<boolean>>;
  toggleTocOpen: Dispatch<SetStateAction<boolean>>;
};

export const LayoutContext = createContext<LayoutContextType>({
  colorMode: 'system',
  handleColorModeChange: (value) => value,
  menuOpen: false,
  tocOpen: false,
  toggleMenuOpen: () => {},
  toggleTocOpen: () => {}
});

export function LayoutProvider({ value, children }) {
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}
