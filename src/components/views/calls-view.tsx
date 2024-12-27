import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { Phone, PhoneMissed, PhoneOutgoing } from 'lucide-react';

const calls = [
  {
    id: 1,
    name: 'Houssam',
    avatar: 'https://avatars.githubusercontent.com/u/52783782?v=4',
    type: 'incoming',
    status: 'missed',
    time: '2 hours ago',
    duration: '0:00',
  },
  {
    id: 2,
    name: 'Mohammed',
    avatar: 'https://avatars.githubusercontent.com/u/44306060?v=4',
    type: 'outgoing',
    status: 'completed',
    time: '3 hours ago',
    duration: '12:34',
  },
];

export function CallsView() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Recent Calls</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-2 p-4">
          {calls.map((call) => (
            <div
              key={call.id}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Avatar src={call.avatar} alt={call.name} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{call.name}</h3>
                  <span className="text-sm text-gray-500">{call.time}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  {call.status === 'missed' ? (
                    <PhoneMissed className="h-4 w-4 text-red-500" />
                  ) : call.type === 'outgoing' ? (
                    <PhoneOutgoing className="h-4 w-4 text-green-500" />
                  ) : (
                    <Phone className="h-4 w-4 text-blue-500" />
                  )}
                  <span>{call.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}