import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Vai pro caralho dos detalhes"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Vai pra porra do perfil"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
