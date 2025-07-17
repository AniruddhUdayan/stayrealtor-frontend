// src/service/otp.js

/**
 * Send OTP to the given phone number using the specified method (default: sms).
 * @param {string} phone - Indian phone number (10 digits, no country code)
 * @param {string} method - 'sms' or 'voice'
 * @returns {Promise<object>} API response
 */
export const sendOTP = async (phone, method = 'sms') => {
  try {
    const res = await fetch('https://stayrealtor-otp-9582.twil.io/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ phone, method }),
    });

    const data = await res.json();
    if (data.success) {
      console.log('✅ OTP Sent:', data.status);
    } else {
      console.warn('❌ Failed to send OTP:', data);
    }
    return data;
  } catch (err) {
    console.error('⚠️ Error sending OTP:', err);
    return { success: false, error: err };
  }
};

/**
 * Verify the OTP for the given phone number.
 * @param {string} phone - Indian phone number (10 digits, no country code)
 * @param {string} code - OTP code
 * @returns {Promise<object>} API response
 */
export const verifyOTP = async (phone, code) => {
  try {
    const res = await fetch('https://stayrealtor-otp-9582.twil.io/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ phone, code }),
    });

    const data = await res.json();
    if (data.success) {
      console.log('✅ OTP Verified Successfully');
    } else {
      console.warn('❌ Invalid OTP:', data.status);
    }
    return data;
  } catch (err) {
    console.error('⚠️ Error verifying OTP:', err);
    return { success: false, error: err };
  }
}; 