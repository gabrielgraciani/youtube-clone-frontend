import React, { createContext, useContext, useState, useCallback } from 'react';

interface MenuContextData {
  openMenu: boolean;
  handleClickMenu: () => void;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

const MenuProvider: React.FC = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleClickMenu = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  return (
    <MenuContext.Provider value={{ openMenu, handleClickMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

function useMenu(): MenuContextData {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}

export { MenuProvider, useMenu };
