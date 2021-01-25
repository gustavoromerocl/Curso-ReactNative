import React, {useContext, useState} from 'react';
import colors from '../config/colors';

export const ThemeContext = React.createContext();

const lightTheme = {
  backgroundColor: colors.white,
  textColor: colors.black,
};

const darkTheme = {
  backgroundColor: colors.black,
  textColor: colors.white,
};

const Theme = ({children}) => {
  const [darkModeEnabled, updateDarkModeEnabled] = useState(false);
  const [mainTheme, updateMainTheme] = useState(lightTheme);

  const toggleDarkMode = () => {
    const theme = !darkModeEnabled ? darkTheme : lightTheme;

    updateMainTheme(theme);
    updateDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <ThemeContext.Provider
      value={{
        mainTheme,
        darkModeEnabled,
        toggleDarkMode,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('UseTehme debe ser usado dentro de Theme context');
  }
  return context;
};
