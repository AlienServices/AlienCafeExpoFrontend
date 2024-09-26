import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { MyContext } from '../../providers/postProvider';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; // For icons



const Comment = () => {
  // const { myInfo } = useContext(MyContext);
  const [comments, setComments] = useState([]);
  // const { id, myVote, postId } = useRoute().params;
  const [replyComment, setReplyComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyToggle, setReplyToggle] = useState({});
  const navigation = useNavigation();

  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/getComment?id=${id}`);
      const data = await response.json();
      setComments(data.comment);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  const getColor = (vote) => {
    switch (vote) {
      case 'yes':
        return 'green';
      case 'no':
        return 'red';
      case 'maybe':
        return '#fffc69';
      default:
        return 'grey';
    }
  };

  // const deleteComment = async (commentId) => {
  //   try {
  //     await fetch(`http://localhost:3000/api/deleteComment`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ id: commentId }),
  //     });
  //     fetchComments();
  //   } catch (error) {
  //     console.error("Error deleting comment:", error);
  //   }
  // };

  // const addComment = async (comment, userName, postId, userId, commentId, vote) => {
  //   try {
  //     await fetch(`http://localhost:3000/api/addComment?id=${id}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ comment, userName, postId, userId, commentId, vote }),
  //     });
  //     fetchComments();
  //   } catch (error) {
  //     console.error("Error adding comment:", error);
  //   }
  // };

  // const addCommentLike = async (userId, commentId) => {
  //   try {
  //     await fetch(`http://localhost:3000/api/addCommentLike`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ userId, commentId }),
  //     });
  //     fetchComments();
  //   } catch (error) {
  //     console.error("Error adding like to comment:", error);
  //   }
  // };

  // const addCommentDislike = async (userId, commentId) => {
  //   try {
  //     await fetch(`http://localhost:3000/api/addCommentDislike`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ userId, commentId }),
  //     });
  //     fetchComments();
  //   } catch (error) {
  //     console.error("Error adding dislike to comment:", error);
  //   }
  // };

  // const isLikedByUser = (likes) => likes.includes(myInfo.id);
  // const isDislikedByUser = (dislikes) => dislikes.includes(myInfo.id);
  // const calculateNetScore = (likes, dislikes) => likes.length - dislikes.length;

  // const handleReplyClick = (commentId) => {
  //   setReplyingTo((prevId) => (prevId === commentId ? null : commentId));
  // };

  // const renderReplies = (replies, isFirstLevel = true) => {
  //   return replies.map((reply) => {
  //     return (
  //       <View key={reply.id} style={[styles.replyContainer, isFirstLevel ? styles.firstLevelReply : {}]}>
  //         <Image source={{ uri: 'https://ionicframework.com/docs/img/demos/avatar.svg' }} style={styles.avatar} />
  //         <View style={{ flex: 1 }}>
  //           <View style={[styles.commentBox, { borderColor: getColor(reply.vote) }]}>
  //             <View style={styles.row}>
  //               <Text style={styles.username}>{reply.username}</Text>
  //               {myInfo?.username === reply.username && (
  //                 <TouchableOpacity onPress={() => deleteComment(reply.id)}>
  //                   <Ionicons name="trash-bin" size={24} color="black" />
  //                 </TouchableOpacity>
  //               )}
  //             </View>
  //             <Text style={styles.commentText}>{reply.comment}</Text>
  //             <TouchableOpacity onPress={() => handleReplyClick(reply.id)}>
  //               <Text style={styles.replyButton}>Reply</Text>
  //             </TouchableOpacity>
  //             <View style={styles.voteRow}>
  //               <Ionicons
  //                 name={isLikedByUser(reply?.likes) ? 'arrow-up-circle' : 'arrow-up-circle-outline'}
  //                 size={24}
  //                 color="black"
  //                 onPress={() => addCommentLike(myInfo.id, reply.id)}
  //               />
  //               <Text>{calculateNetScore(reply?.likes, reply?.dislikes)}</Text>
  //               <Ionicons
  //                 name={isDislikedByUser(reply?.dislikes) ? 'arrow-down-circle' : 'arrow-down-circle-outline'}
  //                 size={24}
  //                 color="black"
  //                 onPress={() => addCommentDislike(myInfo.id, reply.id)}
  //               />
  //             </View>
  //             {replyingTo === reply.id && (
  //               <View style={styles.replyInputContainer}>
  //                 <TextInput
  //                   style={styles.inputReply}
  //                   onChangeText={(text) => setReplyComment(text)}
  //                   placeholder="Reply..."
  //                 />
  //                 <Button
  //                   title="Send"
  //                   onPress={() =>
  //                     addComment(replyComment, myInfo?.username, postId, myInfo?.id, reply.id, myVote)
  //                   }
  //                 />
  //               </View>
  //             )}
  //           </View>
  //         </View>
  //         {replyToggle[reply.id] && renderReplies(reply.replies, false)}
  //       </View>
  //     );
  //   });
  // };

  return (
    <ScrollView style={styles.container}>
      {comments && (
        <View style={styles.padding}>
          <View style={[styles.commentBox, { borderColor: getColor(comments?.vote) }]}>
            <View style={styles.row}>
              <Image source={{ uri: 'https://ionicframework.com/docs/img/demos/avatar.svg' }} style={styles.avatar} />
              {/* <Text style={styles.username}>{comments.username}</Text> */}
              {/* {myInfo?.username === comments?.username && (
                <TouchableOpacity onPress={() => deleteComment(id)}>
                  <Ionicons name="trash-bin" size={24} color="black" />
                </TouchableOpacity>
              )} */}
            </View>
            {/* <Text style={styles.commentText}>{comments.comment}</Text> */}
            {/* <TouchableOpacity onPress={() => handleReplyClick(comments.id)}>
              <Text style={styles.replyButton}>Reply</Text>
            </TouchableOpacity> */}
            <View style={styles.voteRow}>
              {/* <Ionicons
                name={isLikedByUser(comments.likes) ? 'arrow-up-circle' : 'arrow-up-circle-outline'}
                size={24}
                color="black"
                onPress={() => addCommentLike(myInfo.id, comments.id)}
              />
              <Text>{calculateNetScore(comments.likes, comments.dislikes)}</Text>
              <Ionicons
                name={isDislikedByUser(comments.dislikes) ? 'arrow-down-circle' : 'arrow-down-circle-outline'}
                size={24}
                color="black"
                onPress={() => addCommentDislike(myInfo.id, comments.id)}
              /> */}
            </View>
            {/* {replyingTo === comments.id && (
              <View style={styles.replyInputContainer}>
                <TextInput
                  style={styles.inputReply}
                  onChangeText={(text) => setReplyComment(text)}
                  placeholder="Reply..."
                />
                <Button
                  title="Send"
                  onPress={() =>
                    addComment(replyComment, myInfo?.username, postId, myInfo?.id, comments.id, myVote)
                  }
                />
              </View>
            )}
            {comments.replies && renderReplies(comments.replies)} */}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Comment;
