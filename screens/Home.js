import React from "react";
import { View, FlatList } from "react-native";
import { Button } from "react-native-elements";

const exercises = [
  { id: "1", name: "Push-Ups", type: "Repetition" },
  { id: "2", name: "Jump Rope", type: "Duration" },
];

export default function Home({ navigation }) {
  return (
    <View>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() =>
              navigation.navigate(
                item.type === "Repetition"
                  ? "RepetitionExercise"
                  : "DurationExercise",
                { exercise: item }
              )
            }
            containerStyle={{ margin: 5 }}
          />
        )}
      />
    </View>
  );
}
