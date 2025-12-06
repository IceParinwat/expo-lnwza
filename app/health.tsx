import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import Bmi from "../components/week5/Bmi";
import Heartbeat from "../components/week5/Heartbeat";

export default function Health() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, backgroundColor: 'lightblue', justifyContent: "center", padding: 20 }}>
                <Bmi />
                <Heartbeat />
            </View>
        </TouchableWithoutFeedback>
    );
}
