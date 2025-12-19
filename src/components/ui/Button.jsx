import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-full font-body";

  const variants = {
    primary: "bg-primary text-white hover:bg-black hover:text-white shadow-lg hover:shadow-xl",
    secondary: "bg-secondary text-foreground hover:bg-primary hover:text-white border border-transparent",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-foreground hover:text-primary hover:bg-secondary/50",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-12 px-8 text-sm",
    lg: "h-14 px-10 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
