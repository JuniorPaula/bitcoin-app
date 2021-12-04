import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    filters: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-evenly',
    },
    buttonQuery: {
        width: 50,
        height: 30,
        backgroundColor: '#c3ac18',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonQuery: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    }
});

export default styles;