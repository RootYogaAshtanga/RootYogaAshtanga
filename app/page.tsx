import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Benefits from "@/components/benefits"
import FAQ from "@/components/faq"
import Schedule from "@/components/schedule"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] h-[85px] z-50 shadow-md bg-white/80 backdrop-blur-sm rounded-lg px-4 flex justify-between items-center">
        <div className="logo relative z-50">
          <Image
            src="/images/rootyogalogo.png"
            alt="Root Yoga Logo"
            width={400}
            height={100}
            className="w-auto h-auto max-w-[200px] md:max-w-[400px] lg:max-w-[400px]"
            priority
          />
        </div>

        <button className="menu-toggle md:hidden text-2xl z-[1001]" id="menuToggle" aria-label="Toggle menu">
          <Menu size={24} />
        </button>

        <nav className="hidden md:block">
          <ul className="nav-links flex gap-6">
            <li>
              <Link href="#home" className="text-black hover:font-bold transition-all">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#clases" className="text-black hover:font-bold transition-all">
                Clases
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-black hover:font-bold transition-all">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="text-black hover:font-bold transition-all">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className="mobile-menu hidden fixed top-[85px] right-5 w-[20rem] bg-white/90 rounded-lg shadow-md p-4 z-[505]"
          id="navLinks"
        >
          <ul className="flex flex-col gap-2">
            <li className="py-2 text-center">
              <Link href="#home" className="text-black text-xl hover:font-bold">
                Inicio
              </Link>
            </li>
            <li className="py-2 text-center">
              <Link href="#clases" className="text-black text-xl hover:font-bold">
                Clases
              </Link>
            </li>
            <li className="py-2 text-center">
              <Link href="#faq" className="text-black text-xl hover:font-bold">
                Preguntas Frecuentes
              </Link>
            </li>
            <li className="py-2 text-center">
              <Link href="#contacto" className="text-black text-xl hover:font-bold">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/arbolhome.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <h1 className="text-2xl md:text-4xl font-semibold font-poppins z-10">Ashtanga Vinyasa Yoga</h1>
        <p className="text-xl md:text-2xl mt-2 font-semibold font-poppins z-10">Rincón de Milberg, Tigre</p>
        <p className="text-lg md:text-xl font-semibold font-poppins z-10">Clases presenciales</p>
        <div className="mt-8 z-10">
          <Button asChild className="bg-[#007bff] hover:bg-[#1c1b1b] text-white px-8 py-6 text-lg">
            <Link href="#faq">Más info</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Benefits Section */}
      <Benefits />

      {/* Schedule Section */}
      <Schedule />

      {/* Contact Section */}
      <Contact />
    </main>
  )
}
