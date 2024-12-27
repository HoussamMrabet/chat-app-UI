import React from 'react';
import { Search } from 'lucide-react';
import { useChat } from '@/store/use-chat';

export function SearchInput() {
  const { searchQuery, setSearchQuery } = useChat();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      <input
        type="search"
        placeholder="Search messages..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 pl-10 dark:border-gray-800 dark:bg-gray-900"
      />
    </div>
  );
}