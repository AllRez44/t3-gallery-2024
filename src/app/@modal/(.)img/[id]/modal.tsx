'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<'dialog'>>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    }

    const handleClickImage = (event: Event) => {
        event.stopPropagation();
    };

    return createPortal(
        <dialog onClick={onDismiss} ref={dialogRef} className="modal flex w-screen h-screen justify-center items-center bg-zinc-900/50" onClose={onDismiss}>
            <div className="w-fit h-fit" onClick={handleClickImage}>{children}</div>
            <button onClick={onDismiss} className="close-button" />
        </dialog>,
        document.getElementById('modal-root')!
    );
}