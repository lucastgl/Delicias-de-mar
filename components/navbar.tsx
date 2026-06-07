"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fish, Menu, X, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const productCategories = [
  { href: "/productos/pescados/frescos", label: "Pescados Frescos" },
  { href: "/productos/pescados/mariscos", label: "Mariscos" },
  { href: "/productos/congelados", label: "Congelados" },
  { href: "/productos/cocina", label: "Rotisería" },
  { href: "/productos/almacen", label: "Almacén" },
]

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productMenuOpen, setProductMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isProductsActive = pathname.startsWith("/productos")

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <Fish className="h-8 w-8 text-accent" />
          <span className="font-bold text-xl">Delicias de Mar</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              pathname === "/" ? "text-accent" : "text-muted-foreground"
            )}
          >
            Inicio
          </Link>

          {/* Products Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductMenuOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent",
                isProductsActive ? "text-accent" : "text-muted-foreground"
              )}
            >
              Productos
              <ChevronDown className={cn("w-4 h-4 transition-transform", productMenuOpen && "rotate-180")} />
            </button>

            {productMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-card border border-border rounded-lg shadow-lg py-1 z-50">
                <Link
                  href="/productos"
                  onClick={() => setProductMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-secondary transition-colors font-medium border-b border-border mb-1"
                >
                  Todos los productos
                </Link>
                {productCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => setProductMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2 text-sm transition-colors hover:text-accent hover:bg-secondary",
                      pathname.startsWith(cat.href) ? "text-accent" : "text-muted-foreground"
                    )}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                pathname === link.href ? "text-accent" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}

          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a
              href="https://wa.me/5491100000000?text=Hola,%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir por WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-sm font-medium py-2 px-3 rounded transition-colors hover:text-accent hover:bg-secondary",
                pathname === "/" ? "text-accent" : "text-muted-foreground"
              )}
            >
              Inicio
            </Link>

            <div className="py-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-1">
                Productos
              </p>
              <Link
                href="/productos"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block text-sm font-medium py-2 px-3 rounded transition-colors hover:text-accent hover:bg-secondary",
                  pathname === "/productos" ? "text-accent" : "text-muted-foreground"
                )}
              >
                Todos los productos
              </Link>
              {productCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block text-sm py-2 px-3 rounded transition-colors hover:text-accent hover:bg-secondary",
                    pathname.startsWith(cat.href) ? "text-accent" : "text-muted-foreground"
                  )}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium py-2 px-3 rounded transition-colors hover:text-accent hover:bg-secondary",
                  pathname === link.href ? "text-accent" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2">
              <a
                href="https://wa.me/5491100000000?text=Hola,%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
