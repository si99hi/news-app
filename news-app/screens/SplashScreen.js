import LottieView from 'lottie-react-native';
import {  View } from 'react-native';
export const SplashScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <LottieView
                Style={require('../assets/anim.json')}

                source={}
                autoPlay
                loop


                />
        </View>
    )
}
