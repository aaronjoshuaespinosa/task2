import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    timeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.2,
        width: '100%',
        backgroundColor: 'green',
    },
    socMedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.8,
        width: '100%',
        backgroundColor: 'pink',
    },
    imgIcon: {
        width: 60,
        height: 60,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { styles }