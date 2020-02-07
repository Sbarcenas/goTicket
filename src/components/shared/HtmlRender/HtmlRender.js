import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import YouTube from 'react-native-youtube';
import HTML from 'react-native-render-html';

const HtmlRender = props => {
  const htmlContent = `
    <iframe width={width} height={width} src="https://www.youtube.com/embed/N7AUv0aSBB0" id="N7AUv0aSBB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`;

  const [videoHeight, setVideoHeight] = useState(301);
  const [fullScreen, setFullScreen] = useState(false);
  const {content} = props;

  const renderers = {
    iframe: x => (
      <YouTube
        onChangeFullscreen={e => {
          alert(e.isFullscreen);
          setFullScreen(e.isFullscreen);
        }}
        onChangeState={x => {
          setFullScreen(true);
        }}
        fullscreen={fullScreen}
        videoId="tg8HwtP0XyM" // The YouTube video ID
        onError={e => alert(JSON.stringify(e))}
        onReady={e => {
          setVideoHeight(300);
        }}
        style={{alignSelf: 'stretch', height: videoHeight}}
        apiKey="AIzaSyBkqqfOENyMYHjbY1VJMsAP05xLE7Y3lGA"
      />
    ),
  };

  return (
    <View>
      <HTML
        html={htmlContent}
        renderers={renderers}
        imagesMaxWidth={Dimensions.get('window').width}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HtmlRender;
