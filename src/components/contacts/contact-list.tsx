import { Avatar } from '@/components/ui/avatar';
import { useChat, type Chat } from '@/store/use-chat';

const contacts: Chat[] = [
  {
    id: 1,
    name: 'Houssam',
    avatar: 'https://avatars.githubusercontent.com/u/52783782?v=4',
    status: 'online',
    lastMessage: 'wesh, cv',
    messages: [
      {
        id: '1',
        content: 'Hey wsup',
        sender: 'Houssam',
        timestamp: '2m ago',
        isOwn: false,
      },
      {
        id: '2',
        content: '!',
        sender: 'Houssam',
        timestamp: '2m ago',
        isOwn: false,
      },
      {
        id: '3',
        content: 'wesh, cv',
        sender: 'You',
        timestamp: '1m ago',
        isOwn: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Mohammed',
    avatar: 'https://avatars.githubusercontent.com/u/44306060?v=4',
    status: 'offline',
    lastMessage: 'Yes, dakchi nadi!',
    messages: [
      {
        id: '1',
        content: 'chefti l updates lkhra?',
        sender: 'Mohammed',
        timestamp: '1h ago',
        isOwn: false,
      },
      {
        id: '2',
        content: 'Yes, dakchi nadi!',
        sender: 'You',
        timestamp: '30m ago',
        isOwn: true,
      },
    ],
  },
];

export function ContactList() {
  const { setActiveChat, searchQuery } = useChat();

  const filteredContacts = contacts.filter((contact) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      contact.name.toLowerCase().includes(searchLower) ||
      contact.lastMessage.toLowerCase().includes(searchLower) ||
      contact.messages.some(msg => 
        msg.content.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <div className="space-y-2 p-4">
      {filteredContacts.map((contact) => (
        <button
          key={contact.id}
          onClick={() => setActiveChat(contact)}
          className="w-full flex items-center space-x-4 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div className="relative">
            <Avatar src={contact.avatar} alt={contact.name} />
            <span
              className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
              }`}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium">{contact.name}</p>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              {contact.lastMessage}
            </p>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {contact.messages[contact.messages.length - 1].timestamp}
          </span>
        </button>
      ))}
    </div>
  );
}