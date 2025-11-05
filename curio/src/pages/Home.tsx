import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Home = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  );
};

export default Home;
