'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Send,
  Mail,
  ArrowUpRight,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';
import { RectButton } from '@/components/ui/RectButton';
import { PaymentSupportCard } from '@/components/ui/PaymentBadges';

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'github': return Github;
    case 'linkedin': return Linkedin;
    case 'youtube': return Youtube;
    case 'instagram': return Instagram;
    case 'discord': return MessageCircle;
    default: return MessageCircle;
  }
};

export default function HireMeClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(siteConfig.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: siteConfig.contact.web3FormsAccessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Inquiry from ${formData.name}`,
          message: formData.message,
          from_name: 'AnupamBuilds Portfolio Hire Form',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Submission failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Could not send message. Please check your internet connection.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 sm:pt-36 pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#10B981] font-semibold block mb-2">
          Contact &amp; Collaboration
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 font-display text-[#F0F3F8]">
          Let&apos;s Build Together
        </h1>
        <p className="text-sm sm:text-base text-[#8B95A5] leading-relaxed">
          Reach out for software contracts, full-stack engineering roles, AI system integrations, or join the AnupamStudios community.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
        {/* Left Column: Direct channels and social profiles (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Direct Email Card */}
          <div className="p-5 rounded-2xl bg-[#111620] border border-[#1E2837] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#151E2B] border border-[#233142] flex items-center justify-center text-[#10B981] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#717E92] block">
                  Direct Inquiries
                </span>
                <span className="text-sm sm:text-base font-bold text-[#F0F3F8] font-mono">
                  {siteConfig.contact.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-[#16212E] hover:bg-[#1E2D3E] text-xs font-mono text-[#E2E8F0] border border-[#253549] transition-all cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981] font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8B95A5]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-[#10B981]/15 hover:bg-[#10B981]/25 text-xs font-mono text-[#5EEAA0] border border-[#10B981]/40 transition-all font-semibold"
              >
                <span>Write Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Profiles Grid including AnupamStudios Discord */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {siteConfig.socials.map((social) => {
              const Icon = getSocialIcon(social.platform);
              const isDiscord = social.platform.toLowerCase() === 'discord';

              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all group ${
                    isDiscord
                      ? 'bg-[#151928] border-[#5865F2]/40 hover:border-[#5865F2] hover:bg-[#1A2035]'
                      : 'bg-[#111620] border-[#1C2636] hover:border-[#38BDF8]/40 hover:bg-[#161F2C]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isDiscord ? 'text-[#5865F2]' : 'text-[#8B95A5] group-hover:text-[#38BDF8]'}`} />
                    <span className="text-xs font-medium text-[#F0F3F8]">
                      {social.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#717E92] group-hover:text-[#F0F3F8] transition-colors" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="bg-[#111620] border border-[#1E2837] rounded-2xl p-6 sm:p-7 shadow-lg">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#5EEAA0] border border-[#10B981]/30 text-[10px] font-mono font-medium mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Direct Form Active</span>
            </div>
            <h2 className="text-lg font-bold text-[#F0F3F8] font-display mb-1">
              Send a Message
            </h2>
            <p className="text-xs text-[#8B95A5] mb-5">
              Instant delivery directly to Anupam&apos;s inbox. No email client required.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              <div>
                <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-[#8B95A5] mb-1.5 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0E131A] border border-[#1E2838] rounded-lg px-3.5 py-2.5 text-xs text-[#F0F3F8] placeholder-[#586274] focus:outline-none focus:border-[#10B981] transition-colors"
                  placeholder="Alex Morgan"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-[#8B95A5] mb-1.5 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0E131A] border border-[#1E2838] rounded-lg px-3.5 py-2.5 text-xs text-[#F0F3F8] placeholder-[#586274] focus:outline-none focus:border-[#10B981] transition-colors"
                  placeholder="alex@company.com"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="subject" className="block text-[11px] font-mono uppercase tracking-wider text-[#8B95A5] font-medium">
                    Subject
                  </label>
                  <span className="text-[10px] font-mono text-[#586274]">Click a template below</span>
                </div>

                {/* Preset Subject Chips */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {[
                    "I want to build myself a website",
                    "I want to build an Android application",
                    "I want animated UI / software",
                    "I need Minecraft modding / server systems",
                    "I need AI / Agentic integration",
                  ].map((preset) => {
                    const isSelected = formData.subject === preset;
                    return (
                      <button
                        type="button"
                        key={preset}
                        onClick={() => setFormData({ ...formData, subject: preset })}
                        className={`text-[10px] font-mono px-2 py-1 rounded-[3px] border transition-all text-left cursor-pointer ${
                          isSelected
                            ? 'bg-[#10B981]/20 border-[#10B981] text-[#5EEAA0] font-semibold'
                            : 'bg-[#141B26] border-[#1F2937] text-[#8B95A5] hover:text-[#F0F3F8] hover:border-[#38BDF8]/40'
                        }`}
                      >
                        {preset}
                      </button>
                    );
                  })}
                </div>

                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#0E131A] border border-[#1E2838] rounded-lg px-3.5 py-2.5 text-xs text-[#F0F3F8] placeholder-[#586274] focus:outline-none focus:border-[#10B981] transition-colors"
                  placeholder="Select a template above or type your subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-wider text-[#8B95A5] mb-1.5 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0E131A] border border-[#1E2838] rounded-lg px-3.5 py-2.5 text-xs text-[#F0F3F8] placeholder-[#586274] focus:outline-none focus:border-[#10B981] transition-colors resize-none"
                  placeholder="Hi Anupam, we are building a platform and want to collaborate..."
                />
              </div>

              {status === 'success' && (
                <div className="p-3 rounded-lg bg-[#10B981]/15 border border-[#10B981]/40 text-[#5EEAA0] text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0 text-[#10B981]" />
                  <span>Message sent directly to Anupam. Thanks for reaching out!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-500/15 border border-red-500/40 text-red-300 text-xs font-mono">
                  {errorMessage || 'Failed to send message. Please try again.'}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-[3px] bg-[#10B981] hover:bg-[#059669] disabled:opacity-50 text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer mt-2"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Linked Support & Direct Payment Card (UPI & Bitcoin) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <PaymentSupportCard />
      </motion.div>
    </div>
  );
}
