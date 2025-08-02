import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "./sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible"
import { ChevronRight } from "lucide-react"


const items = [
    'first chat',
    'second chat',
    'third chat',
    'fourth chat',
    'fifth chat',
    'sixth chat',
    'seventh chat',
    'eighth chat',
]

const ChatNav = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Chats</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span>{item}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
        
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default ChatNav