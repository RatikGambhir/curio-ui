import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChatSidebar } from "@/components/chat-sidebar";
import { ChatView } from "@/components/chat-view";
import { ChatPrompt } from "@/components/chat-prompt";

const Chat = () => {
  //TODO: Implement chat functionality with cloudlfare worker
  return (
    <SidebarProvider className="flex w-full h-screen">
      <ChatSidebar />

      <SidebarInset className="ml-[var(--sidebar-width)] w-[calc(100vw-var(--sidebar-width))]">
        <div className="flex flex-col w-[calc(100vw-var(--sidebar-width))]">
          <ChatView />
          <div>
            <ChatPrompt />
          </div>
        </div>
        {/*<div className="border border-blue-500 w-1/2">Left box</div>
        <div className="border border-yellow-500 w-1/2">Right box</div>*/}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Chat;
