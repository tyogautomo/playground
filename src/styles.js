import tw, { styled } from 'twin.macro';

export const MobileContainer = styled.div`
  ${tw`margin[auto] max-width[480px] min-width[360px] background-color[#ededed]`};
  /* border: 3px solid purple; */
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
`;
