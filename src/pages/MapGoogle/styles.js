import tw, { styled } from 'twin.macro';

export const Container = tw.div``;
export const Title = tw.div`px-4 font-medium text-lg my-3`;
export const MapWrapper = tw.div`relative flex justify-center items-center`;
export const CustomMarker = styled.img(({ isDragging }) => [
  tw`height[60px] absolute top[140px] z-index[1001] transition[all 0.2s ease-in-out] select-none`,
  isDragging && tw`top[120px]`,
]);
export const CustomMarkerShadow = styled.div(({ isDragging }) => [
  tw`absolute width[8px] height[4px] background-color[rgba(0,0,0,.3)] border-radius[50%] z-index[1000] transition[all 0.2s ease-in-out]`,
  isDragging && tw`transform[scaleX(200%)]`,
]);

export const CurrentLocationBtn = tw.div`px-2 py-1 rounded-full bg-white shadow font-bold text-blue-500 text-xs absolute bottom-8 left-2 z-index[1000] cursor-pointer`;

export const ResultContainer = tw.div`p-4`;
export const ResultTitle = tw.div`font-medium text-base`;
export const Coords = tw.div`text-blue-400 font-bold text-sm`;
