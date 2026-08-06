import { IconX } from "@/components/ui/icon/icon-x.jsx";
import { useEffect, useRef } from "react";

/**
 * Renders a controlled native modal dialog with a title and close control.
 * @param {object} props - Component props.
 * @param {string} [props.title=""] - Dialog title.
 * @param {React.ReactNode} [props.children] - Dialog body content.
 * @param {boolean} [props.openState=false] - Whether the dialog is open.
 * @param {() => void} [props.handleClose] - Called after a close action or backdrop click.
 * @returns {React.JSX.Element} The controlled dialog.
 */
export default function SimpleDialog({
  title = "",
  children = <></>,
  openState = false,
  handleClose = () => {},
}) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openState) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [openState]);
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };
  return (
    <dialog
      ref={dialogRef}
      className="dialog"
      onClose={handleClose}
      onClick={handleBackdropClick}
      aria-labelledby="dialog-title"
    >
      <div className="dialog-header">
        <h2 id="dialog-title" className="dialog-title">
          <span className="sub-heading-main">{title}</span>
        </h2>
        <button className="dialog-close-btn" aria-label="close" onClick={handleClose} type="button">
          <IconX width="24px" height="24px" />
        </button>
      </div>
      <div className="dialog-content">{children}</div>
    </dialog>
  );
}
