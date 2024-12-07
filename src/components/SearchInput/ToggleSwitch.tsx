import React from 'react';

interface ToggleSwitchProps {
  isEnabled: boolean;
  onToggle: () => void;
}

export default function ToggleSwitch({ isEnabled, onToggle }: ToggleSwitchProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onToggle}
        className="w-10 h-5 bg-[#2a2a2a] rounded-full relative cursor-pointer transition-colors border border-gray-700 hover:border-gray-600"
      >
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-all duration-200 ${
            isEnabled ? 'translate-x-5 bg-[#007BFF]' : 'translate-x-0 bg-gray-500'
          }`}
        />
      </button>
      <span className={`text-sm ${isEnabled ? 'text-[#007BFF]' : 'text-gray-500'}`}>
        Pro
      </span>
    </div>
  );
}