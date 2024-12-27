import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bell, Lock, Moon, User, Shield, HelpCircle } from 'lucide-react';

const settingsGroups = [
  {
    title: 'Account',
    items: [
      { icon: User, label: 'Profile', description: 'Manage your personal information' },
      { icon: Lock, label: 'Privacy', description: 'Control your privacy settings' },
      { icon: Shield, label: 'Security', description: 'Secure your account' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { icon: Bell, label: 'Notifications', description: 'Customize your notifications' },
      { icon: Moon, label: 'Appearance', description: 'Change theme and colors' },
      { icon: HelpCircle, label: 'Help & Support', description: 'Get help and contact support' },
    ],
  },
];

export function SettingsView() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Settings</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-6 p-4">
          {settingsGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {group.title}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <item.icon className="h-5 w-5 text-gray-500" />
                    <div className="flex-1 text-left">
                      <h4 className="font-medium">{item.label}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}