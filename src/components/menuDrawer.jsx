import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

function MenuDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="absolute  top-10 left-5">
        <Menu className="w-12 h-12" />
      </DrawerTrigger>
      <DrawerContent className="h-screen absolute left-0 mt-0 top-0 w-80 rounded-none">
        <DrawerHeader>
          <DrawerTitle>KudosU</DrawerTitle>
          <DrawerDescription>You are doing great!</DrawerDescription>
          <Button>Affirmation Wrap</Button>
          <Button>Check In</Button>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Profile</Button>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
export default MenuDrawer;
