import React from 'react';
import { Phone, Video, MoreVertical } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import type { Chat } from '@/store/use-chat';

interface ChatHeaderProps {
  chat: Chat;
}

export function ChatHeader({ chat }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-6 py-4">
      <div className="flex items-center space-x-4">
        <Avatar src={chat.avatar} alt={chat.name} />
        <div>
          <h2 className="font-semibold">{chat.name}</h2>
          <p className="text-sm text-gray-500">
            {chat.status === 'online' ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <Phone className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <Video className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}