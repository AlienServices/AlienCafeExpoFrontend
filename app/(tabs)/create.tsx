import React, { useState, useEffect, useRef, useContext } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { MyContext } from "../providers/postProvider";
// import { RichEditor, RichToolbar, actions } from "react-native-pell-rich-editor";
// import Quiz from "../subPages/Quiz";
import { Ionicons } from "@expo/vector-icons";

const MyEditor = () => {
    const [editorHtmlTitle, setEditorHtmlTitle] = useState("");
    const [editorHtml, setEditorHtml] = useState("");

    const titleEditorRef = useRef(null);
    const contentEditorRef = useRef(null);
    const navigation = useNavigation();
    //   const { posts, myPosts, setPosts, setMyPosts, updatePost, getAllPosts, myInfo, createPost } = useContext(MyContext);

    // useEffect(() => {
    //     if (contentEditorRef.current) {
    //         contentEditorRef.current?.registerToolbar(() => { });
    //     }
    // }, []);

    // const handleTitleChange = (text) => {
    //     setEditorHtmlTitle(text);
    // };

    // const handleChange = (text) => {
    //     setEditorHtml(text);
    // };

    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.iconButton}
                >
                    <Ionicons name="close-outline" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setEditorHtml("");
                        setEditorHtmlTitle("");
                        navigation.navigate("Quiz", { quizTitle: editorHtmlTitle, content: editorHtml });
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View> */}

            {/* Title Editor */}
            <View style={styles.titleEditorContainer}>
                {/* <RichEditor
                    ref={titleEditorRef}
                    placeholder="Title"
                    initialContentHTML={editorHtmlTitle}
                    // onChange={handleTitleChange}
                    editorStyle={styles.titleEditor}
                /> */}
            </View>

            {/* Content Editor */}
            <View style={styles.contentEditorContainer}>
                {/* <RichEditor
                    ref={contentEditorRef}
                    placeholder="Content Here..."
                    initialContentHTML={editorHtml}
                    // onChange={handleChange}
                    editorStyle={styles.contentEditor}
                /> */}
            </View>

            {/* Toolbar */}
            {/* <RichToolbar
                editor={contentEditorRef}
                selectedIconTint={"#2095F2"}
                disabledIconTint={"#bfbfbf"}
                actions={[
                    actions.setBold,
                    actions.setItalic,
                    actions.insertLink,
                    actions.insertImage,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                ]}
                style={styles.toolbar}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        padding: 15,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconButton: {
        padding: 8,
    },
    button: {
        backgroundColor: "#2095F2",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    titleEditorContainer: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        marginBottom: 15,
    },
    titleEditor: {
        backgroundColor: "transparent",
        padding: 5,
    },
    contentEditorContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    contentEditor: {
        flex: 1,
        backgroundColor: "transparent",
        padding: 5,
    },
    toolbar: {
        backgroundColor: "#F5F5F5",
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
});

export default MyEditor;
