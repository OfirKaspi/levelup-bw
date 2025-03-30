/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";

interface DraggableOptions {
  /**
   * Size of the draggable element in pixels.
   * Used to ensure it doesn't move off-screen.
   */
  size: number;

  /**
   * Optional initial position of the element (x, y).
   * Should be calculated on the client (after mount).
   */
  initialPosition?: { x: number; y: number } | null;

  /**
   * Optional padding from the viewport edges to prevent overflow.
   * Default: 8px
   */
  padding?: number;
}

/**
 * useDraggable
 *
 * A custom hook to make any element draggable across the screen,
 * supporting both mouse and touch (desktop + mobile).
 *
 * @param {DraggableOptions} options - Configuration for size, initial position, and padding
 * @returns {{
 *   position: { x: number; y: number } | null;
 *   handleMouseDown: (e: React.MouseEvent<HTMLElement>) => void;
 *   handleTouchStart: (e: React.TouchEvent<HTMLElement>) => void;
 *   wasDragged: React.MutableRefObject<boolean>;
 *   isDragging: boolean;
 * }}
 *
 * Usage:
 * ```tsx
 * const {
 *   position,
 *   handleMouseDown,
 *   handleTouchStart,
 *   wasDragged,
 *   isDragging
 * } = useDraggable({ size: 48, initialPosition });
 * ```
 */
export function useDraggable({
  size,
  initialPosition,
  padding = 8,
}: DraggableOptions) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const isDragging = useRef(false);
  const wasDragged = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // Set initial position once available
  useEffect(() => {
    if (!initialPosition) return;
    const safeY = window.innerHeight - size - padding;
    setPosition({ x: initialPosition.x, y: safeY });
  }, [initialPosition, size, padding]);

  // MOUSE EVENTS
  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    isDragging.current = true;
    document.documentElement.style.overflowX = 'hidden';
    wasDragged.current = false;
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    wasDragged.current = true;

    const newX = Math.max(
      padding,
      Math.min(window.innerWidth - size - padding, e.clientX - dragOffset.current.x)
    );
    const newY = Math.max(
      padding,
      Math.min(window.innerHeight - size - padding, e.clientY - dragOffset.current.y)
    );

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.documentElement.style.overflowX = '';
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  // TOUCH EVENTS
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const touch = e.touches[0];
    isDragging.current = true;
    wasDragged.current = false;
    dragOffset.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    wasDragged.current = true;
    e.preventDefault(); // Prevent scrolling during drag

    const touch = e.touches[0];
    const newX = Math.max(
      padding,
      Math.min(window.innerWidth - size - padding, touch.clientX - dragOffset.current.x)
    );
    const newY = Math.max(
      padding,
      Math.min(window.innerHeight - size - padding, touch.clientY - dragOffset.current.y)
    );

    setPosition({ x: newX, y: newY });
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };

  // Clean up all listeners on unmount
  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return {
    position,
    handleMouseDown,
    handleTouchStart,
    wasDragged,
    isDragging: isDragging.current,
  };
}
