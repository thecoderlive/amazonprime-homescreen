import React from 'react'
import { Image, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native'



const homeCarouselItem = ({ item }) => (
<View style={styles.home_carousel_item}>
<Image
    style={styles.video_cover}
    source={{uri: item.video_cover}}
    />
<TouchableOpacity>
    <View style={styles.play_button}>{'Play Button'}</View>
</TouchableOpacity>
</View>
  );

const HomeCarousel = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.home_carousel}
    data={item}
    renderItem={homeCarouselItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default HomeCarousel;

const styles = StyleSheet.create({
    'video_cover': {
        'width': '100vw',
        'height': '110vw'
    },
    'play_button': {
        'flex': 1,
        'padding': 10,
        'margin': 5,
        'textAlign': 'center',
        'backgroundColor': '#2491e5',
        'color': 'white'
    }
});