import { MainLayout } from "./components/layout/MainLayout"
import { Profile } from "./components/sections/Profile"
import { Skills } from "./components/sections/Skills"
import { TechnicalSkills } from "./components/sections/TechnicalSkills"
import { Projects } from "./components/sections/Projects"
import { Experience } from "./components/sections/Experience"
import { Education } from "./components/sections/Education"
import { Languages } from "./components/sections/Languages"
import { Contact } from "./components/sections/Contact"

export const App = () => {

  return (
    <MainLayout>
      <Profile />
      <Skills />
      <TechnicalSkills />
      <Projects />
      <Experience />
      <Education />
      <Languages />
      <Contact />
    </MainLayout>
  )
}