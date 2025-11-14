import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChatSidebar } from "@/components/chat-sidebar";

const Chat = () => {
  //TODO: Implement chat functionality with cloudlfare worker
  return (
    <SidebarProvider className="flex w-full h-screen">
      <ChatSidebar />

      <SidebarInset className="bg-blue-500 ml-[var(--sidebar-width)] w-[calc(100vw-var(--sidebar-width))]"></SidebarInset>
    </SidebarProvider>
  );
};

export default Chat;
