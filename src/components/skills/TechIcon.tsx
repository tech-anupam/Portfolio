'use client';

import React from 'react';

export function TechIcon({ name, className = 'w-4 h-4' }: { name: string; className?: string }) {
  const n = name.toLowerCase();

  // Python
  if (n.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 1a5.9 5.9 0 0 0-5.9 5.9v2.3h5.9v.8H3.5a2.5 2.5 0 0 0-2.5 2.5v4.2a2.5 2.5 0 0 0 2.5 2.5h1.7v-2.3a4.2 4.2 0 0 1 4.2-4.2h5.8v-.8H9.4V8.6A4.2 4.2 0 0 1 13.6 4.4h3.3A2.5 2.5 0 0 0 19.4 1.9V1H11.9zm-2.5 1.7a.8.8 0 1 1 0 1.7.8.8 0 0 1 0-1.7zm2.7 7.5v.8h5.8a4.2 4.2 0 0 1 4.2 4.2v2.8a4.2 4.2 0 0 1-4.2 4.2h-3.3a2.5 2.5 0 0 0-2.5 2.5V23h7.5a5.9 5.9 0 0 0 5.9-5.9v-2.3h-5.9v-.8h8.4a2.5 2.5 0 0 0 2.5-2.5V7.3a2.5 2.5 0 0 0-2.5-2.5h-1.7v2.3a4.2 4.2 0 0 1-4.2 4.2h-5.8zm2.5 10.4a.8.8 0 1 1 0 1.7.8.8 0 0 1 0-1.7z" />
      </svg>
    );
  }

  // Go
  if (n === 'go' || n.includes('golang')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.9 9.3c.3-.6.6-1.1 1.1-1.5 1-.9 2.3-1.4 3.7-1.4 2.2 0 4 1.1 4.9 2.9l-2.4 1.4c-.5-.9-1.4-1.5-2.5-1.5-1.4 0-2.5 1.1-2.5 2.6s1.1 2.6 2.5 2.6c1.1 0 2-.6 2.5-1.5l2.4 1.4c-1 1.8-2.8 2.9-4.9 2.9-2.9 0-5.3-2.3-5.3-5.3 0-1.5.7-2.9 1.8-4.1zm15.8-2.8h2.8v10.9h-2.8v-1.3c-.7 1-1.8 1.6-3.1 1.6-2.5 0-4.6-2.1-4.6-5.6s2.1-5.6 4.6-5.6c1.3 0 2.4.6 3.1 1.6V6.5zm-3.6 8.5c1.4 0 2.5-1.1 2.5-2.9s-1.1-2.9-2.5-2.9-2.5 1.1-2.5 2.9 1.1 2.9 2.5 2.9z" />
      </svg>
    );
  }

  // TypeScript / JavaScript
  if (n.includes('typescript') || n.includes('javascript') || n === 'ts' || n === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 1.5h21v21h-21V1.5zm15.4 15.6c1.2 0 2.2-.4 2.8-1.2.6-.8.8-1.9.8-3.3 0-1.4-.3-2.5-.9-3.3-.6-.8-1.5-1.2-2.7-1.2-.8 0-1.5.2-2 .7v-3.7h-2.1v11.7h2.1v-1c.6.6 1.3 1 2 1zm-.4-1.8c-.6 0-1.1-.2-1.5-.7-.4-.5-.6-1.1-.6-2s.2-1.5.6-2c.4-.5.9-.7 1.5-.7.6 0 1.1.2 1.5.7.4.5.6 1.1.6 2s-.2 1.5-.6 2c-.4.5-.9.7-1.5.7zm-8.8 1.8c1.3 0 2.3-.4 3-1.1.7-.7 1.1-1.7 1.1-3 0-.8-.2-1.5-.6-2-.4-.5-1-1-1.8-1.4l-.8-.4c-.5-.3-.9-.6-1.1-.9-.2-.3-.3-.7-.3-1.1 0-.5.2-.9.5-1.2.3-.3.8-.5 1.4-.5.6 0 1.1.2 1.4.5.3.3.5.8.6 1.4h2c-.1-1-.5-1.8-1.2-2.4-.7-.6-1.6-.9-2.8-.9-1.2 0-2.1.3-2.8 1-.7.7-1 1.6-1 2.7 0 .8.2 1.5.6 2 .4.5 1 1 1.7 1.4l.8.4c.6.3 1 .6 1.2 1 .2.3.3.7.3 1.2 0 .6-.2 1.1-.6 1.4-.4.4-.9.6-1.6.6-.7 0-1.3-.2-1.7-.7-.4-.5-.6-1.1-.6-2h-2c0 1.2.4 2.1 1.2 2.8.8.7 1.9 1.1 3.2 1.1z" />
      </svg>
    );
  }

  // C++
  if (n.includes('c++') || n.includes('cpp')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.8a5.8 5.8 0 1 1 0-9.6l-1 1.7a3.8 3.8 0 1 0 0 6.2zm4.5-3.8h1.5v-1h-1.5V10.5h-1v1.5h-1.5v1h1.5v1.5h1zm4 0h1.5v-1H21V10.5h-1v1.5h-1.5v1h1.5v1.5h1z" />
      </svg>
    );
  }

  // Kotlin / Android
  if (n.includes('kotlin') || n.includes('android')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 7.9L19.4 4.6c.2-.3.1-.7-.2-.9-.3-.2-.7-.1-.9.2l-2 3.4c-1.3-.6-2.8-.9-4.3-.9-1.5 0-3 .3-4.3.9L5.7 3.9c-.2-.3-.6-.4-.9-.2-.3.2-.4.6-.2.9l1.9 3.3C3.5 9.7 1.5 12.6 1 16h22c-.5-3.4-2.5-6.3-5.5-8.1zM7 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm10 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM2 17.5h20v2.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.5z" />
      </svg>
    );
  }

  // React / Next.js
  if (n.includes('react') || n.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2.2" />
        <path d="M12 2.5C7.2 2.5 3 6.8 3 12s4.2 9.5 9 9.5 9-4.3 9-9.5-4.2-9.5-9-9.5zm0 17c-3.9 0-7-3.4-7-7.5S8.1 4.5 12 4.5s7 3.4 7 7.5-3.1 7.5-7 7.5z" />
        <path d="M19.8 7.5C18 4.4 14.8 3 12 3S6 4.4 4.2 7.5c-1.8 3.1-1.3 6.8.5 9.5 1.8 2.7 5.1 4 7.3 4s5.5-1.3 7.3-4c1.8-2.7 2.3-6.4.5-9.5zm-1.7 8.5C16.8 18 14.5 19 12 19s-4.8-1-6.1-3c-1.3-2-1.1-4.8.2-7 1.3-2.2 3.5-3.5 5.9-3.5s4.6 1.3 5.9 3.5c1.3 2.2 1.5 5 .2 7z" />
      </svg>
    );
  }

  // Database / SQL / PostgreSQL / MySQL / MongoDB
  if (n.includes('database') || n.includes('sql') || n.includes('mongo') || n.includes('db')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  // Cloud / Vercel / Render / AWS
  if (n.includes('cloud') || n.includes('vercel') || n.includes('render') || n.includes('aws')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    );
  }

  // Default Code / Terminal
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
