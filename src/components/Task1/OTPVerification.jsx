import { useState, useEffect, useRef } from 'react';

const OTPVerification = () => {
  const [otpType, setOtpType] = useState('sms'); // 'sms' or 'voice'
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [showVoiceOption, setShowVoiceOption] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');
  
  const inputRefs = useRef([]);

  // Timer for SMS to Voice fallback
  useEffect(() => {
    if (timeLeft > 0 && otpType === 'sms') {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && otpType === 'sms') {
      setShowVoiceOption(true);
      setCanResend(true);
    }
  }, [timeLeft, otpType]);

  // Mock API simulation
  const simulateOTPVerification = (code) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock: accept any 6-digit code that starts with '1'
        resolve(code.startsWith('1') && code.length === 6);
      }, 1500);
    });
  };

  const handleInputChange = (index, value) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all fields are filled
    if (newOtp.every(digit => digit) && newOtp.join('').length === 6) {
      handleVerification(newOtp.join(''));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text');
    const pasteArray = paste.slice(0, 6).split('');
    
    if (pasteArray.every(char => /\d/.test(char))) {
      const newOtp = [...pasteArray, ...Array(6 - pasteArray.length).fill('')];
      setOtp(newOtp);
      
      if (pasteArray.length === 6) {
        handleVerification(paste);
      }
    }
  };

  const handleVerification = async (code) => {
    setIsLoading(true);
    setError('');
    
    try {
      const isValid = await simulateOTPVerification(code);
      if (isValid) {
        setIsVerified(true);
      } else {
        setError('Invalid OTP. Please try again.');
        setOtp(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      }
    } catch (err) {
      setError('Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const switchToVoice = () => {
    setOtpType('voice');
    setTimeLeft(60);
    setShowVoiceOption(false);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  const resendOTP = () => {
    setOtp(['', '', '', '', '', '']);
    setTimeLeft(otpType === 'sms' ? 30 : 60);
    setCanResend(false);
    setShowVoiceOption(false);
    setError('');
    inputRefs.current[0]?.focus();
  };

  if (isVerified) {
    return (
      <div className="max-w-md mx-auto p-lg bg-white rounded-2xl shadow-lg border border-neutral-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-lg">
            <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-sm">Verification Successful!</h2>
          <p className="text-neutral-600">Your phone number has been verified successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-lg bg-white rounded-2xl shadow-lg border border-neutral-200">
      <div className="text-center mb-lg">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-sm">Verify Your Phone</h2>
        <p className="text-neutral-600 mb-md">
          We've sent a 6-digit code to your phone via {otpType === 'sms' ? 'SMS' : 'Voice Call'}
        </p>
        <p className="text-sm text-neutral-500">+1 (555) ***-4321</p>
      </div>

      <div className="mb-lg">
        <label className="block text-sm font-medium text-neutral-700 mb-sm">Enter verification code</label>
        <div className="flex gap-sm justify-center" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-12 h-12 text-center text-lg font-semibold border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                error ? 'border-error-500 bg-error-50' : 'border-neutral-300'
              }`}
              disabled={isLoading}
            />
          ))}
        </div>
        {error && (
          <p className="text-error-600 text-sm mt-sm text-center">{error}</p>
        )}
      </div>

      <div className="space-y-sm">
        {isLoading && (
          <div className="flex items-center justify-center py-sm">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600"></div>
            <span className="ml-sm text-sm text-neutral-600">Verifying...</span>
          </div>
        )}

        {timeLeft > 0 && !canResend && (
          <p className="text-center text-sm text-neutral-500">
            {otpType === 'sms' ? (
              <>Didn't receive SMS? Voice option available in {timeLeft}s</>
            ) : (
              <>Resend code in {timeLeft}s</>
            )}
          </p>
        )}

        {showVoiceOption && otpType === 'sms' && (
          <div className="text-center">
            <button
              onClick={switchToVoice}
              className="inline-flex items-center px-lg py-sm text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 mr-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Try Voice Call Instead
            </button>
          </div>
        )}

        {canResend && (
          <div className="text-center">
            <button
              onClick={resendOTP}
              className="inline-flex items-center px-lg py-sm text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 mr-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Resend Code
            </button>
          </div>
        )}
      </div>

      <div className="mt-lg pt-lg border-t border-neutral-200">
        <p className="text-xs text-center text-neutral-500">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;