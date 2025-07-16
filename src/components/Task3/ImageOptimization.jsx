import { useState, useRef } from 'react';

const ImageOptimization = () => {
  const [selectedComparison, setSelectedComparison] = useState('building');
  const [showOptimized, setShowOptimized] = useState(false);
  const [loadTimes, setLoadTimes] = useState({});

  const imageComparisons = {
    building: {
      title: "Real Estate Property Image",
      poor: {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&fm=jpg&q=30",
        format: "JPEG",
        size: "~450KB",
        quality: "30% Quality",
        description: "Large, low-quality JPEG with visible compression artifacts"
      },
      optimized: {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&fm=webp&q=80",
        format: "WebP",
        size: "~120KB",
        quality: "80% Quality",
        description: "Optimized WebP with proper dimensions and compression"
      }
    },
    interior: {
      title: "Interior Design Photo",
      poor: {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=1200&fit=crop&fm=jpg&q=25",
        format: "JPEG",
        size: "~680KB",
        quality: "25% Quality",
        description: "Oversized JPEG with poor compression and artifacts"
      },
      optimized: {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&fm=webp&q=85",
        format: "WebP",
        size: "~95KB",
        quality: "85% Quality",
        description: "WebP format with optimal size and quality balance"
      }
    }
  };

  const ImageCard = ({ image, type, title }) => {
    const imgRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadTime, setLoadTime] = useState(null);

    const handleImageLoad = () => {
      setIsLoaded(true);
      if (imgRef.current) {
        const loadTime = performance.now() - imgRef.current.dataset.startTime;
        setLoadTime(Math.round(loadTime));
        setLoadTimes(prev => ({
          ...prev,
          [`${selectedComparison}_${type}`]: Math.round(loadTime)
        }));
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

  const performanceMetrics = {
    building: {
      savings: "73%",
      bandwidth: "330KB saved",
      loadTime: "~60% faster"
    },
    interior: {
      savings: "86%",
      bandwidth: "585KB saved", 
      loadTime: "~70% faster"
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-lg space-y-2xl">
      <div className="text-center mb-2xl">
        <h1 className="text-3xl font-bold text-neutral-900 mb-sm">Image Optimization Audit</h1>
        <p className="text-neutral-600 max-w-3xl mx-auto">
          Demonstrating the performance and UX impact of optimized images. Poor quality images hurt user experience with slow loading and compression artifacts.
        </p>
      </div>

      {/* Image Selector */}
      <div className="bg-white rounded-xl p-lg border border-neutral-200">
        <h2 className="text-xl font-semibold text-neutral-900 mb-lg">Select Comparison</h2>
        <div className="flex gap-md">
          {Object.entries(imageComparisons).map(([key, data]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedComparison(key);
                setLoadTimes({});
              }}
              className={`px-lg py-sm rounded-lg border transition-colors font-medium ${
                selectedComparison === key
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
              }`}
            >
              {data.title}
            </button>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-r from-success-50 to-primary-50 rounded-xl p-lg border border-success-200">
        <h2 className="text-xl font-semibold text-neutral-900 mb-lg">Performance Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-success-600">
              {performanceMetrics[selectedComparison].savings}
            </div>
            <div className="text-sm text-neutral-600">Size Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">
              {performanceMetrics[selectedComparison].bandwidth}
            </div>
            <div className="text-sm text-neutral-600">Bandwidth Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-600">
              {performanceMetrics[selectedComparison].loadTime}
            </div>
            <div className="text-sm text-neutral-600">Load Time Improvement</div>
          </div>
        </div>
      </div>

      {/* Image Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        <ImageCard
          image={imageComparisons[selectedComparison].poor}
          type="poor"
          title={imageComparisons[selectedComparison].title}
        />
        <ImageCard
          image={imageComparisons[selectedComparison].optimized}
          type="optimized"
          title={imageComparisons[selectedComparison].title}
        />
      </div>

      {/* Optimization Recommendations */}
      <div className="bg-white rounded-xl p-lg border border-neutral-200">
        <h2 className="text-xl font-semibold text-neutral-900 mb-lg">Optimization Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="space-y-md">
            <h3 className="text-lg font-semibold text-success-700">✅ Best Practices</h3>
            <ul className="space-y-sm text-sm text-neutral-700">
              <li className="flex items-start">
                <span className="text-success-500 mr-sm">•</span>
                Use WebP format for 25-35% better compression than JPEG
              </li>
              <li className="flex items-start">
                <span className="text-success-500 mr-sm">•</span>
                Serve images at the exact size needed (responsive images)
              </li>
              <li className="flex items-start">
                <span className="text-success-500 mr-sm">•</span>
                Use lazy loading for images below the fold
              </li>
              <li className="flex items-start">
                <span className="text-success-500 mr-sm">•</span>
                Optimize quality settings (80-85% for photos)
              </li>
              <li className="flex items-start">
                <span className="text-success-500 mr-sm">•</span>
                Use SVG for icons and simple graphics
              </li>
            </ul>
          </div>
          <div className="space-y-md">
            <h3 className="text-lg font-semibold text-error-700">❌ Common Mistakes</h3>
            <ul className="space-y-sm text-sm text-neutral-700">
              <li className="flex items-start">
                <span className="text-error-500 mr-sm">•</span>
                Serving oversized images (e.g., 4K image for 400px display)
              </li>
              <li className="flex items-start">
                <span className="text-error-500 mr-sm">•</span>
                Using JPEG for images with transparency
              </li>
              <li className="flex items-start">
                <span className="text-error-500 mr-sm">•</span>
                Over-compressing images causing visible artifacts
              </li>
              <li className="flex items-start">
                <span className="text-error-500 mr-sm">•</span>
                Loading all images eagerly regardless of viewport
              </li>
              <li className="flex items-start">
                <span className="text-error-500 mr-sm">•</span>
                Not providing fallbacks for modern formats
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* UX Impact Summary */}
      <div className="bg-gradient-to-r from-warning-50 to-accent-50 rounded-xl p-lg border border-warning-200">
        <h2 className="text-xl font-semibold text-neutral-900 mb-md">UX Impact Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <h3 className="font-semibold text-error-700 mb-sm">Poor Image Optimization</h3>
            <ul className="text-sm text-neutral-700 space-y-xs">
              <li>• Slow page load times (3+ seconds)</li>
              <li>• High data usage on mobile</li>
              <li>• Poor user experience on slow connections</li>
              <li>• Lower SEO rankings due to performance</li>
              <li>• Increased bounce rates</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-success-700 mb-sm">Optimized Images</h3>
            <ul className="text-sm text-neutral-700 space-y-xs">
              <li>• Fast loading (&lt;1 second)</li>
              <li>• Reduced bandwidth costs</li>
              <li>• Better mobile experience</li>
              <li>• Improved Core Web Vitals</li>
              <li>• Higher user engagement</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="bg-neutral-900 rounded-xl p-lg text-neutral-100">
        <h2 className="text-xl font-semibold mb-lg">Implementation Example</h2>
        <pre className="text-sm overflow-x-auto">
          <code>{`// Modern responsive image implementation
<picture>
  <source 
    srcset="image.webp 800w, image-2x.webp 1600w"
    sizes="(max-width: 768px) 100vw, 50vw"
    type="image/webp"
  />
  <img 
    src="image.jpg"
    alt="Property interior"
    loading="lazy"
    width="800"
    height="600"
  />
</picture>`}</code>
        </pre>
      </div>
    </div>
  );
};

export default ImageOptimization;