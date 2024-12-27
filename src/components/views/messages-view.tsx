import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContactList } from '@/components/contacts/contact-list';
import { SearchInput } from '@/components/chat/search-input';

export function MessagesView() {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-2">
        <SearchInput />
      </div>
      <ScrollArea className="flex-1">
        <ContactList />
      </ScrollArea>
    </div>
  );
}