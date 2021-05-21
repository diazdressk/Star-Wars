import React, { useContext, useState } from 'react';
import { changeCssVariables } from '@services/changeCssVariables';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL = 'neitral';

const ThemeContext = React.createContext();//создаю контект ThemeProvider, им оборачиваю весь Арр, теперь из каждого кпомпонента в приложении могу использовать хук useTheme

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null);
  const change = (name) => {
    setTheme(name);
    changeCssVariables(name);//изменяю цвет текста при каждом изменении
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change,
      }}
      {...props}>
      {children}
    </ThemeContext.Provider>
  );
}; //все дочерние элементы, которые передаю в контекст

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);//создаю хук useTheme
//при создании хука, использую useContext, в него передаю ThemeContext, внутри него value с двумя ключами...theme и функция change и в качестве чилдрен передаю весь Арр