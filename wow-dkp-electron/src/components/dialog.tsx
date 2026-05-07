import { cn } from "@/lib/utils";
import { useRef } from "react";

type Props = {
  modalId: string;
  children: React.ReactNode;
  buttonTitle: string;
  buttonClassName?: string;
};

const Dialog = ({ modalId, children, buttonTitle, buttonClassName }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <button
        className={cn("btn", buttonClassName)}
        onClick={() => dialogRef.current?.showModal()}
        type="button"
      >
        {buttonTitle}
      </button>
      <dialog id={modalId} ref={dialogRef} className="modal">
        <div className="modal-box">
          {children}

          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0"
            onClick={() => dialogRef.current?.close()}
          >
            ✕
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Dialog;
