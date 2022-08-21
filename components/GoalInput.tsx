import { useState } from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Modal,
    Image,
} from 'react-native';


const GoalInput = (props: any) => {
    const [enteredGoalText, setEnteredGoalText] = useState<string>("");

    const goalInputHandler = (enteredText: any) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    source={require("../assets/images/goal.png")} style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button color="#f31282" title="Cancel" onPress={props.onEndGoal} /></View>
                    <View style={styles.button}><Button color="#b180f0" title="Add Goal" onPress={addGoalHandler} /></View>
                </View>
            </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        borderRadius: 6,
        backgroundColor: "#e4d0ff",
        color: "#120438",
        width: "100%",
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        margin: 8,
    }
});
