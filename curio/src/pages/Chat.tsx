import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ChatSidebar } from "@/components/chat-sidebar"

const Chat = () => {
  return (
    <SidebarProvider className="flex w-full h-screen">
        <ChatSidebar />
        <SidebarInset className="bg-blue-500 ml-[var(--sidebar-width)] w-[calc(100vw-var(--sidebar-width))]">
            
        </SidebarInset>
    </SidebarProvider>
  )
}

export default Chat