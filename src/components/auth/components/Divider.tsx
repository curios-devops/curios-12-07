import React from 'react';

interface DividerProps {
  text: string;
}

export default function Divider({ text }: DividerProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-700"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-[#1a1a1a] text-gray-400">{text}</span>
      </div>
    </div>
  );
}