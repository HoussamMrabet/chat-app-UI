import { create } from 'zustand';

export type Message = {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  isOwn: boolean;
};

export type Chat = {
  id: number;
  name: string;
  avatar: string;
  status: 'online' | 'offline';
  lastMessage: string;
  messages: Message[];
};

type ChatStore = {
  activeChat: Chat | null;
  searchQuery: string;
  setActiveChat: (chat: Chat) => void;
  setSearchQuery: (query: string) => void;
};

export const useChat = create<ChatStore>((set) => ({
  activeChat: null,
  searchQuery: '',
  setActiveChat: (chat) => set({ activeChat: chat }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));