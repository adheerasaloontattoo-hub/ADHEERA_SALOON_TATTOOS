import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {subtitle && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-[#C99A3D]/40 bg-[#181818] text-[#E6C46A] text-xs font-semibold tracking-widest uppercase`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3D]" />
          {subtitle}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider text-[#F5F5F5] uppercase">
        {title.split(' ').map((word, i) => {
          if (word.toUpperCase() === 'TATOOS' || word.toUpperCase() === 'SALOON' || word.toUpperCase() === 'ADHEERA' || word.toUpperCase() === 'SIGNATURE' || word.toUpperCase() === 'PERMANENT') {
            return (
              <span key={i} className="gold-text-gradient font-black">
                {word}{' '}
              </span>
            );
          }
          return word + ' ';
        })}
      </h2>

      {/* Decorative gold hairline divider */}
      <div className={`flex items-center gap-3 my-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C99A3D]" />
        <div className="w-2 h-2 rotate-45 border border-[#C99A3D] bg-[#080808]" />
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C99A3D]" />
      </div>

      {description && (
        <p className="text-sm sm:text-base text-[#A8A8A8] font-normal leading-relaxed mt-2">
          {description}
        </p>
      )}
    </div>
  );
};
