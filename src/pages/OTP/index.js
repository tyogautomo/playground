import React, { useState, useEffect, useRef } from 'react';

import { Container, Title, InputContainer, Box, Input, Num, Note, NoteContainer, Button, Loading, Form } from './styles';

const OTPPage = () => {
  const form = useRef(null);

  const [otp, setOtp] = useState('');
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleConfirmation = (e) => {
    e.preventDefault();
    setSuccess(true);
  }

  useEffect(() => {
    if ('OTPCredential' in window) {
      const ac = new AbortController();
      form.current.addEventListener('submit', () => {
        ac.abort();
      }, false)

      navigator.credentials
        .get({
          otp: { transport: ['sms'] },
          signal: ac.signal,
        })
        .then(otpObj => {
          setOtp(otpObj.code);
          ac.abort();

          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
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
      {success ? (
        <Title>Kode OTP Sukses!</Title>
      ) : (
        <>
          <Title>Masukkan Kode OTP</Title>
          <Form onSubmit={handleConfirmation} ref={form}>
            <InputContainer>
              {Array(4).fill('').map((_, i) => (
                <Box key={i} focused={focused}>
                  <Num>{otp.split('')[i]}</Num>
                </Box>
              ))}
              <Input
                type="text"
                maxLength="4"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
              />
            </InputContainer>
            <Note bold>Cara ngirim OTP</Note>
            <Note>Kirim SMS dengan format berikut:</Note>
            <br></br>
            <NoteContainer>
              <Note>{`<pesan SMS nya apa aja terserah>`}</Note>
              <br></br>
              <Note red>@fancy-otp.web.app #1234</Note>
            </NoteContainer>
            <Button type="submit">
              {!loading && <span>Konfirmasi</span>}
              {loading && <Loading />}
            </Button>
          </Form>
        </>
      )}
    </Container >
  );
}

export { OTPPage };
