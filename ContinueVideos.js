import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const continueVideosItem = ({ item }) => (
<View style={styles.continue_videos_item}>
<Image
    style={styles.continue_video_cover}
    source={{uri: item.continue_video_cover}}
    />
</View>
  );

const ContinueVideos = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.continue_videos}
    data={item}
    renderItem={continueVideosItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default ContinueVideos;

const styles = StyleSheet.create({
    'continue_video_cover': {
        'width': '32vw',
        'height': '40vw',
        'marginTop': 18,
        'borderRadius': 12,
        'marginHorizontal': 6
    }
});