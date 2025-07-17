import { useState } from 'react';

const imageComparisons = {
  building: {
    title: "Real Estate Property Image",
    original: {
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
    original: {
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

const features = [
  {
    icon: (
      <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
    title: 'Faster load times',
    desc: 'Optimized images reduce page load time and bounce rate.'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
    ),
    title: 'Better SEO',
    desc: 'Performance boosts search ranking and discoverability.'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    ),
    title: 'Lower bandwidth',
    desc: 'Save data for users, especially on mobile.'
  },
];

export default function ImageOptimization() {
  const [selected, setSelected] = useState('building');
  const [showOptimized, setShowOptimized] = useState(false);

  const currentImage = showOptimized
    ? imageComparisons[selected].optimized
    : imageComparisons[selected].original;

  return (
    <div className="min-h-screen bg-[#101728] py-12 px-2 md:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-[#181f36] shadow-xl flex flex-col lg:flex-row">
        {/* Left: Hero/Features */}
        <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center text-white">
          <span className="text-indigo-400 font-semibold mb-2">Image Optimization</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">A better workflow for real estate images</h1>
          <p className="text-lg text-neutral-300 mb-8 max-w-xl">Deliver beautiful property photos, faster. Optimized images improve user experience, SEO, and conversion rates for your listings.</p>
          <ul className="space-y-5 mb-8">
            {features.map((f, i) => (
              <li key={i} className="flex items-start">
                <span className="mt-1">{f.icon}</span>
                <div>
                  <span className="font-semibold text-white">{f.title}</span>
                  <span className="text-neutral-300 ml-1">{f.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            {Object.entries(imageComparisons).map(([key, data]) => (
              <button
                key={key}
                onClick={() => { setSelected(key); setShowOptimized(false); }}
                className={`px-5 py-2 rounded-lg font-medium border transition-colors text-sm ${selected === key ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-[#232b45] text-neutral-300 border-[#232b45] hover:bg-[#232b45]/80'}`}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>
        {/* Right: Image Comparison (Single Large Image + Toggle) */}
        <div className="flex-1 bg-[#151c2f] p-8 flex flex-col items-center justify-center min-h-[480px]">
          <div className="w-full max-w-2xl flex flex-col items-center">
            <div className="mb-4 w-full flex justify-center">
              <img
                src={currentImage.url}
                alt={showOptimized ? 'Optimized' : 'Original'}
                className="w-full max-h-[480px] object-contain rounded-2xl border-2 border-[#232b45] shadow-lg bg-[#232b45]"
                style={{ background: '#232b45' }}
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${showOptimized ? 'bg-success-600/20 text-success-400' : 'bg-error-600/20 text-error-400'}`}>
                {showOptimized ? 'Optimized' : 'Original'}
              </span>
              <span className="text-xs text-neutral-400">{currentImage.format}</span>
              <span className="text-xs text-neutral-400">{currentImage.size}</span>
              <span className="text-xs text-neutral-400">{currentImage.quality}</span>
            </div>
            <div className="text-xs text-neutral-400 text-center mb-4">{currentImage.description}</div>
            <button
              className="px-6 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow"
              onClick={() => setShowOptimized((v) => !v)}
            >
              {showOptimized ? 'Show Original' : 'Show Optimized'}
            </button>
          </div>
        </div>
      </div>

      {/* Performance Metrics & Recommendations */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#181f36] rounded-2xl p-8 shadow text-center">
          <div className="text-3xl font-bold text-success-400 mb-1">{performanceMetrics[selected].savings}</div>
          <div className="text-neutral-300 mb-2">Size Reduction</div>
          <div className="text-lg text-success-200">{performanceMetrics[selected].bandwidth}</div>
        </div>
        <div className="bg-[#181f36] rounded-2xl p-8 shadow text-center">
          <div className="text-3xl font-bold text-primary-400 mb-1">{performanceMetrics[selected].loadTime}</div>
          <div className="text-neutral-300 mb-2">Load Time Improvement</div>
          <div className="text-lg text-primary-200">Optimized for mobile</div>
        </div>
        <div className="bg-[#181f36] rounded-2xl p-8 shadow text-center">
          <div className="text-3xl font-bold text-accent-400 mb-1">WebP</div>
          <div className="text-neutral-300 mb-2">Modern Format</div>
          <div className="text-lg text-accent-200">Better than JPEG/PNG</div>
        </div>
      </div>

      {/* Recommendations & UX Impact */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#181f36] rounded-2xl p-8 shadow">
          <h3 className="text-lg font-semibold text-success-400 mb-4">✅ Best Practices</h3>
          <ul className="space-y-3 text-neutral-200 text-sm">
            <li>Use WebP format for 25-35% better compression than JPEG</li>
            <li>Serve images at the exact size needed (responsive images)</li>
            <li>Use lazy loading for images below the fold</li>
            <li>Optimize quality settings (80-85% for photos)</li>
            <li>Use SVG for icons and simple graphics</li>
          </ul>
        </div>
        <div className="bg-[#181f36] rounded-2xl p-8 shadow">
          <h3 className="text-lg font-semibold text-error-400 mb-4">❌ Common Mistakes</h3>
          <ul className="space-y-3 text-neutral-200 text-sm">
            <li>Serving oversized images (e.g., 4K image for 400px display)</li>
            <li>Using JPEG for images with transparency</li>
            <li>Over-compressing images causing visible artifacts</li>
            <li>Loading all images eagerly regardless of viewport</li>
            <li>Not providing fallbacks for modern formats</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 bg-[#181f36] rounded-2xl p-8 shadow">
        <h3 className="text-lg font-semibold text-warning-400 mb-4">UX Impact Summary</h3>
        <ul className="text-neutral-200 text-sm space-y-2">
          <li>• Slow page load times (3+ seconds)</li>
          <li>• High data usage on mobile</li>
          <li>• Poor user experience on slow connections</li>
          <li>• Lower SEO rankings due to performance</li>
          <li>• Increased bounce rates</li>
        </ul>
      </div>
    </div>
  );
}