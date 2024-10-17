import { Navbar } from "./Navbar";


export function Header() {
  return (
      <header className="bg-blue-600 p-4 text-white">
        <Navbar />
        <h1 className="text-center text-3xl font-bold">Welcome to Ecomas</h1>
      </header>
  )
}
