"use client";

import AOS from "aos";
import { ReactNode, useEffect } from "react";

export default function AosProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      // offset: 0, // Jarak elemen mulai di-trigger
      // once: true, // Animasi hanya dijalankan sekali
    });
  }, []);

  return <>{children}</>;
}
