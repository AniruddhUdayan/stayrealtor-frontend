const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center py-2xl">
      <div className={`${sizeClasses[size]} border-2 border-neutral-200 border-t-primary-600 rounded-full animate-spin`}></div>
      {text && <p className="mt-md text-neutral-600 text-sm font-medium">{text}</p>}
    </div>
  );
};

export default LoadingSpinner; 