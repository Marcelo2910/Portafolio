import { Hero } from "./Hero"
import { NavBar } from "./NavBar"

export const MainPage = () => {
  return (
    <>
      <div className="bg-indigo-600">
        <NavBar />
      </div>
      <Hero />
    </>
  )
}
