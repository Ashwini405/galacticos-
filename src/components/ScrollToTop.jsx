import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    forceTop();
    requestAnimationFrame(forceTop);
    const timeoutId = window.setTimeout(forceTop, 120);

    window.addEventListener("load", forceTop);
    window.addEventListener("pageshow", forceTop);
    window.addEventListener("popstate", forceTop);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("load", forceTop);
      window.removeEventListener("pageshow", forceTop);
      window.removeEventListener("popstate", forceTop);
    };
  }, []);

  useEffect(() => {
    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    forceTop();
    requestAnimationFrame(forceTop);
    const timeoutId = window.setTimeout(forceTop, 120);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
