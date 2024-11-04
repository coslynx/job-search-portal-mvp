import { classNames } from './helpers';
import { formatJob } from './formatters';
import { JobListing, JobDetails, UserProfile } from '../api/client';

export function formatCurrency(amount: number, currencyCode: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function formatDate(date: Date, format: string = 'MMMM do, yyyy'): string {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(date);
}

export function formatPhoneNumber(phoneNumber: string): string {
  if (phoneNumber.length === 10) {
    return `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6)}`;
  }
  return phoneNumber;
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isEmptyObject(obj: any): boolean {
  return Object.keys(obj).length === 0;
}

export function isArrayNotEmpty(arr: any[]): boolean {
  return Array.isArray(arr) && arr.length > 0;
}