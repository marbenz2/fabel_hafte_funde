import * as React from "react";

export function useScrollQuery(padding: number): boolean {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      const remInPixels = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const threshold = padding * remInPixels;
      setScrolled(window.scrollY > threshold);
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // Initial check in case the user is already scrolled

    return () => window.removeEventListener("scroll", onScroll);
  }, [padding]);

  return scrolled;
}
