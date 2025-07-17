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
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-sm py-xs bg-neutral-900 text-white text-xs rounded-lg whitespace-nowrap z-10">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-neutral-900"></div>
        </div>
      )}
    </div>
  );
};

export default TooltipWrapper; 