import type { ReactNode } from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}