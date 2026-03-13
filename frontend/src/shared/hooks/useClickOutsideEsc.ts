import { useEffect } from "react";

export function useClickOutsideEsc<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const el = ref?.current;

      if (el && !el.contains(event.target as Node)) {
        handler();
      }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapePress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [ref, handler]);
}
