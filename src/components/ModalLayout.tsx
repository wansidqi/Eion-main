import React, { useRef, useEffect } from 'react';

interface Props {
  modalState: boolean;
  handleClose?: () => any;
  children: React.ReactNode;
}

export function ModalLayout({ modalState, handleClose, children }: Props): JSX.Element {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalState) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
    const handleClick = (event: any) => {
      if (modalRef.current && event.target === modalRef.current) {
        handleClose && handleClose();
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [modalState]);

  return (
    <div>
      {modalState && (
        <>
          <div ref={modalRef} className={`flexcenter fixed inset-0 z-50 bg-[#000000] bg-opacity-80`}>
            <div className="w-full bg-opacity-90 text-[16px]">{children}</div>
          </div>
        </>
      )}
    </div>
  );
}
