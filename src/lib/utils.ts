import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// TailwindCSS 클래스 병합 유틸리티
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 이메일 유효성 검사
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// URL 유효성 검사
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// 문자열 자르기 (말줄임표 추가)
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// 날짜 포맷팅
export function formatDate(date: string | Date, locale: string = 'ko-KR'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// 기간 계산 (예: "2024.04 ~ 재직중")
export function formatPeriod(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const startFormat = start.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
  }).replace('.', '.').replace('. ', '.');
  
  if (!endDate) {
    return `${startFormat} ~ 재직중`;
  }
  
  const endFormat = end.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
  }).replace('.', '.').replace('. ', '.');
  
  return `${startFormat} ~ ${endFormat}`;
}

// 경력 기간 계산 (년/월)
export function calculateExperience(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  
  if (years === 0) {
    return `${months}개월`;
  } else if (months === 0) {
    return `${years}년`;
  } else {
    return `${years}년 ${months}개월`;
  }
}

// 스크롤 부드럽게 이동
export function smoothScrollTo(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// 로컬 스토리지 헬퍼
export const localStorage = {
  set: (key: string, value: unknown): void => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  },
  get: <T>(key: string, defaultValue?: T): T | null => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue || null;
    }
    return defaultValue || null;
  },
  remove: (key: string): void => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(key);
    }
  },
};

// 세션 스토리지 헬퍼
export const sessionStorage = {
  set: (key: string, value: unknown): void => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  },
  get: <T>(key: string, defaultValue?: T): T | null => {
    if (typeof window !== 'undefined') {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue || null;
    }
    return defaultValue || null;
  },
  remove: (key: string): void => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem(key);
    }
  },
};

// 디바운스 함수
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// 쓰로틀 함수
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
} 