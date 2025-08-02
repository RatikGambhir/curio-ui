import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ChatSidebar } from "@/components/chat-sidebar"

const Chat = () => {
  return (
    <SidebarProvider>
        <ChatSidebar />
        <SidebarInset>
            <div>
                <h1>Chat</h1>
            </div>
        </SidebarInset>
    </SidebarProvider>
  )
}

export default Chat