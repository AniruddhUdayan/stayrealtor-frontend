import TooltipWrapper from './TooltipWrapper';

const DisabledButton = ({ children, reason, variant = 'primary', size = 'md', className = '' }) => {
  const baseClasses = "font-medium rounded-lg transition-colors cursor-not-allowed flex items-center justify-center";
  const sizeClasses = {
    sm: 'px-sm py-xs text-sm',
    md: 'px-lg py-sm',
    lg: 'px-xl py-md text-lg'
  };
  const variantClasses = {
    primary: 'bg-neutral-300 text-neutral-500 border border-neutral-300',
    secondary: 'bg-neutral-100 text-neutral-400 border border-neutral-200',
    danger: 'bg-error-100 text-error-400 border border-error-200'
  };

  return (
    <TooltipWrapper content={reason}>
      <button
        disabled
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </button>
    </TooltipWrapper>
  );
};

export default DisabledButton; 