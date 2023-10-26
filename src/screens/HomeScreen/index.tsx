import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

interface HomeScreenProps {
    navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const auth = useSelector((state) => state?.auth?.userInfo);

    return (
        <View style={styles.container}>

            {auth && <View>
                <Text style={styles.name}>{`Welcome ${auth.name}`}</Text>
                <Text style={styles.subHeading}>{"Your profile details"}</Text>
                <Text style={styles.text}>{`Email: ${auth.email}`}</Text>
                <Text style={styles.text}>{`Email: ${auth.age}`}</Text>
            </View>}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        paddingTop: 20,
        paddingHorizontal: 16
    },
    name: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 25
    },
    subHeading: {
        color: 'blue',
        fontSize: 18,
        marginBottom: 5
    },
    text: {
        color: 'gray',
        marginBottom: 5
    }
})


export default HomeScreen;


