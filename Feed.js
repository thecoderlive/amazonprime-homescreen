import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import HomeCarousel from './HomeCarousel'
import ContinueVideos from './ContinueVideos'

const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<HomeCarousel item={item.home_carousel}/>
<ContinueVideos item={item.continue_videos}/>
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({
    
});