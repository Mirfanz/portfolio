// types/aos.d.ts
declare module "aos" {
  const AOS: {
    init: (options?: AOSOptions) => void;
    refresh: () => void;
  };

  export interface AOSOptions {
    duration?: number; // Durasi animasi (milidetik)
    offset?: number; // Offset sebelum elemen muncul (px)
    easing?: string; // Jenis easing
    delay?: number; // Delay sebelum animasi dimulai (ms)
    once?: boolean; // Apakah animasi dijalankan sekali atau setiap scroll
    mirror?: boolean; // Animasi saat scroll ke atas
  }

  export default AOS;
}
