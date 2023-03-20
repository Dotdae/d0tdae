import {useState, createContext} from 'react'

export const ThemeContext = createContext({});

export function ThemeContextProvider(props) {
  
    const [theme, setTheme] = useState(false);

    function changeTheme(){
        setTheme(!theme);
    }
  
  
    return (
    <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}
