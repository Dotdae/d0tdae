import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import Nav from "./Nav"
import Hero from "./Hero"
import Card from "./Card"
import Portfolio from "./Portfolio"

export default function Section() {

  const {theme} = useContext(ThemeContext);

  return (
    <main className={theme ? 'dark: bg-benox px-10 md:px-20 lg:px-40' : 'bg-white px-10 md:px-20 lg:px-40'}>
        {/* Screen Container */}
        <section className="min-h-screen">
            <Nav />
            <Hero />
        </section>
        {/* Portfolio Section */}
        <section>
            <Portfolio/>
        </section>
    </main>
  )
}
