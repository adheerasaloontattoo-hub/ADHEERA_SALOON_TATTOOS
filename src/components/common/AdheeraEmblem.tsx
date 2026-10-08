import React from 'react';

interface AdheeraEmblemProps {
  size?: number | string;
  className?: string;
  showText?: boolean;
}

export const AdheeraEmblem: React.FC<AdheeraEmblemProps> = ({
  size = 120,
  className = '',
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: dimension, height: dimension }}
    >
      {/* Ambient gold glow behind the emblem */}
      <div className="absolute inset-0 rounded-full bg-[#C99A3D]/20 blur-xl pointer-events-none transform scale-90" />

      {/* Official Adheera Gold Barbershop Emblem */}
      <img
        src="/adheera-logo.png"
        alt="Adheera Saloon & Tattoos Official Brand Logo Emblem"
        className="w-full h-full object-contain relative z-10 drop-shadow-[0_8px_20px_rgba(201,154,61,0.4)] hover:brightness-110 transition-all duration-300"
        loading="eager"
      />
    </div>
  );
};
