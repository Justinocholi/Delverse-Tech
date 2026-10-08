/**
 * @file TeamCard.tsx
 * @description Cognichip leadership and advisor card:
 * High-contrast architectural portrait/avatar, name, title, and 2-3 pill credential tags.
 */

import React from 'react';

export interface TeamMemberData {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  bio?: string;
  image?: string;
  isAdvisor?: boolean;
}

interface TeamCardProps {
  member: TeamMemberData;
  className?: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, className = '' }) => {
  return (
    <div
      className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#111113]/85 backdrop-blur-xl hover:border-white/[0.2] hover:bg-[#151518] transition-all duration-300 ${className}`}
    >
      <div>
        {/* Architectural Avatar / Monochrome Portrait */}
        <div className="relative w-full aspect-square rounded-xl md:rounded-2xl overflow-hidden mb-6 bg-[#0E0E12] border border-white/[0.06]">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#0A0A0B]">
              <span className="text-3xl font-mono text-white/30 font-light">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
          {/* Subtle Corner Telemetry Accent */}
          <div className="absolute top-3 right-3 text-[10px] font-mono text-white/40 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
            {member.isAdvisor ? 'ADV-CORE' : 'EXEC-POD'}
          </div>
        </div>

        {/* Name and Title */}
        <h4 className="text-xl md:text-2xl font-medium text-white tracking-tight leading-snug mb-1">
          {member.name}
        </h4>
        <p className="text-sm font-normal text-[#9CA3AF] mb-5">
          {member.title}
        </p>

        {member.bio && (
          <p className="text-xs text-[#9CA3AF]/90 leading-relaxed mb-5">
            {member.bio}
          </p>
        )}
      </div>

      {/* Pill-Shaped Credential Tags (2-3 tags) */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
        {member.credentials.map((tag, idx) => (
          <span
            key={idx}
            className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 group-hover:border-white/20 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
