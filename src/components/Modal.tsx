import React, { useEffect } from "react";

const Modal = ({
  children,
  className,
  open,
  onClose,
}: {
  children: React.ReactNode;
  className?: string;
  open: boolean;
  onClose: (value: boolean) => void;
}) => {
  document.body.style.overflow =  open ? "hidden" : ""

  return (
    <article
      onClick={() => {
        onClose(false);
      }}
      className={`fixed inset-0 flex justify-center items-center z-[999] transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={` shadow p-6 transition-all duration-500 ${className} ${
          open ? "opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {children}
      </aside>
    </article>
  );
};

export default Modal;
