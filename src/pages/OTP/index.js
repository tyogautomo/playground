/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-eval */
import React, { useState, useEffect, useMemo } from 'react';

import { Container, Title, InputContainer, Box, Input, Num } from './styles';

const OTPPage = () => {
  const [otp, setOtp] = useState('');
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    if ('OTPCredential' in window) {
      const ac = new AbortController();
      navigator.credentials
        .get({
          otp: { transport: ['sms'] },
          signal: ac.signal,
        })
        .then(otpObj => {
          setOtp(otpObj.code);
          ac.abort();
        })
        .catch(err => {
          ac.abort();
          console.log(err);
        });

      setTimeout(() => {
        ac.abort();
      }, 1 * 60 * 1000);
    }
  }, []);

  return (
    <Container>
      <Title>Masukkan Kode OTPe</Title>
      <div>Kode OTP kamu adalah: {`${otp}`}</div>
      <InputContainer>
        {Array(4).fill('').map((_, i) => (
          <Box key={i} focused={focused} otpLength={otp.length}>
            <Num>{otp.split('')[i]}</Num>
          </Box>
        ))}
        <Input
          type="text"
          maxLength="4"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
          value={otp}
        />
      </InputContainer>
    </Container>
  );
}

export { OTPPage };
