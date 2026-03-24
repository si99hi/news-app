import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native"; // Import for getting route params
import { styles } from "./HomeScreen.styles"; // Reuse styles from HomeScreen
import { NewsCard } from "../components/NewsCard";

export const CategoryScreen = () => {
    const API_KEY = '695e07af402f4b119f0703e9b19f4683'; // Same as HomeScreen
    const COUNTRY = 'us'; // Same as HomeScreen
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const route = useRoute(); // Get the current route to access the screen name
    const category = route.name.toLowerCase(); // Convert screen name (e.g., "Sports") to lowercase ("sports")

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        const newsURL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${category}&apiKey=${API_KEY}`;
        console.log("URL:", newsURL);
        try {
            const res = await axios.get(newsURL);
            setNews(res.data.articles);
            setLoading(false);
        } catch (error) {
            console.error("Error while fetching news.", error);
            setLoading(false); // Stop loading on error
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {`${route.name} News in ${COUNTRY.toUpperCase()}`} {/* Dynamic title based on category */}
            </Text>

            {
                loading ? (
                    <ActivityIndicator size="large" color="#ff0000" />
                ) : (
                    <FlatList
                        data={news}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <NewsCard news={item} />}
                    />
                )
            }
        </View>
    );
};