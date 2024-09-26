import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import { MyContext } from "../providers/postProvider";
// import MyPosts from "../components/MyPosts";
// import Category from "../components/Category";
// import UserComments from "../components/UserComments";
import { useNavigation } from "@react-navigation/native";

const Tab2 = () => {
  const [choices, setChoices] = useState({
    posts: 1,
    replies: 0,
    likes: 0,
    categories: 0,
  });
//   const { myInfo?, myPosts } = useContext(MyContext);
  const navigation = useNavigation();

//   const handleChoiceChange = (newChoice) => {
//     setChoices(newChoice);
//   };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerContainer}>
          {/* <Text style={styles.username}>{myInfo?.username}</Text> */}
        </View>
        <View style={styles.rowEven}>
          <Image
            style={styles.userIcon}
            source={{
              uri: "https://ionicframework.com/docs/img/demos/avatar.svg",
            }}
          />
          <View style={styles.rowClose}>
            <Text>Posts</Text>
            {/* <Text style={styles.centerSmall}>{myPosts?.length}</Text> */}
          </View>
          <View style={styles.rowClose}>
            <Text>Following</Text>
            {/* <Text style={styles.centerSmall}>{myInfo?.following.length}</Text> */}
          </View>
          <View style={styles.rowClose}>
            <Text>Followers</Text>
            {/* <Text style={styles.centerSmall}>{myInfo?.followers.length}</Text> */}
          </View>
        </View>
        <TouchableOpacity
          style={styles.editProfile}
          // onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
        {/* <Text style={styles.bio}>{myInfo?.bio}</Text> */}
        <View style={styles.flexChoice}>
          <TouchableOpacity
            style={!choices.posts ? styles.smallTitleChoice : styles.smallTitleChoiceLine}
            // onPress={() => handleChoiceChange({ posts: 1, replies: 0, likes: 0, categories: 0 })}
          >
            <Text>My Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={!choices.replies ? styles.smallTitleChoice : styles.smallTitleChoiceLine}
            // onPress={() => handleChoiceChange({ posts: 0, replies: 1, likes: 0, categories: 0 })}
          >
            <Text>Replies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={!choices.likes ? styles.smallTitleChoice : styles.smallTitleChoiceLine}
            // onPress={() => handleChoiceChange({ posts: 0, replies: 0, likes: 1, categories: 0 })}
          >
            <Text>Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={!choices.categories ? styles.smallTitleChoice : styles.smallTitleChoiceLine}
            // onPress={() => handleChoiceChange({ posts: 0, replies: 0, likes: 0, categories: 1 })}
          >
            <Text>Reposts</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {/* {choices.replies ? (
          <UserComments id={myInfo?.id} />
        ) : choices.posts ? (
          <MyPosts />
        ) : choices.likes ? (
          <Text>Likes</Text>
        ) : choices.categories ? (
          <Category />
        ) : null} */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  rowEven: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  userIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  rowClose: {
    alignItems: "center",
  },
  centerSmall: {
    fontSize: 16,
    fontWeight: "bold",
  },
  editProfile: {
    alignSelf: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#2095F2",
    borderRadius: 5,
    marginVertical: 10,
  },
  editProfileText: {
    color: "#2095F2",
    fontSize: 16,
  },
  bio: {
    textAlign: "center",
    marginVertical: 10,
  },
  flexChoice: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  smallTitleChoice: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
  },
  smallTitleChoiceLine: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#2095F2",
    color: "#fff",
  },
  contentContainer: {
    paddingHorizontal: 15,
  },
});

export default Tab2;
