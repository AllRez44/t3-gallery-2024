'use client';

import type { ElementRef, MouseEvent } from 'react';
import { useEffect, useRef } from 'react';
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

    const onClickImage = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return createPortal(
        <dialog
            onClick={onDismiss}
            ref={dialogRef}
            className="modal flex w-screen h-screen justify-center items-center bg-zinc-900/50 text-white"
            onClose={onDismiss}
        >
            <div className="w-fit h-fit" onClick={onClickImage}>{children}</div>
        </dialog>,
        document.getElementById('modal-root')!
    );
}