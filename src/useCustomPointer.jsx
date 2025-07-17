import { useEffect, useState } from "react";

export default function useCustomPointer(pointer) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function callback(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", callback);
    return () => window.removeEventListener("mousemove", callback);
  }, []);

  const pointerElement = (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        cursor: "none",
      }}
    >
      {pointer}
    </div>
  );

  return [position, pointerElement];
}
