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
import { Link } from "react-router-dom";

function MenuDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="absolute  top-10 left-5">
        <Menu className="w-10 h-10" />
      </DrawerTrigger>
      <DrawerContent className="h-screen absolute left-0 mt-0 top-0 w-80 rounded-none">
        <DrawerHeader>
          <DrawerTitle className="text-3xl font-bold">KudosU</DrawerTitle>
          <DrawerDescription>You are doing great!</DrawerDescription>
          <Link to="/wrap">
            {" "}
            <Button className="w-full my-2 text-lg">Affirmation Wrap</Button>
          </Link>
          <Button className="text-lg">Check In</Button>
        </DrawerHeader>
        <DrawerFooter>
          <Button className="my-2 text-lg">Profile</Button>
          <DrawerClose asChild>
            <Button variant="outline" className="text-lg">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
export default MenuDrawer;
