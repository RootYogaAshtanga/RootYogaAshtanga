import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Root Yoga - Ashtanga Vinyasa Yoga",
  description: "Clases presenciales de Ashtanga Vinyasa Yoga en Rincón de Milberg, Tigre",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins overflow-x-hidden`}>
        {children}
        <Script id="menu-script" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              // Menu toggle
              document.getElementById('menuToggle').addEventListener('click', function() {
                document.getElementById('navLinks').classList.toggle('hidden');
              });
              
              // Close menu when clicking on a link
              document.querySelectorAll('#navLinks a').forEach(link => {
                link.addEventListener('click', function() {
                  document.getElementById('navLinks').classList.add('hidden');
                });
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}
