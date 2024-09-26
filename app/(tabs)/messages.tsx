import React, { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
// import { MessageContext } from "../providers/messageProvider";
// import Test from "./Test";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { router } from "expo-router";

// const { width: SCREEN_WIDTH } = Dimensions.get("window");

const MessageHome = () => {
    const [messageData, setMessageData] = useState([]);
    const [myConvos, setMyConvos] = useState();
    const navigation = useNavigation();
    const DELETE_BTN_WIDTH = 80; // Adjusted for button width

    // Context for messages
    //   const { getConvos } = useContext(MessageContext);

    useEffect(() => {
        getConvosData();
        const intervalId = setInterval(getConvosData, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const getConvosData = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/getConvos?email=${localStorage.getItem(
                    "user"
                )}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            //   setMyConvos([...data.Posts]);
        } catch (error) {
            console.error(error);
        }
    };

    //   const getConvoData = async () => {
    //     try {
    //       const response = await fetch(
    //         `http://localhost:3000/api/getConvoData?ids=${myConvos?.map(
    //           (convo) => convo.id
    //         )}`,
    //         {
    //           method: "GET",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //         }
    //       );
    //       const allData = await response.json();
    //       setMessageData(allData.Posts);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    //   useEffect(() => {
    //     getConvoData();
    //   }, [myConvos]);

    // Handling drag to delete action using Reanimated
    // const handleDragEnd = (dragX, messageId) => {
    //     if (dragX.value < -DELETE_BTN_WIDTH) {
    //         // Handle delete action
    //         console.log("Delete message with ID:", messageId);
    //     }
    //     dragX.value = withSpring(0); // Reset position
    // };

    // const renderItem = ({ item }) => {
    //     const dragX = useSharedValue(0);

    //     const gestureHandler = useAnimatedGestureHandler({
    //         onActive: (event) => {
    //             dragX.value = event.translationX;
    //         },
    //         onEnd: () => {
    //             handleDragEnd(dragX, item.conversationId);
    //         },
    //     });

    //     return (
    //         <PanGestureHandler onGestureEvent={gestureHandler}>
    //             <Animated.View
    //                 style={[
    //                     styles.msgContainer,
    //                     { transform: [{ translateX: dragX.value }] },
    //                 ]}
    //             >
    //                 <Test
    //                     time={item.time}
    //                     conversationId={item.conversationId}
    //                     message={item.message}
    //                     status={item.status}
    //                     userName={item.userName}
    //                     recipient={item.recipient}
    //                 />
    //             </Animated.View>
    //         </PanGestureHandler>
    //     );
    // };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.menuButton}
                //   onPress={() => navigation.toggleDrawer()}
                >
                    <Ionicons name="menu" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>{localStorage.getItem("user")}</Text>
            </View>

            {/* <FlatList
                data={messageData}
                renderItem={renderItem}
                keyExtractor={(item) => item.conversationId}
                contentContainerStyle={styles.listContent}
            /> */}

            <TouchableOpacity
                style={styles.createButton}
            // onPress={() => router.navigate("NewChat")}
            >
                <Ionicons name="add-outline" size={32} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "#f8f8f8",
    },
    menuButton: {
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    listContent: {
        padding: 15,
    },
    msgContainer: {
        padding: 15,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 2,
    },
    createButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#2095F2",
        borderRadius: 50,
        padding: 15,
    },
});

export default MessageHome;
