import React from 'react';
import { cn } from '@/lib/utils';
import type { Message } from '@/store/use-chat';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div className={cn(
      "flex w-full",
      message.isOwn ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[70%] rounded-2xl px-4 py-2",
        message.isOwn 
          ? "bg-blue-500 text-white" 
          : "bg-gray-100 dark:bg-gray-800"
      )}>
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-70">{message.timestamp}</span>
      </div>
    </div>
  );
}