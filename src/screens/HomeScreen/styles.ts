import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#282828',
        padding: 15
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    homeBlock: {
        flex: 10,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
