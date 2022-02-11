import React from 'react';
import { OTPPage } from '../../pages/OTP';

const OtpRoute = {
  props: {
    path: '/web-otp',
    element: <OTPPage />,
  },
  isPublic: true,
  name: 'Web OTP'
};

export { OtpRoute };
