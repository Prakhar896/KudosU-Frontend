import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MoreHorizontal } from "lucide-react";

function DetailsPopUp({ imgName, text, isAnonymus, from }) {
  return (
    <Dialog>
      <DialogTrigger>
        <MoreHorizontal />
      </DialogTrigger>
      <DialogContent className="w-80 m-auto">
        <DialogHeader>
          <DialogTitle className="m-4 ">
            <img src={imgName}></img>
          </DialogTitle>
          <DialogDescription className="text-lg">{text}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end text-right text-sm mt-2">
          {isAnonymus ? "From: Anonymus" : `From: ${from}`}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default DetailsPopUp;
