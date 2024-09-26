import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation
import {MyContext} from '../../components/providers//postProvider'; // Import your context
// import UserPosts from '../../components/UserPosts';
// import Category from '../../components/Category';

const Profile = ({ route }) => {
  const { id } = route.params; // Assuming you're passing `id` as a param
  const [choices, setChoices] = useState({
    posts: 1,
    replies: 0,
    likes: 0,
    categories: 0,
  });
  const {
    posts,
    myPosts,
    setPosts,
    setMyPosts,
    updatePost,
    deletePost,
    myInfo,
    setMyInfo,
  } = useContext(MyContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    id: '',
    username: '',
    bio: '',
  });
  const [replies, setReplies] = useState(0);
  const [likes, setLikes] = useState(1);
  const [categories, setCategories] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    getUserInfo();
  }, []);

  const updateUser = async (username, bio, following) => {
    const updateUser = await post({
      url: `http://localhost:3000/api/updateUsers?email=${myInfo.email}`,
      body: {
        bio: bio,
        username: myInfo?.username,
        following,
      },
    });
    setMyInfo(updateUser.update);
    getUserInfo();
  };

  const getUserInfo = async () => {
    try {
      const result = await fetch(
        `http://localhost:3000/api/myInfo?email=${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const posts = await result.json();
      setUserInfo(posts.Hello);
    } catch (error) {
      console.log(error, 'this is the create user error');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.icon}>{'< Back'}</Text>
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{userInfo?.username}</Text>
          {myInfo.email !== id && (
            <>
              {myInfo?.following?.includes(id) ? (
                <Button
                  title="Unfollow"
                  onPress={() => {
                    const emailIndex = myInfo?.following?.indexOf(id);
                    const newLikes = [
                      ...myInfo?.following?.slice(0, emailIndex),
                      ...myInfo?.following?.slice(emailIndex + 1),
                    ];
                    updateUser(myInfo?.username, myInfo?.bio, newLikes);
                  }}
                />
              ) : (
                <Button
                  title="Follow"
                  onPress={() => {
                    updateUser(myInfo?.username, myInfo?.bio, [
                      ...myInfo.following,
                      userInfo.email,
                    ]);
                  }}
                />
              )}
            </>
          )}
        </View>
      </View>
      <Text style={styles.bio}>{userInfo?.bio}</Text>
      <View style={styles.choices}>
        <TouchableOpacity
          style={styles.choice}
          onPress={() =>
            setChoices({ posts: 1, replies: 0, likes: 0, categories: 0 })
          }
        >
          <Text style={styles.choiceText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.choice}
          onPress={() =>
            setChoices({ posts: 0, replies: 1, likes: 0, categories: 0 })
          }
        >
          <Text style={styles.choiceText}>Replies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.choice}
          onPress={() =>
            setChoices({ posts: 0, replies: 0, likes: 1, categories: 0 })
          }
        >
          <Text style={styles.choiceText}>Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.choice}
          onPress={() =>
            setChoices({ posts: 0, replies: 0, likes: 0, categories: 1 })
          }
        >
          <Text style={styles.choiceText}>Categories</Text>
        </TouchableOpacity>
      </View>
      {choices.replies ? (
        <Text>replies</Text>
      ) : choices.posts ? (
        <UserPosts />
      ) : choices.likes ? (
        <Text>Likes</Text>
      ) : choices.categories ? (
        <Category />
      ) : (
        <Text>nada</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  icon: {
    fontSize: 18,
    color: 'blue',
  },
  userInfo: {
    alignItems: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    marginBottom: 20,
  },
  choices: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  choice: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'lightgray',
  },
  choiceText: {
    fontSize: 16,
  },
});

export default Profile;
