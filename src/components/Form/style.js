import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    formContext:{
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },    
    form:{
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },
    formLabel:{
        color: '#000000',
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#0068D6',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 12,
        marginTop: 10,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: '#ffffff',
    }
});

export default styles 