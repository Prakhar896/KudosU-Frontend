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
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<Drawer direction = 'left'>
  <DrawerTrigger >Open</DrawerTrigger>
  <DrawerContent className='h-screen absolute left-0 mt-0 w-64 rounded-none'>

    <DrawerHeader>

      <DrawerDescription>choose action:</DrawerDescription>
      <Button>Inbox</Button>
      <Button>Send A Kudos!</Button>

    
    </DrawerHeader>
    <DrawerFooter>
      <Button>Log in</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

    </main>
  );
}
