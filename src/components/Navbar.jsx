import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="border border-black px-2 py-1 text-sm font-semibold">
            SR
          </div>
          <h1 className="text-xl font-serif tracking-wide">
            Sasidhar
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm uppercase tracking-wider text-gray-700">
          <a href="#portfolio">portfolio</a>
          <a href="#booking">booking</a>
          <a href="#study">study</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-sm uppercase tracking-wider">
          <a href="#portfolio" onClick={()=>setOpen(false)}>portfolio</a>
          <a href="#booking" onClick={()=>setOpen(false)}>booking</a>
          <a href="#study" onClick={()=>setOpen(false)}>study</a>
          <a href="#about" onClick={()=>setOpen(false)}>about</a>
          <a href="#contact" onClick={()=>setOpen(false)}>contact</a>
        </div>
      )}

    </nav>
  );
}