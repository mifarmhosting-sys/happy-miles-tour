import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "radial-gradient(ellipse 120% 60% at 50% -10%, oklch(0.62 0.20 55 / 0.07) 0%, transparent 60%), " +
          "radial-gradient(ellipse 80% 40% at 100% 50%, oklch(0.52 0.22 255 / 0.05) 0%, transparent 50%), " +
          "oklch(0.98 0.01 80)",
      }}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
