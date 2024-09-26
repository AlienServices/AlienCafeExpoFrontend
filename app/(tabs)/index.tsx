import React, { useContext, useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { supabase } from "../../components/";
// import alien from "../../assets/alien.png"; // Replace with the path to your image asset
// import AllPosts from "../components/AllPosts";
import { MyContext } from "../../components/providers/postProvider";
import Swiper from "react-native-swiper";
// import Category from "../components/categories/Category";

const Tab3 = () => {
  const { myInfo, setMyInfo } = useContext(MyContext);
  const navigation = useNavigation();
  const [categories, setCategories] = useState([
    "Aliens",
    "Vaccines",
    "Government",
    "Space",
    "9/11",
    "Covid",
    "Israel",
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const handleLogout = async () => {
    console.log("hitting logout in tab 3");
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log("Logout error:", error);
      } else {
        localStorage.removeItem("user");
        setMyInfo({
          id: "",
          content: "",
          likes: [],
          email: "",
          bio: "",
          username: "",
          following: [],
          followers: [],
        });
        // navigation.navigate("Tab1");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuHeader}>
        {/* <Text style={styles.title}>@{myInfo?.username}</Text> */}
        <View style={styles.buttonContainer}>
          {/* <Button title="Logout" onPress={handleLogout} /> */}
        </View>
      </View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.imageContainer}>
          {/* <Image source={alien} style={styles.image} /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.middle}>
        <Text style={styles.categoryTitle}>{currentCategory}</Text>
      </View>
      <Swiper
        showsPagination
        loop={false}
        onIndexChanged={(index) => setCurrentCategory(categories[index])}
        style={styles.swiper}
      >
        {categories.map((category, index) => (
          <View key={index} style={styles.slide}>
            {/* <Category category={category} /> */}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  middle: {
    alignItems: "center",
    marginVertical: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  swiper: {
    flex: 1,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default Tab3;
