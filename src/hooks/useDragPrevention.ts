import { useCallback } from "react";

export function useDragPrevention(
  handleMouseDown: (e: React.MouseEvent<HTMLElement>) => void,
  handleTouchStart: (e: React.TouchEvent<HTMLElement>) => void,
  isDisabled = false
) {
  const handleMouseDownWithPrevent = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (isDisabled) return;
      document.body.style.userSelect = "none";
      document.body.style.overflow = "hidden";
      handleMouseDown(e);
    },
    [handleMouseDown, isDisabled]
  );

  const handleTouchStartWithPrevent = useCallback(
    (e: React.TouchEvent<HTMLElement>) => {
      if (isDisabled) return;
      document.body.style.overflowY = "hidden";
      document.body.style.userSelect = "none";
      handleTouchStart(e);
    },
    [handleTouchStart, isDisabled]
  );

  const handleDragEnd = useCallback(() => {
    document.body.style.userSelect = "auto";
    document.body.style.overflowY = "auto";
  }, []);

  return {
    handleMouseDownWithPrevent,
    handleTouchStartWithPrevent,
    handleDragEnd,
  };
}
