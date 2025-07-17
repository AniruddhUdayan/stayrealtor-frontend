import { useRef, useState } from 'react';

const ImageCard = ({ image, type, title, selectedComparison, setLoadTimes }) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadTime, setLoadTime] = useState(null);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (imgRef.current) {
      const loadTime = performance.now() - imgRef.current.dataset.startTime;
      setLoadTime(Math.round(loadTime));
      if (setLoadTimes && selectedComparison) {
        setLoadTimes(prev => ({
          ...prev,
          [`${selectedComparison}_${type}`]: Math.round(loadTime)
        }));
      }
    }
  };

  const handleImageStart = () => {
    if (imgRef.current) {
      imgRef.current.dataset.startTime = performance.now();
    }
  };

  return (
    <div className={`bg-white rounded-xl p-lg border-2 transition-all ${
      type === 'poor' ? 'border-error-200 bg-error-50/30' : 'border-success-200 bg-success-50/30'
    }`}>
      <div className="flex items-center justify-between mb-md">
        <h3 className={`text-lg font-semibold ${
          type === 'poor' ? 'text-error-700' : 'text-success-700'
        }`}>
          {type === 'poor' ? '❌ Poor Quality' : '✅ Optimized'}
        </h3>
        <div className={`px-sm py-xs rounded-full text-xs font-medium ${
          type === 'poor' ? 'bg-error-100 text-error-700' : 'bg-success-100 text-success-700'
        }`}>
          {image.format}
        </div>
      </div>

      <div className="relative mb-md">
        <div className="aspect-video bg-neutral-200 rounded-lg overflow-hidden relative">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
          )}
          <img
            ref={imgRef}
            src={image.url}
            alt={title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadStart={handleImageStart}
            onLoad={handleImageLoad}
            loading="lazy"
          />
        </div>
        {loadTime && (
          <div className="absolute top-2 right-2 bg-black/70 text-white px-sm py-xs rounded text-xs font-medium">
            {loadTime}ms
          </div>
        )}
      </div>

      <div className="space-y-sm">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-neutral-700">File Size:</span>
          <span className={`text-sm font-semibold ${
            type === 'poor' ? 'text-error-600' : 'text-success-600'
          }`}>
            {image.size}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-neutral-700">Quality:</span>
          <span className="text-sm text-neutral-600">{image.quality}</span>
        </div>
        <p className="text-xs text-neutral-600 mt-sm">{image.description}</p>
      </div>
    </div>
  );
};

export default ImageCard; 