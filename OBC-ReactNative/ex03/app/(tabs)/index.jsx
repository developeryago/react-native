import axios from 'axios';
import { Text, View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { FlatList } from "react-native";

export default function HomeScreen() {
const [post, setPost] = useState({})

const fetchApiJsonplaceholder = async () => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
  setPost(resp.data)
}
useEffect(() => {
  fetchApiJsonplaceholder()
}, [])

const renderPost = ({ item }) => (
  <View>
    {/* {console.log(item.title)} */}
    <Text>ID: {item.id}</Text>
    <Text>Título: {item.title}</Text>
    <Text>Conteúdo: {item.body}</Text>
  </View>
);

  return (
    <FlatList
      data={post}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}/>
  );
}

const styles = StyleSheet.create({
  title: {

  }
})
