import { OTPPage } from '../../pages/OTP';

const OtpRoute = {
  props: {
    path: '/web-otp',
    component: OTPPage,
    exact: true,
  },
  isPublic: true,
  name: 'Web OTP'
};

export { OtpRoute };
