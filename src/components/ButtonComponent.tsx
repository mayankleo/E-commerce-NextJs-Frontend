import { forwardRef, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return (
    <button 
    {...props} 
    ref={ref} 
    className={twMerge(`px-6 py-3.5 bg-black text-white rounded-lg font-medium tracking-wide`, props.className)}>
      {props.children || 'Button'}
    </button>
  );
});

Button.displayName = 'MyCustomButton';

export default Button;
