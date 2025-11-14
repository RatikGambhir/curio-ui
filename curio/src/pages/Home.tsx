import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuthenticatedUser } from "@/hooks/useAuthenticatedUser";

const Home = () => {
  const user = useAuthenticatedUser();
  console.log("HOME WITH USER");
  console.log(user?.user);
  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  );
};

export default Home;
