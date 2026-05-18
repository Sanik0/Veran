"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AxisScript() {
  const pathname = usePathname();

  useEffect(() => {
    const init = setTimeout(() => {

      // ====== UTC CLOCK ======
      const clockEl = document.getElementById("utcClock");
      function updateClock() {
        if (!clockEl) return;
        const now = new Date();
        const h = String(now.getUTCHours()).padStart(2, "0");
        const m = String(now.getUTCMinutes()).padStart(2, "0");
        const s = String(now.getUTCSeconds()).padStart(2, "0");
        clockEl.textContent = `${h}:${m}:${s} UTC`;
      }
      updateClock();
      const clockInterval = setInterval(updateClock, 1000);

      // ====== MOBILE NAV BURGER ======
      const burger = document.getElementById("headerBurger");
      const nav = document.getElementById("headerNav");
      function handleBurger() {
        const isOpen = nav?.classList.toggle("open");
        burger?.setAttribute("aria-expanded", String(isOpen));
      }
      burger?.addEventListener("click", handleBurger);

      // ====== BACK TO TOP ======
      const backTop = document.getElementById("backToTop");
      function handleBackTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      backTop?.addEventListener("click", handleBackTop);

      // ====== REVEAL ON SCROLL ======
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("visible");
        }
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e, i) => {
            if (e.isIntersecting) {
              setTimeout(() => e.target.classList.add("visible"), i * 60);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -50px 0px" }
      );

      reveals.forEach((el) => {
        if (!el.classList.contains("visible")) {
          io.observe(el);
        }
      });

      (window as any).__axisCleanup = () => {
        clearInterval(clockInterval);
        burger?.removeEventListener("click", handleBurger);
        backTop?.removeEventListener("click", handleBackTop);
        io.disconnect();
      };

    }, 100);

    return () => {
      clearTimeout(init);
      (window as any).__axisCleanup?.();
    };
  }, [pathname]);

  return null;
}