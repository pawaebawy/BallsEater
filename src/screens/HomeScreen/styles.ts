import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    homeBlock: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 15
    },
    homeBlockTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    }
});
