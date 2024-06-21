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
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function MenuDrawer() {
    const toast = useToast();
    const navigate = useNavigate()

    const showToast = (title, description, duration = 5000, isClosable = true, status = 'info', icon = null) => {
        if (!["success", "warning", "error", "info"].includes(status)) {
            status = "info"
        }

        const toastConfig = {
            title: title,
            description: description,
            duration: duration,
            isClosable: isClosable,
            status: status
        }
        if (icon != null) {
            toastConfig.icon = icon
        }

        toast(toastConfig)
    }

    const logout = () => {
        navigate("/loggedOut")
        showToast("Success", "Logged out!", 5000, true, "success")
    }

    return (
        <Drawer direction="left">
            <DrawerTrigger className="absolute top-10 left-5">
                <Menu className="w-10 h-10" />
            </DrawerTrigger>
            <DrawerContent className="h-screen absolute left-0 mt-0 top-0 w-80 rounded-none">
                <DrawerHeader>
                    <DrawerTitle className="text-3xl font-bold">KudosU</DrawerTitle>
                    <DrawerDescription>You are doing great!</DrawerDescription>
                    <Link to={"/"}><Button className="w-full text-lg mt-5">Home</Button></Link>
                    <Link to="/wrap">
                        {" "}
                        <Button className="w-full my-2 text-lg">KudosWrap</Button>
                    </Link>
                    <Link to={"/checkIn"}><Button className="w-full text-lg">Check In</Button></Link>
                </DrawerHeader>
                <DrawerFooter>
                    <Link to={"/profile"}><Button className="w-full my-2 text-lg">Profile</Button></Link>
                    <DrawerClose asChild>
                        <Button onClick={logout} variant="outline" className="text-lg">
                            Logout
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
export default MenuDrawer;
