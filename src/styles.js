import tw, { styled } from 'twin.macro';

export const MobileContainer = styled.div`
  ${tw`margin[auto] max-width[480px] min-width[360px] background-color[#ededed] relative overflow-hidden overflow-y-scroll`};
  height: 100vh;
`;
