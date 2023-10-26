
import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/authSlice';

export default function SignUpScreen({ navigation }) {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useDispatch();

    const register = async () => {
        if (name?.length <= 0 || age?.length <= 0 || email?.length <= 0 || password?.length <= 0) {
            Alert.alert("All fields are required");
        } else {
            await dispatch(signUp({ name, age, email, password }));
            navigation.navigate('Home');
        }

    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <Text style={styles.inputLable}>{"Your Name"}</Text>
            <TextInput
                value={name}
                placeholder='John Doe'
                placeholderTextColor="gray"
                onChangeText={(val) => setName(val)}
                style={styles.inputStyle}

            />

            <Text style={styles.inputLable}>{"Your Age(In-Years)"}</Text>
            <TextInput
                value={age}
                placeholder='25'
                placeholderTextColor="gray"
                onChangeText={(val) => setAge(val)}
                style={styles.inputStyle}
                keyboardType='number-pad'

            />

            <Text style={styles.inputLable}>{"Your Email"}</Text>
            <TextInput
                value={email}
                placeholder='johndoe@gmail.com'
                placeholderTextColor="gray"
                onChangeText={(val) => setEmail(val)}
                style={styles.inputStyle}
                keyboardType='email-address'

            />

            <Text style={styles.inputLable}>{"Password"}</Text>
            <TextInput
                value={password}
                placeholder='***********'
                placeholderTextColor="gray"
                onChangeText={(val) => setPassword(val)}
                style={styles.inputStyle}

            />
            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.buttonText}>{"Register"}</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputStyle: {
        borderWidth: 1,
        width: '80%',
        padding: 10,
        borderColor: 'gray',
        borderRadius: 8,
        marginHorizontal: 50,
        marginBottom: 20
    },
    inputLable: {
        alignSelf: 'flex-start',
        width: '80%',
        marginHorizontal: 40,
        marginBottom: 5
    },
    button: {
        width: '80%',
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    }
});


