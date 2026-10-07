import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyDetails } from '../data/delverseData';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={companyDetails.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Chat with Delverse Advisors"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-105 active:scale-95 group"
    >
      <div className="relative">
        <MessageSquare size={20} className="fill-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
      </div>
      <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
        Chat with Advisor
      </span>
    </a>
  );
};
