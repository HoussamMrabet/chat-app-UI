import React from 'react';
import { MessageCircle, Users, Phone, Settings } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { MessagesView } from '@/components/views/messages-view';
import { ContactsView } from '@/components/views/contacts-view';
import { CallsView } from '@/components/views/calls-view';
import { SettingsView } from '@/components/views/settings-view';
import { useNavigation } from '@/store/use-navigation';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Messages', icon: MessageCircle, view: 'messages' as const },
  { name: 'Contacts', icon: Users, view: 'contacts' as const },
  { name: 'Calls', icon: Phone, view: 'calls' as const },
  { name: 'Settings', icon: Settings, view: 'settings' as const },
];

export function Sidebar() {
  const { activeView, setActiveView } = useNavigation();

  const renderView = () => {
    switch (activeView) {
      case 'messages':
        return <MessagesView />;
      case 'contacts':
        return <ContactsView />;
      case 'calls':
        return <CallsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <MessagesView />;
    }
  };

  return (
    <div className="flex h-screen w-80 flex-col border-r border-gray-200 dark:border-gray-800">
      <div className="flex h-16 items-center justify-between px-4">
        <h1 className="text-xl font-semibold">Messages</h1>
        <ThemeToggle />
      </div>
      
      <nav className="flex space-x-2 px-4 py-2">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveView(item.view)}
            className={cn(
              "inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800",
              activeView === item.view && "bg-gray-100 dark:bg-gray-800"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="sr-only">{item.name}</span>
          </button>
        ))}
      </nav>

      {renderView()}
    </div>
  );
}