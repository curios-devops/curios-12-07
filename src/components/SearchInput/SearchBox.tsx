import React, { useState } from 'react';
import { Focus, Paperclip } from 'lucide-react';
import ActionButton from './ActionButton';
import ToggleSwitch from './ToggleSwitch';
import SearchButton from './SearchButton';
import '../../styles/animations.css';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [isPro, setIsPro] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="relative w-full">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Ask anything..."
        rows={3}
        className={`
          w-full bg-[#1a1a1a] text-base text-white rounded-xl 
          p-4 pr-32 resize-none placeholder-gray-500
          transition-colors duration-200
          outline-none
          border
          ${isFocused 
            ? 'border-[#00B4D8]' 
            : 'border-gray-700 hover:border-gray-600'}
        `}
      />

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ActionButton
            icon={Focus}
            label="Focus"
            onClick={() => {}}
          />
          <ActionButton
            icon={Paperclip}
            label="Attach"
            onClick={() => {}}
          />
        </div>

        <div className="flex items-center gap-4">
          <ToggleSwitch
            isEnabled={isPro}
            onToggle={() => setIsPro(!isPro)}
          />
          <SearchButton
            onClick={handleSearch}
            isActive={query.trim().length > 0}
            disabled={!query.trim()}
          />
        </div>
      </div>
    </div>
  );
}