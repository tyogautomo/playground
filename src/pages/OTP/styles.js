import tw, { styled, css } from 'twin.macro';

export const Container = styled.div`
  ${tw`flex flex-col items-center padding-top[100px]`};
`;

export const Title = styled.div`
  ${tw`font-size[2rem] mb-20 text-purple-400`};
`;

export const InputContainer = tw.div`flex relative mt-4`;

export const Box = styled.div(({ focused, otpLength }) => [
  tw`w-16 h-16 rounded-md flex justify-center items-center mx-1 bg-white`,
  (focused || otpLength === 4) && css`
    border: 2px solid green;
  `,
]);

export const Num = tw.div`font-size[2.6rem]`;

export const Input = styled.input`
  ${tw`absolute w-full h-full opacity-0`};
`;
