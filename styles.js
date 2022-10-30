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
    background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    tdContainer: {
        flex: 0.2,
        alignItems: 'flex-end',
        width: '90%',
        borderRadius: 10,
        marginHorizontal: 16,
        marginTop: 16,
    },
    time: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 56,
        marginVertical: -5,
    },
    date: {
        color: '#fff',
        fontSize: 18,
        marginVertical: -5,
    },
    secondaryContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.8,
        width: '100%',
    },
    socMedContainer: {
        position: 'absolute',
        bottom: -1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 32,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtIcon: {
        paddingTop: 4,
        fontSize: 12,
    },
});

export { styles }