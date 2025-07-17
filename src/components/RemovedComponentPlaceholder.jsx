const RemovedComponentPlaceholder = ({ componentName, reason, alternativeAction }) => (
  <div className="bg-neutral-50 border-2 border-dashed border-neutral-300 rounded-xl p-2xl text-center">
    <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-lg">
      <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-neutral-700 mb-sm">{componentName} Removed</h3>
    <p className="text-neutral-600 mb-lg max-w-md mx-auto">{reason}</p>
    {alternativeAction && (
      <div className="space-y-sm">
        <p className="text-sm font-medium text-neutral-700">Alternative:</p>
        {alternativeAction}
      </div>
    )}
  </div>
);

export default RemovedComponentPlaceholder; 