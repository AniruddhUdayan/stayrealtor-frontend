const SkeletonCard = () => (
  <div className="bg-white rounded-xl p-lg border border-neutral-200 animate-pulse">
    <div className="flex items-start space-x-md">
      <div className="w-16 h-16 bg-neutral-200 rounded-lg"></div>
      <div className="flex-1 space-y-sm">
        <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
        <div className="h-3 bg-neutral-200 rounded w-1/2"></div>
        <div className="space-y-xs">
          <div className="h-3 bg-neutral-200 rounded"></div>
          <div className="h-3 bg-neutral-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
    <div className="mt-lg pt-lg border-t border-neutral-200 flex justify-between items-center">
      <div className="h-4 bg-neutral-200 rounded w-24"></div>
      <div className="h-8 bg-neutral-200 rounded w-20"></div>
    </div>
  </div>
);

export default SkeletonCard; 