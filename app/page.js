import Image from "next/image";
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Drawer direction="left">
        <DrawerTrigger className="absolute  top-0 left-0">
          <Menu className="w-12 h-12" />
        </DrawerTrigger>
        <DrawerContent className="h-screen absolute left-0 mt-0 w-64 rounded-none">
          <DrawerHeader>
            <DrawerDescription>choose action:</DrawerDescription>
            <Button>Affirmation Wrap</Button>
            <Button>Check In</Button>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Profile</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </main>
  );
}
