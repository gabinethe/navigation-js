import { Button, Text, View } from "react-native";

export default function DetailScreen({ navigation }) {
  return (
    <View>
      <Text>Detail Screen</Text>
      <Button
        title="Vai pra porra da Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Vai pro caralho do Perfil"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
