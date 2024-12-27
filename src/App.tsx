import React from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { ConversationView } from '@/components/chat/conversation-view';
import { useChat } from '@/store/use-chat';

function App() {
  const { activeChat } = useChat();

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <main className="flex-1">
        {activeChat ? (
          <ConversationView chat={activeChat} />
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-lg text-gray-500">Select a conversation to start messaging</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;