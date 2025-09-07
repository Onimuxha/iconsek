import { Route, Routes, useLocation, Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Gallery from "./pages/Gallery";
import Docs from "./pages/Docs";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80 bg-background/95 border-b border-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-grid place-items-center h-7 w-7 rounded-lg bg-gradient-to-tr from-sky-400 to-violet-500 text-black shadow-glow">⚡</span>
            <span className="tracking-tight">Iconsek</span>
          </Link>
          <nav className="ml-4 hidden sm:flex items-center gap-1 text-sm">
            <NavLink to="/" className={({isActive}) => `pill ${isActive? 'pill-active' : ''}`}>Gallery</NavLink>
            <NavLink to="/docs" className={({isActive}) => `pill ${isActive? 'pill-active' : ''}`}>Docs</NavLink>
          </nav>
          <div className="ml-auto w-full max-w-xl relative">
            <SearchBar />
          </div>
          <DownloadAll />
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  );
}

import { useSearch } from "./hooks/useSearch";
import { downloadAllZip } from "./lib/zip";
import { allIconData } from "./lib/icons";
import { Search } from "lucide-react";
import { Toaster } from "sonner";

function SearchBar() {
  const { query, setQuery } = useSearch();
  return (
    <div className="relative" onKeyDown={(e)=>{ if(e.key === '/' && (e.target as HTMLElement).tagName !== 'INPUT'){ e.preventDefault(); (document.getElementById('global-search') as HTMLInputElement)?.focus(); }}}>
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

function DownloadAll() {
  return (
    <button className="pill" onClick={() => downloadAllZip(allIconData())}>Download all</button>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <Layout>
      <Toaster richColors position="top-center" />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
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
