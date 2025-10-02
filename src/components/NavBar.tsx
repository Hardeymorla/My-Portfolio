import { Button } from './ui/button'

type PropsType = {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBar = ({darkMode, setDarkMode}: PropsType) => {

  return (
    <nav className="flex justify-between items-center p-4 shadow-md sticky top-0 z-50 bg-inherit">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="flex gap-4 items-center">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <Button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
        </Button>
      </div>
</nav>
  )
}

export default NavBar
