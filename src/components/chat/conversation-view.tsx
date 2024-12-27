import React from 'react';
import { ChatHeader } from './chat-header';
import { MessageBubble } from './message-bubble';
import { ChatInput } from './chat-input';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Chat } from '@/store/use-chat';

interface ConversationViewProps {
  chat: Chat;
}

export function ConversationView({ chat }: ConversationViewProps) {
  return (
    <div className="flex flex-col h-full">
      <ChatHeader chat={chat} />
      <ScrollArea className="flex-1">
        <div className="space-y-4 p-6">
          {chat.messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>
      <ChatInput />
    </div>
  );
}