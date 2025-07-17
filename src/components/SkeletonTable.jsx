const SkeletonTable = () => (
  <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
    <div className="p-lg border-b border-neutral-200">
      <div className="h-6 bg-neutral-200 rounded w-48 animate-pulse"></div>
    </div>
    <div className="divide-y divide-neutral-200">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="p-lg animate-pulse">
          <div className="flex items-center space-x-md">
            <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
            <div className="flex-1 space-y-xs">
              <div className="h-4 bg-neutral-200 rounded w-1/3"></div>
              <div className="h-3 bg-neutral-200 rounded w-1/4"></div>
            </div>
            <div className="h-4 bg-neutral-200 rounded w-20"></div>
            <div className="h-3 bg-neutral-200 rounded w-16"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkeletonTable; 