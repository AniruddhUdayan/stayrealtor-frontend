import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendOTP, verifyOTP } from '../../service/otp';

const OTPVerification = () => {
  // Step state: 'signin' | 'otp' | 'success'
  const [step, setStep] = useState('signin');

  // Sign-in form state
  const [phone, setPhone] = useState('');
  const [signInError, setSignInError] = useState('');
  const [signInLoading, setSignInLoading] = useState(false);

  // OTP state
  const [otpType, setOtpType] = useState('sms'); // 'sms' or 'voice'
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [showVoiceOption, setShowVoiceOption] = useState(false);
  const [otpError, setOtpError] = useState('');
  const inputRefs = useRef([]);

  // Success dialog
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  // Timer for SMS to Voice fallback
  useEffect(() => {
    if (step !== 'otp') return;
    if (timeLeft > 0 && otpType === 'sms') {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && otpType === 'sms') {
      setShowVoiceOption(true);
      setCanResend(true);
    }
  }, [timeLeft, otpType, step]);

  // Success dialog auto-redirect
  useEffect(() => {
    if (showDialog) {
      const timer = setTimeout(() => {
        setShowDialog(false);
        navigate('/');
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [showDialog, navigate]);

  // --- Sign In Logic ---
  const validatePhone = (phone) => /^([6-9][0-9]{9})$/.test(phone);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setSignInError('');
    if (!validatePhone(phone)) {
      setSignInError('Please enter a valid Indian phone number.');
      return;
    }
    setSignInLoading(true);
    try {
      const res = await sendOTP(`+91${phone}`, 'sms');
      if (res.success) {
        setStep('otp');
        setTimeLeft(30);
        setOtp(['', '', '', '', '', '']);
        setOtpType('sms');
        setShowVoiceOption(false);
        setCanResend(false);
        setOtpError('');
        setTimeout(() => inputRefs.current[0]?.focus(), 100);
      } else {
        setSignInError(res.status || 'Failed to send OTP. Please try again.');
      }
    } catch (err) {
      setSignInError('Network error. Please try again.');
    } finally {
      setSignInLoading(false);
    }
  };

  // --- OTP Logic (mostly as before, themed dark) ---
  const handleInputChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError('');
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
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
    setOtpError('');
    try {
      const res = await verifyOTP(`+91${phone}`, code);
      if (res.success) {
        setShowDialog(true);
        setStep('success');
      } else {
        setOtpError(res.status || 'Invalid OTP. Please try again.');
        setOtp(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      }
    } catch (err) {
      setOtpError('Verification failed. Please try again.');
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
    setOtpError('');
    sendOTP(`+91${phone}`, 'call');
    setTimeout(() => inputRefs.current[0]?.focus(), 100);
  };

  const resendOTP = () => {
    setOtp(['', '', '', '', '', '']);
    setTimeLeft(otpType === 'sms' ? 30 : 60);
    setCanResend(false);
    setShowVoiceOption(false);
    setOtpError('');
    sendOTP(`+91${phone}`, otpType === 'sms' ? 'sms' : 'call');
    setTimeout(() => inputRefs.current[0]?.focus(), 100);
  };

  // --- UI ---
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101728] px-4">
      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-[#181f36] rounded-2xl shadow-xl p-8 max-w-sm w-full text-center border border-[#232b45]">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Signed in!</h2>
            <p className="text-neutral-300 mb-1">You are now signed in. Redirecting to home...</p>
          </div>
        </div>
      )}

      {/* Main Card */}
      <div className="w-full max-w-md bg-[#181f36] rounded-2xl shadow-2xl border border-[#232b45] p-8">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600/10">
            <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.21 1.79 4 4 4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4" />
            </svg>
          </span>
        </div>

        {/* Step 1: Sign In */}
        {step === 'signin' && (
          <form onSubmit={handleSignIn}>
            <h2 className="text-2xl font-bold text-white text-center mb-6">Sign in to your account</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-neutral-200 mb-1">Phone number</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg bg-[#232b45] text-neutral-300 border border-r-0 border-[#232b45] text-sm select-none">+91</span>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-r-lg bg-[#101728] border border-[#232b45] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={phone}
                  onChange={e => {
                    // Only allow numbers, max 10 digits
                    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                    setPhone(val);
                  }}
                  autoComplete="tel"
                  disabled={signInLoading}
                  required
                  placeholder="Enter 10-digit phone"
                />
              </div>
            </div>
            {signInError && <p className="text-red-400 text-sm mb-2 text-center">{signInError}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg mt-2 transition-colors disabled:opacity-60"
              disabled={signInLoading}
            >
              {signInLoading ? 'Signing in...' : 'Sign in'}
            </button>
            <div className="mt-6 text-center text-neutral-400 text-sm">
              Not a member? <span className="text-indigo-300 hover:underline cursor-pointer">Start a 14 day free trial</span>
            </div>
          </form>
        )}

        {/* Step 2: OTP */}
        {step === 'otp' && (
          <div>
            <h2 className="text-2xl font-bold text-white text-center mb-2">Verify Your Account</h2>
            <p className="text-neutral-400 text-center mb-1">
              We've sent a 6-digit code to your phone number
            </p>
            <p className="text-xs text-neutral-500 text-center mb-6">
              {phone
                ? `+91 ${phone.slice(0, 2)}*****${phone.slice(-3)}`
                : '+91 XXXXXXXXXX'}
            </p>
            <label className="block text-sm font-medium text-neutral-200 mb-2">Enter verification code</label>
            <div className="flex gap-2 justify-center mb-2" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength="1"
                  value={digit}
                  onChange={e => handleInputChange(index, e.target.value)}
                  onKeyDown={e => handleKeyDown(index, e)}
                  className={`w-12 h-12 text-center text-lg font-bold border-2 rounded-lg bg-[#101728] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${otpError ? 'border-red-500 bg-red-900/20' : 'border-[#232b45]'}`}
                  disabled={isLoading}
                />
              ))}
            </div>
            {otpError && <p className="text-red-400 text-sm mb-2 text-center">{otpError}</p>}
            {isLoading && (
              <div className="flex items-center justify-center py-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-400"></div>
                <span className="ml-2 text-sm text-neutral-400">Verifying...</span>
              </div>
            )}
            {timeLeft > 0 && !canResend && (
              <p className="text-center text-xs text-neutral-500 mb-1">
                {otpType === 'sms' ? (
                  <>Didn't receive code? Voice option available in {timeLeft}s</>
                ) : (
                  <>Resend code in {timeLeft}s</>
                )}
              </p>
            )}
            {showVoiceOption && otpType === 'sms' && (
              <div className="text-center mb-1">
                <button
                  onClick={switchToVoice}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium text-indigo-300 hover:text-indigo-400 hover:bg-indigo-900/20 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Try Voice Call Instead
                </button>
              </div>
            )}
            {canResend && (
              <div className="text-center mb-1">
                <button
                  onClick={resendOTP}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium text-indigo-300 hover:text-indigo-400 hover:bg-indigo-900/20 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Resend Code
                </button>
              </div>
            )}
            <div className="mt-6 pt-4 border-t border-[#232b45]">
              <p className="text-xs text-center text-neutral-500">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPVerification;