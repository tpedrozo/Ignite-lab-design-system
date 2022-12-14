import { ReactNode } from "react";
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
    size: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ size = 'md', children, asChild }: ButtonProps) {
    const Component = asChild ? Slot : 'button'


    return (
        <Component className={clsx(
            'py-4 px-5 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 focus:ring-white',
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
            }
        )}
        >{children}</Component>
    )
} 