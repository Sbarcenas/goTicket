import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import {GuideLayout} from '../../layouts';
import {colors} from '../../utils/theme';
import {Rating, AirbnbRating} from 'react-native-elements';
import HTML from 'react-native-render-html';
import YouTube from 'react-native-youtube';
import {
  Comment,
  HSectionTitle,
  IconText,
  MainButton,
} from '../../components/shared';
import {MORE_ICON, MORE_PURPLE_ICON} from '../../assets/media/icons';
const {width} = Dimensions.get('window');

const htmlContent = `
    <iframe width={width} height={width} src="https://www.youtube.com/embed/N7AUv0aSBB0" id="N7AUv0aSBB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`;

export const COMMENT_LIST = [
  {
    id: 1,
    title: {text: 'Coment1', position: 'top'},
    stars: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    author: 'Juancho',
  },
  {
    id: 2,
    title: {text: 'Coment1', position: 'top'},
    stars: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod',
    author: 'Juancho',
  },
  {
    id: 3,
    title: {text: 'Coment1', position: 'top'},
    stars: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod',
    author: 'Juancho',
  },
  {
    id: 4,
    title: {text: 'Coment1', position: 'top'},
    stars: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod',
    author: 'Juancho',
  },
  {
    id: 5,
    title: {text: 'Coment1', position: 'top'},
    stars: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod',
    author: 'Juancho',
  },
];

const Index = props => {
  const [videoHeight, setVideoHeight] = useState(301);
  const [fullScreen, setFullScreen] = useState(false);

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

  const ratingCompleted = rating => {};
  return (
    <GuideLayout>
      <View
        style={{
          backgroundColor: colors.white,
          width: width,
          paddingHorizontal: 10,
          borderBottomEndRadius: 40,
          paddingBottom: 40,
        }}>
        <View>
          <Text
            style={{fontSize: 22, color: colors.mainText, marginBottom: 15}}>
            Mitos leyendas y realidades entorno al recién nacido
          </Text>
          <Text style={{fontSize: 15, color: colors.mainText}}>
            Dr. Julio Florez / Pediatra
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <AirbnbRating
            showRating={false}
            count={5}
            onFinishRating={x => ratingCompleted(x)}
            size={13}
          />
        </View>
        <HTML
          html={htmlContent}
          renderers={renderers}
          imagesMaxWidth={Dimensions.get('window').width}
        />
        <View>
          <Text
            style={{color: colors.mainText, fontSize: 16, fontWeight: 'bold'}}>
            Tags
          </Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 15}}
          horizontal
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item, index) => 'Comment' + index}
          renderItem={({item}) => (
            <MainButton
              disabled
              style={{
                borderColor: colors.mainPurple,
                borderWidth: 1,
                width: 116,
                height: 35,
                marginRight: 5,
                borderRadius: 100,
              }}
              textStyle={{color: colors.mainPurple}}
            />
          )}
        />
      </View>
      <View style={{paddingHorizontal: 15, paddingBottom: 100}}>
        <IconText
          onPress={() => alert('isWorking')}
          containerStyle={{alignSelf: 'flex-end'}}
          text={'Agrega un comentario'}
          textStyle={{
            color: colors.mainPurple,
            fontSize: 16,
          }}
          subTextStyle={{
            color: colors.mainText,
          }}
          icon={[{image: MORE_PURPLE_ICON, orientation: 'right'}]}
          iconStyle={{
            backgroundColor: 'transparent',
            marginRight: 10,
            marginVertical: 15,
          }}
        />
        <HSectionTitle
          title="Comentarios"
          textStyle={{color: colors.mainText, fontSize: 20}}
        />
        <ScrollView
          horizontal
          nestedScrollEnabled={true}
          scrollEnabled={false}
          contentContainerStyle={{flex: 1}}>
          <FlatList
            scrollEnabled={false}
            data={COMMENT_LIST}
            keyExtractor={(item, index) => 'Comment' + index}
            renderItem={({item}) => (
              <Comment
                containerStyle={{height: 150, marginBottom: 10}}
                title={item.title}
                stars={item.stars}
                content={item.content}
                author={item.author}
              />
            )}
          />
        </ScrollView>
        <MainButton
          title="Ver más"
          style={{
            backgroundColor: colors.mainPurple,
            width: 130,
            height: 48,
            borderRadius: 100,
            alignSelf: 'center',
          }}
          textStyle={{fontWeight: 'bold'}}
          onPress
        />
      </View>
    </GuideLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Index;
