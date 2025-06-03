"use client";

import { useState, useRef } from "react";

export default function AnimatedCard() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusedTile, setFocusedTile] = useState<number | null>(null);
  const [hoveredTiles, setHoveredTiles] = useState<number[]>([]);

  const columns = 20;
  const rows = 10;
  const totalTiles = columns * rows;
  const radius = 40;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPosition({ x, y });

    let closestTile: number | null = null;
    let closestDistance = radius;
    const newHoveredTiles: number[] = [];

    for (let i = 0; i < totalTiles; i++) {
      const col = i % columns;
      const row = Math.floor(i / columns);

      const tileWidth = rect.width / columns;
      const tileHeight = rect.height / rows;

      const tileX = col * tileWidth + tileWidth / 2;
      const tileY = row * tileHeight + tileHeight / 2;

      const distance = Math.sqrt((x - tileX) ** 2 + (y - tileY) ** 2);
      if (distance < radius) {
        newHoveredTiles.push(i);
        if (distance < closestDistance) {
          closestTile = i;
          closestDistance = distance;
        }
      }
    }

    setHoveredTiles(newHoveredTiles);
    setFocusedTile(closestTile);
  };

  const handleMouseEnter = () => {
    setIsCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredTiles([]);
    setFocusedTile(null);
    setIsCursorVisible(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white text-white overflow-hidden group cursor-none min-h-[200px] rounded-t-xl z-0"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Custom circular cursor */}
      {isCursorVisible && (
        <div
          className="absolute w-24 h-24 bg-white rounded-full border-2 border-teal-600 opacity-80 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition duration-100"
          style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
          }}
        />
      )}

      {/* Grid tiles */}
      <div className="absolute inset-0 grid grid-cols-20 grid-rows-10 gap-2">
        {Array(totalTiles)
          .fill(false)
          .map((_, i) => {
            const isHovered = hoveredTiles.includes(i);
            const isFocused = focusedTile === i;
            return (
              <div
                key={i}
                className={`w-1.5 h-1.5 transition-all duration-300 ${
                  isFocused ? "bg-[#0d9488] scale-200" : isHovered ? "scale-200 bg-gray-300" : "bg-gray-300"
                }`}
              />
            );
          })}
      </div>
    </div>
  );
}
