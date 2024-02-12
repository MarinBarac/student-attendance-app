import { HeaderBtn, HeaderText } from "@/components";
import Footer from "@/components/Footer";
import { COLORS } from "@/constants";
import { Stack } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primaryLight },
          headerShadowVisible: false,
          headerLeft: () => <HeaderText />,
          headerRight: () => <HeaderBtn />,
          title: "",
        }}
      />
      <View style={{ height: '100%'}}>
        <ScrollView style={{flex: 1 }}></ScrollView>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Home;
