import React, { useState, useEffect } from 'react';

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => setVisible(false)}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#070B14] transition-opacity duration-300 cursor-pointer"
    >
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-teal-400 p-[2px] shadow-glow-blue">
          <div className="w-full h-full bg-[#070B14] rounded-2xl flex items-center justify-center">
            <span className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text">
              D
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-slate-400">
            DELVERSE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping"></span>
        </div>
      </div>
    </div>
  );
};
