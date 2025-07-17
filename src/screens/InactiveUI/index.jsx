import TooltipWrapper from '../../components/TooltipWrapper';

export default function InactiveUI() {
  return (
    <div className="min-h-screen bg-[#101728] py-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full space-y-12">
        {/* Disabled Button Example */}
        <div className="bg-[#181f36] rounded-2xl shadow-xl p-10 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Download Report</h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Only admins can download the full report. Please contact your administrator if you need access.
          </p>
          <TooltipWrapper content="You need admin access to download reports">
            <button
              disabled
              className="px-8 py-3 rounded-lg bg-neutral-700 text-neutral-400 font-semibold text-lg cursor-not-allowed transition-colors border-2 border-neutral-700 relative group shadow"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8" />
                </svg>
                Download Report
              </span>
            </button>
          </TooltipWrapper>
        </div>

        {/* Removed Component Example */}
        <div className="bg-[#181f36] rounded-2xl shadow-xl p-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-neutral-700 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Feature Removed</h2>
          <p className="text-neutral-400 mb-6 max-w-md mx-auto">
            The live chat widget has been removed for maintenance. For urgent queries, please use the alternative below.
          </p>
          <button
            className="px-6 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow"
            onClick={() => window.open('mailto:support@stayrealtor.com', '_blank')}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}