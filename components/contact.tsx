import Link from "next/link"
import { Phone, Mail, Facebook, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <section id="contacto" className="py-16 px-4 md:px-12 bg-[#551f55] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Contacto</h2>

        <div className="flex flex-col items-center gap-8">
          <div className="max-w-[500px] w-full text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Teléfono</h3>
            <Link
              href="https://wa.me/+541168481702?"
              target="_blank"
              className="inline-block bg-[#248580] hover:bg-[#8A9A5B] text-white px-8 py-3 rounded-full shadow-md transition-all hover:-translate-y-1 font-semibold"
            >
              <span className="flex items-center justify-center gap-2">
                <Phone size={18} />
                11-6848-1702
              </span>
            </Link>
          </div>

          <div className="max-w-[500px] w-full text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Email</h3>
            <Link
              href="mailto:contacto@ashtangayoga.com"
              className="inline-block bg-[#248580] hover:bg-[#8A9A5B] text-white px-8 py-3 rounded-full shadow-md transition-all hover:-translate-y-1 font-semibold"
            >
              <span className="flex items-center justify-center gap-2">
                <Mail size={18} />
                contacto@ashtangayoga.com
              </span>
            </Link>
          </div>

          <div className="max-w-[500px] w-full text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Redes Sociales</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="bg-[#248580] hover:bg-[#8A9A5B] text-white px-6 py-3 rounded-full shadow-md transition-all hover:-translate-y-1 font-semibold flex items-center gap-2"
              >
                <Facebook size={18} />
                <span className="hidden sm:inline">Facebook</span>
              </Link>

              <Link
                href="https://www.instagram.com/root.ashtangayoga/?hl=es-la"
                target="_blank"
                className="bg-[#248580] hover:bg-[#8A9A5B] text-white px-6 py-3 rounded-full shadow-md transition-all hover:-translate-y-1 font-semibold flex items-center gap-2"
              >
                <Instagram size={18} />
                <span className="hidden sm:inline">Instagram</span>
              </Link>

              <Link
                href="https://wa.me/+541168481702?"
                target="_blank"
                className="bg-[#248580] hover:bg-[#8A9A5B] text-white px-6 py-3 rounded-full shadow-md transition-all hover:-translate-y-1 font-semibold flex items-center gap-2"
              >
                <Phone size={18} />
                <span className="hidden sm:inline">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
