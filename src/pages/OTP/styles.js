import tw, { styled, css } from 'twin.macro';

export const Container = styled.div`
  ${tw`flex flex-col items-center padding-top[50px]`};
`;
export const Title = styled.div`
  ${tw`font-size[2rem] mb-16 font-weight[bold] color[#488c6a]`};
`;
export const Form = tw.form`flex flex-col items-center`;
export const InputContainer = tw.div`flex relative mt-4 mb-10`;
export const Box = styled.div(({ focused, otpLength }) => [
  tw`w-16 h-16 rounded-md flex justify-center items-center mx-1 bg-white`,
  (focused || otpLength === 4) && css`
    border: 2px solid #488c6a;
  `,
]);
export const Num = tw.div`font-size[2.6rem]`;
export const Input = styled.input`
  ${tw`absolute w-full h-full opacity-0`};
`;
export const Note = styled.div(({ bold, red }) => [
  tw`font-size[.8rem] mb-1`,
  bold && tw`font-weight[bold]`,
  red && tw`text-red-600`,
]);
export const NoteContainer = tw.div`background-color[#d6d6d6] p-4 rounded-lg`;
export const Button = styled.button(({ $loading }) => [
  tw`border-none flex justify-center items-center font-bold text-white background-color[#488c6a] font-size[2rem] width[80%] h-14 rounded-lg active:background-color[#2e6b4d] mt-20`,
  $loading && tw`background-color[#c9c9c9]`,
]);

export const Loading = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  
  &::after {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
