import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generatePageTitle(key: string, name?: string): string {
  const titles: Record<string, string> = {
    home: 'Cultiva100 - Premium Natural Health Supplements',
    products: 'Products - Cultiva100',
    about: 'About Us - Cultiva100',
    lab: 'Cultiva Lab - Scientific Research',
    journal: 'Journal - Wellness Insights',
    club: 'The 100 Club - Premium Membership',
    contact: 'Contact Us - Cultiva100',
    cart: 'Shopping Cart - Cultiva100',
    checkout: 'Checkout - Cultiva100',
    auth: 'Sign In - Cultiva100',
    product: name ? `${name} - Cultiva100` : 'Product - Cultiva100',
  };
  return titles[key] || 'Cultiva100';
}
