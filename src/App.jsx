import Section from "./components/Section"
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {

  return (
    <>
      <ThemeContextProvider>
        <Section />
      </ThemeContextProvider>
    </>
  )
}

export default App
