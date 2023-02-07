import { useEffect } from 'react';
import { useState, useCallback, createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { THEMES } from '../constants/theme.constants';
import { selectTheme } from '../redux/reducers/configs/configs.slice';

export const ThemeContext = createContext({});

const { DARK, STARS_BET } = THEMES;

const ThemeProvider = ({ children }) => {
  const serverTheme = useSelector(selectTheme);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || serverTheme || DARK,
  );

  const toggleMode = useCallback(() => {
    setTheme(prev => {
      const nextMode = prev === STARS_BET ? serverTheme || DARK : STARS_BET;
      localStorage.setItem('theme', nextMode);
      return nextMode;
    });
  }, [serverTheme]);

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        mode: theme,
        toggleMode,
      }}>
      <StyledThemeProvider theme={{ mode: theme }}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
