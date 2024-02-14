import { WelcomeMessage } from "@/components";
import AvailableClassrooms from "@/components/AvailableClassRooms";
import Footer from "@/components/Footer";
import { IUser } from "@/interfaces/user";
import storeService from "@/services/Store";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

const Home = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    let currentUser = storeService.getUser();
    setUser(currentUser);

    // scanDevices();
  }, []);

  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <ScrollView
          style={{
            flex: 1,
            flexDirection: "column",
            gap: 16,
            paddingHorizontal: 16,
            paddingVertical: 24,
          }}
        >
          <WelcomeMessage />
          <AvailableClassrooms />
        </ScrollView>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Home;
