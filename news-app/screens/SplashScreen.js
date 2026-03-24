// npm install lottie-react-native
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";

export const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home");
        }, 5000);
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                style={styles.splashCard}
                source={require('../assets/anim.json')}
                autoPlay
                loop
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    splashCard: {
        width: 300,
        height: 300
    }
})