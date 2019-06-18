'use-restrict';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const globalStyleSheet = {

    // Image Background
    image: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },

    image2: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },

    //test Container for Prayers - DasalBagoMatulog
    container: {
        flex: 1,
        justifyContent: "center",
    },

    // Pencil
    pencilContainer: {
        position: 'absolute',
        left: '10%',
        top: '18%',
        width: '9%',
        height: '24%',
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
        width: '14%',
        height: '28%',
    },
    back: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    skip: {
        fontSize: 18,
        color:'white',
    },

    // Home Icon
    homeContainer: {
        position: 'absolute',
        left: '85%',
        top: '-2%',
        width: '14%',
        height: '28%',
    },
    home: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    // Sentence Icon
    sentenceIconContainer: {
        position: 'absolute',
        left: '80%',
        top: '73%',
        width: '14%',
        height: '28%',
    },
    sentenceIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },


    // Contain Image
    containImage: {
        width: '100%',
        height: '100%',
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
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    // Speaker 1 Icon
    A_Speaker_Container: {
        position: 'absolute',
        left: '42%',
        top: '20%',
        width: '6%',
        height: '10%',
    },
    A_Speaker: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    // Speaker 2 Icon
    A_Speaker_Container_2: {
        position: 'absolute',
        left: '80%',
        top: '20%',
        width: '6%',
        height: '10%',
    },
    A_Speaker_2: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    // Next icon (Right Side)
    nextContainer: {
        position: 'absolute',
        left: '83%',
        top: '40%',
        width: '12%',
        height: '24%',
    },
    next: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    // Prev Icon (Left side)
    prevContainer: {
        position: 'absolute',
        left: '5%',
        top: '40%',
        width: '12%',
        height: '24%',
    },
    prev: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    //HomePage Container
    HomePageContainer: {
        position: 'absolute',
        top: '80%',
        left: '10%',
        width: '80%',
        height: '20%',
    },

    //HomePage Items
    HomePageItems: {
        margin: 5,
        marginBottom: 0,
        width: '25%',
        height: '40%',
    },

    //HomePage Touch
    HomeTouch: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '60%',
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
        top: '20%',
        left: '10%',
        width: '80%',
        height: '90%',
    },

    // Culture and Arts Container
    CultureandArtsContainer: {
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '80%',
        height: '70%',
    },

    // Vocabulary Menu and list
    VocabularyContainer: {
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100%',
        height: '100%',
    },
    VocabularyItemSize: {
        margin: 10,
        marginBottom: 0,
        width: '100%',
        height: '100%',
    },
    VocabularyRow: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '50%',
    },
    VocabularyRow1: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '35%',
    },
    VocabBackContainer: {
        position: 'absolute',
         left: '79%',
         top: '72%',
    },
    VocabBack: {
        width: wp('14%'),
        height: hp('28%'),
        resizeMode: 'contain',
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
    VmenuContainer: {
        justifyContent:'center',
        position: 'relative',
        top: '9%',
        left: '5%',
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

    //Glow container
    VideoContainer:{
        position: 'absolute',
        left: '52%',
        top: '20%',
        width: '25%',
        height: '25%',
    },
    Glow:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    //vocab container
    vocabContainer:{
        position: 'absolute',
        top: '15%',
        justifyContent: 'center',
    },
};
