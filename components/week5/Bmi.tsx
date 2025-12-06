import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [bmi, setBmi] = useState<number | null>(null);
    const [thisDescription, setThisDescription] = useState<string | null>(null);
    const [thisColor, setThisColor] = useState<string>('black');

    const backToHome = () => {
        router.back();
    }

    const onPressButton = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);
        if (isNaN(w) || isNaN(h) || h === 0) return;

        const bmiValue = w / ((h / 100) * (h / 100));
        setBmi(bmiValue);

        if (bmiValue < 18.5) {
            setThisDescription("Underweight");
            setThisColor("#2196F3");
        } else if (bmiValue >= 18.5 && bmiValue <= 24.99) {
            setThisDescription("Normal");
            setThisColor("#4CAF50");
        } else if (bmiValue >= 25 && bmiValue <= 29.99) {
            setThisDescription("Overweight");
            setThisColor("#FF9800");
        } else if (bmiValue >= 30 && bmiValue <= 34.99) {
            setThisDescription("Obese");
            setThisColor("#FF5722");
        } else {
            setThisDescription("Extremely Obese");
            setThisColor("#C62828");
        }
    };

    return (
        <>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
                <TouchableOpacity onPress={backToHome}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>BMI Calculator</Text>
            </View>
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3, marginBottom: 20 }}>
                <Text style={{ fontSize: 18, color: '#333', marginBottom: 10, fontWeight: '600' }}>Weight (kg.)</Text>
                <TextInput
                    value={weight}
                    onChangeText={setWeight}
                    style={{ fontSize: 18, borderBottomWidth: 1, borderBottomColor: '#ddd', paddingVertical: 10 }}
                    placeholder="Input your Weight ..."
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                />
            </View>

            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3, marginBottom: 20 }}>
                <Text style={{ fontSize: 18, color: '#333', marginBottom: 10, fontWeight: '600' }}>Height (cm.)</Text>
                <TextInput
                    value={height}
                    onChangeText={setHeight}
                    style={{ fontSize: 18, borderBottomWidth: 1, borderBottomColor: '#ddd', paddingVertical: 10 }}
                    placeholder="Input your Height ..."
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                />
            </View>

            <View style={{ flexDirection: "row", marginVertical: 20, justifyContent: 'space-between' }}>
                <View style={{ backgroundColor: "white", flex: 0.48, borderRadius: 15, height: 120, justifyContent: "center", alignItems: "center", shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: thisColor }}>{bmi ? bmi.toFixed(2) : "-"}</Text>
                    <Text style={{ fontSize: 14, color: '#888', marginTop: 5 }}>BMI</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 0.48, borderRadius: 15, height: 120, justifyContent: "center", alignItems: "center", shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: thisColor, textAlign: 'center' }}>{thisDescription || "-"}</Text>
                    <Text style={{ fontSize: 14, color: '#888', marginTop: 5 }}>Status</Text>
                </View>
            </View>

            <TouchableOpacity onPress={onPressButton} activeOpacity={0.8}>
                <View style={{ padding: 18, backgroundColor: "#4CAF50", borderRadius: 30, shadowColor: '#4CAF50', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5 }}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: 'white', fontWeight: 'bold' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    );
}
