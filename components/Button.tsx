import React from 'react';
import {forwardRef} from 'react';
import { twMerge } from 'tailwind-merge';


interface ButtonProps 
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,children,disabled,type = "button", ...props}, ref) => 
    {return <button type = {type} className={twMerge(`w-full rounded-full 
    bg-green-500 text-black border border-transparent px-3 py-3 hover:opacity-75 transition disabled:cursor-not-allowed disabled:opacity-50 font-bold`, className)}
    disabled={disabled} ref={ref} {...props}
    >
    {children}
    </button>})
Button.displayName = "Button";
   
export default Button;