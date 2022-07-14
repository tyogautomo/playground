import tw, { styled } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export const Container = tw.div``;
export const MapWrapper = tw.div`relative flex justify-center items-center`;
export const GlobalStyles = createGlobalStyle`
  .leaflet-container {
    width: 100%;
    height: 400px;
  }

  .leaflet-iconz {
    position: relative !important;
    transition: top 0.02s ease-in;
  }

  .leaflet-iconz-hover {
    position: relative !important;
    top: -20px !important;
    transition: top 0.3s ease-in;
  }
`;
export const Shadow = styled.div(({ isDragging }) => [
  tw`absolute width[8px] height[4px] background-color[rgba(0,0,0,.3)] border-radius[50%] z-index[1000] transition[all 0.2s ease-in-out]`,
  isDragging && tw`transform[scaleX(150%)]`,
]);
export const CurrentLocationBtn = tw.div`px-2 py-1 rounded-full bg-white shadow font-bold text-blue-500 text-xs absolute bottom-4 left-2 z-index[1000] cursor-pointer`;
export const Title = tw.div`px-4 font-medium text-lg my-3`;

export const ResultContainer = tw.div`p-4`;
export const ResultTitle = tw.div`font-medium text-base`;
export const Coords = tw.div`text-blue-400 font-bold text-sm`;