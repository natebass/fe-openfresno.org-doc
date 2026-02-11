import { useEffect, useRef } from "react";

/**
 * Hook that enables drag-to-scroll on a horizontally scrollable element
 * and auto-shows/hides the scrollbar (via data-scrolling attribute).
 *
 * @returns {import("react").RefObject<HTMLElement>} ref to attach to the scrollable element
 */
export function useDragScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDragging = false;
    let startX;
    let scrollLeft;
    let scrollTimeout;

    const onMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX);
    };

    const onMouseUp = () => {
      isDragging = false;
      el.style.cursor = "";
      el.style.userSelect = "";
    };

    const onScroll = () => {
      el.setAttribute("data-scrolling", "");
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        el.removeAttribute("data-scrolling");
      }, 1000);
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseUp);
    el.addEventListener("scroll", onScroll);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseUp);
      el.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return ref;
}
