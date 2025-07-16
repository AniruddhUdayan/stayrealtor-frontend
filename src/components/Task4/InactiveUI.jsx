import { useState } from 'react';

const InactiveUI = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreeTerms: false
  });
  const [featureEnabled, setFeatureEnabled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);

  const isFormValid = formData.name && formData.email && formData.phone && formData.message && formData.agreeTerms;

  const TooltipWrapper = ({ children, content, id }) => (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(id)}
      onMouseLeave={() => setShowTooltip(null)}
    >
      {children}
      {showTooltip === id && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-sm py-xs bg-neutral-900 text-white text-xs rounded-lg whitespace-nowrap z-10">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-neutral-900"></div>
        </div>
      )}
    </div>
  );

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
      <TooltipWrapper content={reason} id={`disabled-${variant}-${Math.random()}`}>
        <button
          disabled
          className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        >
          {children}
        </button>
      </TooltipWrapper>
    );
  };

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

  return (
    <div className="max-w-6xl mx-auto p-lg space-y-2xl">
      <div className="text-center mb-2xl">
        <h1 className="text-3xl font-bold text-neutral-900 mb-sm">Inactive & Non-Functional UI Demo</h1>
        <p className="text-neutral-600">
          Demonstrating proper handling of disabled states and removed components with clear user feedback
        </p>
      </div>

      {/* Disabled Buttons Section */}
      <div className="bg-white rounded-xl p-lg border border-neutral-200">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-lg">Disabled Button States</h2>
        
        {/* Form Example */}
        <div className="mb-2xl">
          <h3 className="text-lg font-semibold text-neutral-800 mb-md">Contact Form Example</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div className="space-y-md">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-xs">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-sm py-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-xs">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-sm py-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-xs">Phone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-sm py-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your phone"
                />
              </div>
            </div>
            <div className="space-y-md">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-xs">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={6}
                  className="w-full px-sm py-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                  placeholder="Enter your message"
                />
              </div>
              <div className="flex items-start space-x-sm">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData(prev => ({ ...prev, agreeTerms: e.target.checked }))}
                  className="mt-1 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor="terms" className="text-sm text-neutral-700">
                  I agree to the Terms of Service and Privacy Policy *
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-lg pt-lg border-t border-neutral-200 flex gap-md">
            {isFormValid ? (
              <button className="px-lg py-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Send Message
              </button>
            ) : (
              <DisabledButton 
                reason="Please fill in all required fields and accept terms"
                variant="primary"
              >
                Send Message
              </DisabledButton>
            )}
            <button className="px-lg py-sm bg-neutral-100 text-neutral-700 border border-neutral-300 rounded-lg hover:bg-neutral-200 transition-colors font-medium">
              Save Draft
            </button>
          </div>
        </div>

        {/* Various Disabled Button Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="space-y-md">
            <h4 className="font-semibold text-neutral-800">Feature Not Available</h4>
            <div className="space-y-sm">
              <DisabledButton reason="Premium feature - Upgrade to access" variant="primary">
                <svg className="w-4 h-4 mr-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Export to PDF
              </DisabledButton>
              <DisabledButton reason="Coming soon in next update" variant="secondary">
                Advanced Analytics
              </DisabledButton>
            </div>
          </div>

          <div className="space-y-md">
            <h4 className="font-semibold text-neutral-800">Permission Required</h4>
            <div className="space-y-sm">
              <DisabledButton reason="Admin permissions required" variant="danger">
                Delete Property
              </DisabledButton>
              <DisabledButton reason="Contact admin to enable this feature" variant="secondary">
                Bulk Actions
              </DisabledButton>
            </div>
          </div>

          <div className="space-y-md">
            <h4 className="font-semibold text-neutral-800">Conditional States</h4>
            <div className="space-y-sm">
              <DisabledButton reason="No items selected" variant="primary">
                Archive Selected
              </DisabledButton>
              <DisabledButton reason="Maximum file size exceeded" variant="danger">
                Upload Files
              </DisabledButton>
            </div>
          </div>
        </div>
      </div>

      {/* Removed Components Section */}
      <div className="bg-white rounded-xl p-lg border border-neutral-200">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-lg">Removed Components</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          {/* Chat Widget Removed */}
          <RemovedComponentPlaceholder
            componentName="Live Chat Widget"
            reason="Live chat is temporarily unavailable due to maintenance. Our support team is working to restore this feature."
            alternativeAction={
              <div className="space-y-sm">
                <button className="px-lg py-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Contact Support via Email
                </button>
                <p className="text-xs text-neutral-500">Response time: 24 hours</p>
              </div>
            }
          />

          {/* Map Feature Removed */}
          <RemovedComponentPlaceholder
            componentName="Interactive Map"
            reason="Map functionality has been disabled for this region due to API limitations. We're working on an alternative solution."
            alternativeAction={
              <div className="space-y-sm">
                <button className="px-lg py-sm bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors font-medium">
                  View Address Details
                </button>
                <button className="px-lg py-sm bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors font-medium">
                  Get Directions
                </button>
              </div>
            }
          />

          {/* Social Media Integration Removed */}
          <RemovedComponentPlaceholder
            componentName="Social Media Sharing"
            reason="Social media integration has been temporarily removed while we update our privacy compliance measures."
            alternativeAction={
              <div className="space-y-sm">
                <button className="px-lg py-sm bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors font-medium">
                  Copy Link to Share
                </button>
                <button className="px-lg py-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Email This Property
                </button>
              </div>
            }
          />

          {/* Advanced Search Removed */}
          <RemovedComponentPlaceholder
            componentName="Advanced Search Filters"
            reason="Advanced search is being redesigned for better performance. Basic search remains available."
            alternativeAction={
              <div className="space-y-sm">
                <button className="px-lg py-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Use Basic Search
                </button>
                <button className="px-lg py-sm bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors font-medium">
                  Contact for Custom Search
                </button>
              </div>
            }
          />
        </div>
      </div>

      {/* Feature Toggle Demo */}
      <div className="bg-white rounded-xl p-lg border border-neutral-200">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-lg">Feature Toggle Example</h2>
        <div className="flex items-center justify-between mb-lg">
          <div>
            <h3 className="text-lg font-semibold text-neutral-800">Beta Feature: Property Comparison</h3>
            <p className="text-neutral-600">Enable to compare multiple properties side-by-side</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={featureEnabled}
              onChange={(e) => setFeatureEnabled(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>

        {featureEnabled ? (
          <div className="bg-success-50 border border-success-200 rounded-lg p-lg">
            <h4 className="font-semibold text-success-700 mb-sm">Property Comparison Enabled ✅</h4>
            <p className="text-success-600 mb-md">You can now compare up to 3 properties side-by-side.</p>
            <div className="flex gap-md">
              <button className="px-lg py-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Start Comparing
              </button>
              <button className="px-lg py-sm bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors font-medium">
                View Tutorial
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-lg">
            <h4 className="font-semibold text-neutral-700 mb-sm">Property Comparison Disabled</h4>
            <p className="text-neutral-600 mb-md">Enable the feature above to access property comparison tools.</p>
            <div className="flex gap-md">
              <DisabledButton 
                reason="Enable the feature toggle above to use this function"
                variant="primary"
              >
                Start Comparing
              </DisabledButton>
              <DisabledButton 
                reason="Feature must be enabled first"
                variant="secondary"
              >
                View Tutorial
              </DisabledButton>
            </div>
          </div>
        )}
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-lg border border-primary-200">
        <h2 className="text-xl font-semibold text-neutral-900 mb-lg">UI State Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <h3 className="font-semibold text-primary-700 mb-sm">✅ Good Practices</h3>
            <ul className="text-sm text-neutral-700 space-y-xs">
              <li>• Provide clear tooltips explaining why buttons are disabled</li>
              <li>• Use visual indicators (grayed out, different cursor)</li>
              <li>• Offer alternative actions when possible</li>
              <li>• Communicate the path to enable disabled features</li>
              <li>• Use consistent disabled states across the app</li>
              <li>• Provide feedback for removed components</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-error-700 mb-sm">❌ Avoid These Mistakes</h3>
            <ul className="text-sm text-neutral-700 space-y-xs">
              <li>• Hiding buttons without explanation</li>
              <li>• Using identical styling for active and disabled states</li>
              <li>• Removing features without offering alternatives</li>
              <li>• Unclear or missing error messages</li>
              <li>• Inconsistent disabled state appearance</li>
              <li>• No indication of how to re-enable features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InactiveUI;