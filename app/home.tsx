import Event from "@/components/week6/Event";
import React from "react";
import { ScrollView, View } from "react-native";

export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'lightyellow', marginTop: 20 }}>
                <Event style={{ margin: 20 }} />
            </View>
        </ScrollView>
    );
}
