import React,{Component} from 'react';
import {Text,View,StyleSheet} from "react-native";
import Video from 'react-native-video';
import {globalStyleSheet as styles} from '../../../globalStyleSheet/globalStyleSheet.js';

import DasalBagoMatulogVideo from '../../cultureandartsVideos/DasalBagoMatulog.mp4';

export default class DasalBagoMatulogPlay extends Component {
render(){
return(
<View style={styles.container}>
      <Video source={DasalBagoMatulogVideo}   // Can be a URL or a localfile.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onEnd={this.onEnd}                      // Callback when playback finishes
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
</View>
);
}}