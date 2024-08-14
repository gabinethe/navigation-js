import { Button, Text, View } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Vai pra porra da Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Vai pro caralho dos Detalhes"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
