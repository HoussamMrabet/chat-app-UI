import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { UserPlus } from 'lucide-react';

const contacts = [
  {
    id: 1,
    name: 'Houssam',
    email: 'hmrabet@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/52783782?v=4',
    department: 'Design',
  },
  {
    id: 2,
    name: 'Mohammed',
    email: 'mel-hamd@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/44306060?v=4',
    department: 'Engineering',
  },
];

export function ContactsView() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Contacts</h2>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <UserPlus className="h-5 w-5" />
        </button>
      </div>
      <div className="px-4 py-2">
        <input
          type="search"
          placeholder="Search contacts..."
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-800 dark:bg-gray-900"
        />
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-2 p-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Avatar src={contact.avatar} alt={contact.name} />
              <div className="flex-1">
                <h3 className="font-medium">{contact.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {contact.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}