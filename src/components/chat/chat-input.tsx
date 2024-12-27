import React, { useState } from 'react';
import { Smile, Paperclip, Send } from 'lucide-react';

export function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-800 px-6 py-4">
      <div className="flex items-center space-x-2">
        <button type="button" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <Smile className="h-5 w-5" />
        </button>
        <button type="button" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <Paperclip className="h-5 w-5" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-800 dark:bg-gray-900"
        />
        <button 
          type="submit"
          className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg disabled:opacity-50"
          disabled={!message.trim()}
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}