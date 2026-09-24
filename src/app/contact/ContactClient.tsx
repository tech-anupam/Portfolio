"use client";

import { useState } from "react";
import { Github, Linkedin, Twitter, Code2, MessageCircle, Mail, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const platformIcons: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  LeetCode: Code2,
  Discord: MessageCircle,
};

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: siteConfig.contact.web3FormsAccessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Message from ${formData.name}`,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setErrorMessage("Could not send message. Please check your network.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 sm:pt-36 pb-24">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5EEAA0] font-semibold block mb-3">
            Direct Line
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-display text-[#F0F3F8]">Get in Touch</h1>
          <p className="text-[#9AA4B2] mb-8 leading-relaxed text-sm">
            Have a question, proposal, or want to collaborate on engineering systems? Connect directly through the form or via social platforms.
          </p>

          <div className="space-y-3">
            {siteConfig.socials.map((social) => {
              const Icon = platformIcons[social.platform] || Mail;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#111319] border border-[#1E232F] hover:border-[#10B981]/50 rounded-2xl transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#161922] border border-[#1E232F] flex items-center justify-center text-[#10B981] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-sm text-[#F0F3F8] group-hover:text-[#5EEAA0] transition-colors font-display">
                      {social.platform}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#586274] group-hover:text-[#5EEAA0] transition-colors">
                    Visit →
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="bg-[#111319] border border-[#1E232F] rounded-2xl p-6 sm:p-8 shadow-xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#5EEAA0] mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-[#F0F3F8] font-display">Message Sent</h2>
              <p className="text-sm text-[#9AA4B2] mb-6">
                Thanks for reaching out! I&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 bg-[#161922] hover:bg-[#1E232F] text-[#F0F3F8] text-sm font-medium rounded-xl transition font-mono border border-[#1E232F]"
              >
                Send Another
              </button>
            </div>
          ) : (
            <div>
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

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8B95A5] mb-2 font-semibold">Name</label>
                  <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-[#161922] border border-[#1E232F] rounded-xl px-4 py-3 text-sm focus:border-[#10B981] outline-none transition text-[#F0F3F8] placeholder-[#586274]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8B95A5] mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full bg-[#161922] border border-[#1E232F] rounded-xl px-4 py-3 text-sm focus:border-[#10B981] outline-none transition text-[#F0F3F8] placeholder-[#586274]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8B95A5] mb-2 font-semibold">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What's this regarding?"
                  className="w-full bg-[#161922] border border-[#1E232F] rounded-xl px-4 py-3 text-sm focus:border-[#10B981] outline-none transition text-[#F0F3F8] placeholder-[#586274]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8B95A5] mb-2 font-semibold">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message here..."
                  className="w-full bg-[#161922] border border-[#1E232F] rounded-xl px-4 py-3 text-sm focus:border-[#10B981] outline-none transition text-[#F0F3F8] placeholder-[#586274] resize-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/40 text-red-300 text-xs font-mono">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-[#10B981] hover:bg-[#059669] disabled:opacity-50 text-black font-bold uppercase tracking-wider text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-md mt-2 cursor-pointer"
              >
                <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
