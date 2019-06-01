'use-restrict';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const globalStyleSheet = {

    // Image Background
    image: {
        flex: 1,
        width: wp('100%'),
        height: hp('100%'),
        position: 'absolute',
    },

    // Pencil
    pencilContainer: {
        position: 'absolute',
        left: '11%',
        top: '23%',
    },
    pencil: {
        width: wp('8%'),
        height: hp('25%'),
        resizeMode: 'contain',
    },

    // Back Button Icon
    backContainer: {
        position: 'absolute',
         left: '1%',
         top: '-2%',
    },
    back: {
        width: wp('14%'),
        height: hp('28%'),
    },

    // Home Icon
    homeContainer: {
        position: 'absolute',
        left: '85%',
        top: '-2%',
    },
    home: {
        width: wp('14%'),
        height: hp('28%'),
    },

    // Sentence Icon
    sentenceIconContainer: {
        position: 'absolute',
        left: '83%',
        top: '73%',
    },
    sentenceIcon: {
        width: wp('14%'),
        height: hp('28%'),
    },


    // Black Background
    black: {
        top: '24%',
        left: '15%',
        width: '35%',
        height: '61%',
        backgroundColor: 'black',
        opacity: 0.2,
    },

    // Speaker 1 Icon
    A_Speaker_Container: {
        position: 'absolute',
        left: '42%',
        top: '27%',
    },
    A_Speaker: {
        width: wp('6'),
        height: hp('10%'),
    },

    // Speaker 2 Icon
    A_Speaker_Container_2: {
        position: 'absolute',
        left: '80%',
        top: '27%',
    },
    A_Speaker_2: {
        height: 35,
        width: 35,
    },

    // Next icon (Right Side)
    nextContainer: {
        position: 'absolute',
        left: '83%',
        top: '40%',
    },
    next: {
        width: wp('14%'),
        height: hp('28%'),
    },

    // Prev Icon (Left side)
    prevContainer: {
        position: 'absolute',
        left: '2%',
        top: '40%',
    },
    prev: {
        width: wp('14%'),
        height: hp('28%'),
    },

    // Flalok, Rows
    row: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '50%',
    },
    row1: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '35%',
    },


    // Flalok Image, Container, Story Menu
    itemSize: {
        margin: 5,
        marginBottom: 0,
        width: '35%',
        height: '40%',
    },
    imageSizeStoryMenu: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    FlalokContainer: {
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '80%',
        height: '90%',
    },


    // Stories image, container, Thumbnails
    imageStoryScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnail: {
        width: '35%',
        height: '100%',
        resizeMode: 'contain',
    },
    storiesContainer: {
        //backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
};

