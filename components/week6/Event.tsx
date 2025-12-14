import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

type EventItems = {
    id: string;
    title: string;
    uri: string;
    month: string;
    date: string;
    datetime: string;
    place: string;
}

export default function Event(props: any) {
    const [events, setEvents] = useState<EventItems[]>([]);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const result = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
                const data = await result.json();

                setEvents(data);
            } catch (e) {
                console.error("ERROR : ", e);
                throw e;
            }
        };

        loadEvents();
    }, []);

    return (
        <View >
            <FlatList
                horizontal={true}
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ marginRight: 20 }}>
                        <Image style={{ width: 300, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
                        <View style={{ flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 1, borderColor: 'gray' }}>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 20, color: 'red', textAlign: 'center' }}>{item.month}</Text>
                                <Text style={{ fontSize: 16, color: 'gray', textAlign: 'center' }}>{item.date}</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 18, color: 'black' }}>{item.title}</Text>
                                <Text style={{ color: 'gray' }}>{item.datetime}</Text>
                                <Text style={{ color: 'gray' }}>{item.place}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}