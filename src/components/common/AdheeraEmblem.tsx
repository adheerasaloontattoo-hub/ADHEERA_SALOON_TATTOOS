import React from 'react';

interface AdheeraEmblemProps {
  size?: number | string;
  className?: string;
  showText?: boolean;
}

export const AdheeraEmblem: React.FC<AdheeraEmblemProps> = ({
  size = 120,
  className = '',
  showText = true
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="Adheera Saloon & Tattoos Official Royal Emblem"
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_25px_rgba(201,154,61,0.35)]"
      >
        <defs>
          {/* Rich Metallic Gold Gradients */}
          <linearGradient id="goldLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="35%" stopColor="#E6C46A" />
            <stop offset="70%" stopColor="#C99A3D" />
            <stop offset="100%" stopColor="#8D6A2C" />
          </linearGradient>

          <linearGradient id="goldDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#AA7A1E" />
            <stop offset="100%" stopColor="#5B3E0A" />
          </linearGradient>

          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F9E29C" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#C99A3D" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#C99A3D" stopOpacity="0" />
          </radialGradient>

          <filter id="goldShine" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Ambient Glow */}
        <circle cx="250" cy="230" r="190" fill="url(#goldGlow)" />

        {/* Background Outer Ring & Flourishes */}
        <circle
          cx="250"
          cy="220"
          r="165"
          stroke="url(#goldLight)"
          strokeWidth="6"
          strokeDasharray="4 2"
          className="opacity-60"
        />
        <circle
          cx="250"
          cy="220"
          r="155"
          stroke="url(#goldDark)"
          strokeWidth="3"
        />

        {/* Crossed Barber Shears (Scissors) */}
        {/* Left Scissor Blade */}
        <g id="scissorLeft" filter="url(#goldShine)">
          <path
            d="M140 330 L320 110"
            stroke="url(#goldLight)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Finger ring */}
          <circle cx="125" cy="345" r="22" stroke="url(#goldLight)" strokeWidth="6" fill="#0c0c0c" />
          <circle cx="125" cy="345" r="14" stroke="url(#goldDark)" strokeWidth="2" fill="none" />
        </g>

        {/* Right Scissor Blade */}
        <g id="scissorRight" filter="url(#goldShine)">
          <path
            d="M360 330 L180 110"
            stroke="url(#goldLight)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Finger ring */}
          <circle cx="375" cy="345" r="22" stroke="url(#goldLight)" strokeWidth="6" fill="#0c0c0c" />
          <circle cx="375" cy="345" r="14" stroke="url(#goldDark)" strokeWidth="2" fill="none" />
        </g>

        {/* Crossed Barber Combs */}
        {/* Left Comb */}
        <g id="combLeft" transform="rotate(-38 250 220)" opacity="0.9">
          <rect x="150" y="205" width="200" height="18" rx="4" fill="url(#goldDark)" stroke="url(#goldLight)" strokeWidth="2" />
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={`combL-${i}`}
              x1={160 + i * 10}
              y1="223"
              x2={160 + i * 10}
              y2="242"
              stroke="url(#goldLight)"
              strokeWidth="2.5"
            />
          ))}
        </g>

        {/* Right Comb */}
        <g id="combRight" transform="rotate(38 250 220)" opacity="0.9">
          <rect x="150" y="205" width="200" height="18" rx="4" fill="url(#goldDark)" stroke="url(#goldLight)" strokeWidth="2" />
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={`combR-${i}`}
              x1={160 + i * 10}
              y1="223"
              x2={160 + i * 10}
              y2="242"
              stroke="url(#goldLight)"
              strokeWidth="2.5"
            />
          ))}
        </g>

        {/* Central Dark Shield Medallion */}
        <circle cx="250" cy="220" r="130" fill="#090909" stroke="url(#goldLight)" strokeWidth="8" />
        <circle cx="250" cy="220" r="122" stroke="url(#goldDark)" strokeWidth="2" fill="none" />

        {/* Vertical Center Sword/Divider */}
        <path d="M250 110 L250 310" stroke="url(#goldLight)" strokeWidth="4" />
        <polygon points="250,95 244,115 256,115" fill="url(#goldLight)" />
        <polygon points="250,325 244,305 256,305" fill="url(#goldLight)" />

        {/* Left Half: Bearded Gentleman Silhouette with styled hair */}
        <g id="beardedProfile" filter="url(#goldShine)">
          {/* Hair pompadour */}
          <path
            d="M210 145 C195 140 175 155 172 175 C168 190 178 195 182 205 C185 212 180 220 182 225 C185 232 195 235 198 238 C202 248 215 255 225 258 C232 260 236 250 240 245 C235 240 225 235 220 225 C215 215 222 208 220 195 C218 185 225 175 228 165 C230 155 220 148 210 145 Z"
            fill="url(#goldLight)"
          />
          {/* Forehead, nose, mustache, full beard */}
          <path
            d="M188 185 L175 200 L185 204 L178 215 L190 222 L180 235 C185 250 198 275 225 295 C232 300 238 290 242 278 C235 270 225 255 222 245 C218 240 215 230 220 225 L210 215 C202 205 202 195 188 185 Z"
            fill="url(#goldLight)"
          />
          {/* Fine gold hair stroke details */}
          <path d="M190 160 C200 170 215 172 225 170" stroke="#090909" strokeWidth="2" strokeLinecap="round" />
          <path d="M182 178 C195 185 210 185 220 180" stroke="#090909" strokeWidth="2" strokeLinecap="round" />
          <path d="M195 240 C205 255 218 268 230 272" stroke="#090909" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Right Half: Rotary Tattoo Machine & Needle */}
        <g id="tattooMachine" transform="translate(15, 0)" filter="url(#goldShine)">
          {/* Frame & Motor Top */}
          <rect x="255" y="150" width="36" height="24" rx="4" fill="url(#goldLight)" stroke="url(#goldDark)" strokeWidth="2" />
          <circle cx="273" cy="162" r="7" fill="#0c0c0c" stroke="url(#goldLight)" strokeWidth="2" />
          {/* Connector bars */}
          <path d="M265 174 L265 210" stroke="url(#goldLight)" strokeWidth="6" />
          <path d="M281 174 L281 210" stroke="url(#goldLight)" strokeWidth="6" />
          {/* Knurled Grip Tube */}
          <rect x="260" y="210" width="26" height="48" rx="3" fill="url(#goldLight)" stroke="url(#goldDark)" strokeWidth="2" />
          {/* Grip knurl ridges */}
          <line x1="260" y1="220" x2="286" y2="220" stroke="#090909" strokeWidth="2" />
          <line x1="260" y1="228" x2="286" y2="228" stroke="#090909" strokeWidth="2" />
          <line x1="260" y1="236" x2="286" y2="236" stroke="#090909" strokeWidth="2" />
          <line x1="260" y1="244" x2="286" y2="244" stroke="#090909" strokeWidth="2" />
          <line x1="260" y1="252" x2="286" y2="252" stroke="#090909" strokeWidth="2" />
          {/* Needle Tip Cartridge */}
          <polygon points="273,290 266,258 280,258" fill="url(#goldLight)" stroke="url(#goldDark)" strokeWidth="1.5" />
          <line x1="273" y1="290" x2="273" y2="305" stroke="url(#goldLight)" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Imperial Crown on Top */}
        <g id="crown" filter="url(#goldShine)">
          <path
            d="M195 105 L210 65 L230 85 L250 45 L270 85 L290 65 L305 105 Z"
            fill="url(#goldLight)"
            stroke="url(#goldDark)"
            strokeWidth="3"
          />
          {/* Crown Base Band */}
          <rect x="195" y="103" width="110" height="15" rx="3" fill="url(#goldDark)" stroke="url(#goldLight)" strokeWidth="2" />
          {/* Crown Jewels */}
          <circle cx="250" cy="45" r="5" fill="#FFF2B2" />
          <circle cx="210" cy="65" r="4" fill="#FFF2B2" />
          <circle cx="290" cy="65" r="4" fill="#FFF2B2" />
          <circle cx="225" cy="110" r="3" fill="#FFF2B2" />
          <circle cx="250" cy="110" r="4" fill="#FFF2B2" />
          <circle cx="275" cy="110" r="3" fill="#FFF2B2" />
        </g>

        {/* Ornate Baroque Leaf Flourishes Around Border */}
        <g id="baroqueFlourishes" stroke="url(#goldLight)" strokeWidth="3" fill="none">
          {/* Left Wing Flourish */}
          <path d="M120 180 C80 200 70 260 110 300 C80 280 85 240 115 220" />
          <path d="M100 240 C60 270 70 320 115 350" />
          {/* Right Wing Flourish */}
          <path d="M380 180 C420 200 430 260 390 300 C420 280 415 240 385 220" />
          <path d="M400 240 C440 270 430 320 385 350" />
        </g>

        {/* Royal Golden Arch Title: "ADHEERA" */}
        {showText && (
          <g id="adheeraText" filter="url(#goldShine)">
            {/* Outer Drop Shadow / Glow for letters */}
            <text
              x="250"
              y="370"
              textAnchor="middle"
              fontFamily="'Cinzel', serif"
              fontSize="68"
              fontWeight="900"
              letterSpacing="6"
              fill="url(#goldLight)"
              stroke="url(#goldDark)"
              strokeWidth="3"
            >
              ADHEERA
            </text>
          </g>
        )}

        {/* Ribbon Plaque: "SALOON & TATTOOS" */}
        {showText && (
          <g id="saloonTattoosBanner">
            {/* Black Plaque with ornate notched corners */}
            <rect
              x="80"
              y="390"
              width="340"
              height="44"
              rx="8"
              fill="#060606"
              stroke="url(#goldLight)"
              strokeWidth="4"
              filter="url(#goldShine)"
            />
            {/* Inner Gold Frame */}
            <rect
              x="86"
              y="396"
              width="328"
              height="32"
              rx="4"
              fill="none"
              stroke="url(#goldDark)"
              strokeWidth="1.5"
            />
            {/* Left & Right Diamond studs */}
            <polygon points="98,412 104,406 110,412 104,418" fill="url(#goldLight)" />
            <polygon points="390,412 396,406 402,412 396,418" fill="url(#goldLight)" />

            {/* Banner Text */}
            <text
              x="250"
              y="418"
              textAnchor="middle"
              fontFamily="'Cinzel', 'Plus Jakarta Sans', sans-serif"
              fontSize="19"
              fontWeight="800"
              letterSpacing="5"
              fill="url(#goldLight)"
            >
              SALOON &amp; TATTOOS
            </text>
          </g>
        )}

        {/* Bottom Finial / Royal Scrollwork Drop */}
        <g id="bottomFinial" filter="url(#goldShine)">
          <path
            d="M250 440 L250 480"
            stroke="url(#goldLight)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon points="250,490 240,470 260,470" fill="url(#goldLight)" />
          {/* Side curls */}
          <path
            d="M210 445 C230 460 245 465 250 470 C255 465 270 460 290 445"
            stroke="url(#goldLight)"
            strokeWidth="3"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};
