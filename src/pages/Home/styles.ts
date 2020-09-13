import styled from 'styled-components';

export const Container = styled.main`
  grid-area: MAIN;

  display: flex;
  flex-direction: column;
  margin: 3.6rem 0 0 2.4rem;
  padding: 1.2rem 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    height: 56px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const GridVideos = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, 360px);
  grid-gap: 4rem 1rem;
  margin-top: 1.6rem;
  justify-content: center;
`;

export const Video = styled.div``;

export const VideoThumb = styled.div`
  width: 360px;
  height: 200px;
  background-color: #606060;
`;

export const VideoContent = styled.div`
  margin-top: 1.2rem;
  display: flex;
`;

export const ChannelImage = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 1.2rem;
  border-radius: 50%;
  background-color: #606060;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2.4rem;
`;

export const VideoInfoTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  color: ${props => props.theme.colors.primary};
  max-height: 4rem;
  margin-bottom: 0.6rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const VideoInfoText = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${props => props.theme.colors.secundary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;
