'use client';

import React, { useState } from 'react';
import { Copy, Check, QrCode } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function UpiIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 4L11.5 12L5.5 20H9.5L15.5 12L9.5 4H5.5Z" fill="#00B050" />
      <path d="M12.5 4L18.5 12L12.5 20H16.5L22.5 12L16.5 4H12.5Z" fill="#F47920" />
    </svg>
  );
}

export function BitcoinIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#F7931A" />
      <path
        d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783-1.728-.431-.708 2.839c-.376-.086-.745-.17-1.104-.258l.002-.007-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.314-1.256-.314l-.858 1.978 2.25.561c.418.105.828.214 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.705 2.828 1.728.432.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.535 2.146-4.148.986-5.318.695l.949-3.803c1.17.292 4.928.872 4.369 3.108zm.536-5.578c-.488 1.954-3.495.962-4.47.718l.86-3.45c.975.243 4.118.697 3.61 2.732z"
        fill="white"
      />
    </svg>
  );
}

export function PaymentSupportCard() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showQr, setShowQr] = useState<string | null>(null);

  const handleCopy = (key: string, value: string) => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <div className="bg-[#111620] border border-[#1E2837] rounded-2xl p-6 sm:p-7 shadow-lg">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg font-bold text-[#F0F3F8] font-display">
            Support &amp; Direct Payments
          </h3>
          <p className="text-xs sm:text-sm text-[#8B95A5] mt-0.5">
            Accepting direct UPI payments across India &amp; Bitcoin crypto worldwide.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        {/* UPI Card */}
        <div className="p-4 rounded-xl bg-[#0B0F15] border border-[#1A2330] flex flex-col justify-between group hover:border-[#00B050]/50 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <UpiIcon className="w-5 h-5 shrink-0" />
              <span className="text-xs font-mono font-bold text-[#E2E8F0] uppercase tracking-wider">
                UPI Payment ID
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#00B050] bg-[#00B050]/10 px-2 py-0.5 rounded border border-[#00B050]/20 font-semibold">
              Instant
            </span>
          </div>

          <div className="font-mono text-xs text-[#5EEAA0] bg-[#121A24] px-3 py-2 rounded border border-[#1E2A38] mb-3 select-all truncate font-medium">
            {siteConfig.payments.upi}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleCopy('upi', siteConfig.payments.upi)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[3px] bg-[#16212E] hover:bg-[#1E2D3E] text-xs font-mono text-[#E2E8F0] border border-[#253549] transition-all cursor-pointer"
            >
              {copiedKey === 'upi' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#10B981] font-semibold">Copied UPI ID!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#8B95A5]" />
                  <span>Copy UPI ID</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bitcoin Card */}
        <div className="p-4 rounded-xl bg-[#0B0F15] border border-[#1A2330] flex flex-col justify-between group hover:border-[#F7931A]/50 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <BitcoinIcon className="w-5 h-5 shrink-0" />
              <span className="text-xs font-mono font-bold text-[#E2E8F0] uppercase tracking-wider">
                BTC Crypto Address
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#F7931A] bg-[#F7931A]/10 px-2 py-0.5 rounded border border-[#F7931A]/20 font-semibold">
              Global
            </span>
          </div>

          <div className="font-mono text-[11px] text-[#FBD38D] bg-[#121A24] px-3 py-2 rounded border border-[#1E2A38] mb-3 select-all truncate font-medium">
            {siteConfig.payments.btc}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleCopy('btc', siteConfig.payments.btc)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[3px] bg-[#16212E] hover:bg-[#1E2D3E] text-xs font-mono text-[#E2E8F0] border border-[#253549] transition-all cursor-pointer"
            >
              {copiedKey === 'btc' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#10B981] font-semibold">Copied BTC Address!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#8B95A5]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
