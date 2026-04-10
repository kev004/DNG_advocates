import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-slate-900">
      <Navbar />
      <main className="min-h-0 min-w-0 flex-1 overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}
