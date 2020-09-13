import React from 'react';

import {
  Container,
  GridVideos,
  Video,
  VideoThumb,
  VideoContent,
  ChannelImage,
  VideoInfo,
  VideoInfoTitle,
  VideoInfoText,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <GridVideos>
        {Array.from(Array(30).keys()).map(item => (
          <Video key={item}>
            <VideoThumb />

            <VideoContent>
              <ChannelImage />
              <VideoInfo>
                <VideoInfoTitle>Teste titulo video</VideoInfoTitle>

                <VideoInfoText>nome canal</VideoInfoText>

                <VideoInfoText>502,2 mil visualizações</VideoInfoText>

                <VideoInfoText>há 1 hora</VideoInfoText>
              </VideoInfo>
            </VideoContent>
          </Video>
        ))}
      </GridVideos>
    </Container>
  );
};

export default Home;
