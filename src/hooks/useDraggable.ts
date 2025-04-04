/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";

interface DraggableOptions {
  size: number;
  initialPosition?: { x: number; y: number } | null;
  padding?: number;
}

const passiveFalse: AddEventListenerOptions = { passive: false };

export function useDraggable({
  size,
  initialPosition,
  padding = 8,
}: DraggableOptions) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const isDragging = useRef(false);
  const wasDragged = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!initialPosition) return;
    const safeY = window.innerHeight - size - padding;
    setPosition({ x: initialPosition.x, y: safeY });
  }, [initialPosition, size, padding]);

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    isDragging.current = true;
    wasDragged.current = false;

    document.body.style.userSelect = "none"; // allow scrollbar to stay

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
    document.body.style.userSelect = "";
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const touch = e.touches[0];
    isDragging.current = true;
    wasDragged.current = false;

    document.body.style.userSelect = "none";

    dragOffset.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };

    window.addEventListener("touchmove", handleTouchMove, passiveFalse);
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    wasDragged.current = true;
    e.preventDefault(); // ✅ block scroll during drag only

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
    document.body.style.userSelect = "";
    window.removeEventListener("touchmove", handleTouchMove, passiveFalse);
    window.removeEventListener("touchend", handleTouchEnd);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove, passiveFalse);
      window.removeEventListener("touchend", handleTouchEnd);
      document.body.style.userSelect = "";
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
