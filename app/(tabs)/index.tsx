import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY;

interface Article {
  title: string;
  urlToImage?: string;
}

export default function TabOneScreen() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: { country: 'us', apiKey: API_KEY },
      });
      setArticles(response.data.articles);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: { item: Article }) => (
    <View style={styles.card}>
      {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={articles}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  list: { padding: 10 },
  card: { marginBottom: 15, backgroundColor: '#f9f9f9', borderRadius: 8, overflow: 'hidden', elevation: 2 },
  image: { width: '100%', height: 200, resizeMode: 'cover' },
  title: { padding: 10, fontSize: 16, fontWeight: 'bold' },
});