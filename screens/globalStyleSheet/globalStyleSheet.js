'use-restrict';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const globalStyleSheet = {

    // Image Background
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
         top: '-1%',
    },
    back: {
        width: wp('15%'),
        height: hp('30%'),
        resizeMode: 'contain',
    },

    // Home Icon
    homeContainer: {
        position: 'absolute',
        left: '85%',
        top: '-1%',
    },
    home: {
        width: wp('15%'),
        height: hp('30%'),
        resizeMode: 'contain',
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
        resizeMode: 'contain',
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
        resizeMode: 'contain',
    },

    // Speaker 2 Icon
    A_Speaker_Container_2: {
        position: 'absolute',
        left: '80%',
        top: '27%',
    },
    A_Speaker_2: {
        width: wp('6'),
        height: hp('10%'),
        resizeMode: 'contain',
    },

    // Next icon (Right Side)
    nextContainer: {
        position: 'absolute',
        left: '83%',
        top: '40%',
    },
    next: {
        width: wp('15%'),
        height: hp('30%'),
        resizeMode: 'contain',
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
        resizeMode: 'contain',
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
    thumbnailContainer: {
        width: '35%',
        height: '100%',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    storiesContainer: {
        //backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    storyTitleContainer: {
        width: '25%',
        height: '5%',
        marginBottom: '10%',
    },
    storyTitle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    // Main Menu Container
    menuContainer: {
        position: 'relative',
        top:'9%',
        left:'22%',
        width: '98%',
        height: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    // Letter Menu Container
    menuLetterContainer: {
        position: 'relative',
        top:'1%',
        left:'9%',
        width: '83%',
        height: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    // Number Menu Container
    menuNumberContainer: {
        position: 'relative',
        bottom:'6%',
        left: '9%',
        width: '83%',
        height: '32%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    // Story Video
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },

    // Story Video Container
    storyVideoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0, 0, 0)',
    },
    //Glow video
    Glow:{
        width: wp('40%'), 
        height: hp('40%'), 
        position: 'absolute', 
        left: '-35%',
    },
    //Glow container
    VideoContainer:{
        left: '40%', 
        top: '-20%'
    }
};

