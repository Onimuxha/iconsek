import { Route, Routes, useLocation, Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Gallery from "./pages/Gallery";
import Docs from "./pages/Docs";
import { useSearch } from "./hooks/useSearch";
import { downloadAllZip } from "./lib/zip";
import { allIconData } from "./lib/icons";
import { Search, Download } from "lucide-react";
import { Toaster } from "sonner";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 font-bold">
              <span className="flex items-center justify-center text-white text-sm">
                <img src="/text-white.png" alt="" />
                Hello
              </span>
            </Link>

            <nav className="hidden sm:flex gap-1">
              <nav className="ml-4 hidden sm:flex items-center gap-1 text-sm">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `pill ${isActive ? "pill-active" : ""}`
                  }
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="/docs"
                  className={({ isActive }) =>
                    `pill ${isActive ? "pill-active" : ""}`
                  }
                >
                  Docs
                </NavLink>
              </nav>
            </nav>

            <div className="flex-1 max-w-md mx-4">
              <SearchBar />
            </div>

            <button
              className="pill"
              onClick={() => downloadAllZip(allIconData())}
            >
              Download all
            </button>
          </div>

          <nav className="sm:hidden flex gap-1 mt-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex-1 py-2 text-center rounded text-sm ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/docs"
              className={({ isActive }) =>
                `flex-1 py-2 text-center rounded text-sm ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`
              }
            >
              Docs
            </NavLink>
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}

function SearchBar() {
  const { query, setQuery } = useSearch();
  return (
    <div
      className="relative"
      onKeyDown={(e) => {
        if (e.key === "/" && (e.target as HTMLElement).tagName !== "INPUT") {
          e.preventDefault();
          (
            document.getElementById("global-search") as HTMLInputElement
          )?.focus();
        }
      }}
    >
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/60" />
      <input
        id="global-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search icons…"
        className="input"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 kbd">/</span>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.target as HTMLElement).tagName !== "INPUT") {
        e.preventDefault();
        document.getElementById("global-search")?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <Layout>
      <Toaster position="top-center" />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Gallery />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="*" element={<Gallery />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
