import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Heartbeat() {
    const [count, setCount] = useState<number>(0);

    const onPressButton = () => {
        setCount(count + 1);
    };

    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 20 }}>
                <TouchableOpacity onPress={onPressButton}>
                    <FontAwesome name="heart" size={30} color="orange" />
                </TouchableOpacity>
                <Text style={{ fontSize: 30 }}>{count}</Text>
            </View>
        </View>
    );
}
