'use-restrict';
import Sound from 'react-native-sound';

export const globalBGmusic = {
    componentDidMount() {
        const bg = new Sound('blaanbg.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
          });
       }
}