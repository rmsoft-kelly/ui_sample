import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import React from "react";

const AlertModal = ({
  open,
  setOpen,
  title,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="p-0 border-none overflow-hidden w-[320px]">
        <header className="bg-secondary py-[10px] px-5 flex justify-between items-center gap-2 h-10">
          <h3 className="font-bold">{title}</h3>
          <Button
            variant={"ghost"}
            className="p-1 h-fit shrink-0"
            onClick={() => setOpen(false)}
          >
            X
          </Button>
        </header>
        <main className="flex items-center m-5 gap-2">
          <div className="w-10 h-10 bg-destructive text-white rounded-full flex justify-center items-center">
            icon
          </div>
          <div className="flex-1 break-all text-sm">
            TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT
          </div>
        </main>
        <footer className="flex gap-2 mx-5 mb-5">
          <Button
            className="flex-1 h-[30px] rounded-md"
            variant={"secondary"}
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <Button
            className="flex-1 h-[30px] rounded-md"
            variant={"destructive"}
            onClick={() => setOpen(false)}
          >
            OK
          </Button>
        </footer>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertModal;
