import { Image, Text, View } from "react-native"
import { styles } from "./NewsCard.styles"

export const NewsCard = (news) => {
    return (
        <View style={styles.card}>
            <Image style={styles.img}
            source={{uri: news.news.urlToImage}}/>
            <Text style={styles.newsTitle}>
                {news.news.title}
            </Text>
            <Text>
                {news.news.description}
            </Text>
        </View>
    )
}