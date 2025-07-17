import { useState } from 'react';

const TooltipWrapper = ({ children, content, id }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-20 flex flex-col items-center">
          <div
            className="px-5 py-2 bg-neutral-900 text-white text-base font-medium rounded-full shadow-lg border border-neutral-700 text-center whitespace-nowrap"
            style={{ transition: 'opacity 0.15s, transform 0.15s' }}
          >
            {content}
          </div>
          <svg width="22" height="8" viewBox="0 0 22 8" className="-mt-1">
            <polygon points="11,8 0,0 22,0" fill="#171717" />
            <polygon points="11,8 2,2 20,2" fill="#171717" opacity="0.5" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default TooltipWrapper; 