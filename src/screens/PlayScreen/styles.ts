import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#282828',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 15
    },
    content: {
        flex: 15,
        backgroundColor: '#fefefe',
        padding: 15
    },
    modalImage: {
        height: 30,
        width: 30
    },
});
