import FormSwitch from "@/components/form_components/FormSwitch";
import AppBottomBar from "@/components/global/app_bottom_bar/AppBottomBar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Title } from "react-native-paper";

export default function Index() {

  const styles = StyleSheet.create({
    container: {
      flex: 1, // Ensure the SafeAreaView takes up the full height
    },
    scrollContent: {
      flexGrow: 1,
    },
    formContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 16,
    },
    bottomBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 60, // Adjust based on your bottom bar height
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
  });  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContent}>
        <View
          style={styles.formContainer}>
          <Title>Select a condition to get started.</Title>
          <FormSwitch name="Blinded" />
          <FormSwitch name="Charmed" />
          <FormSwitch name="Deafened" />
          <FormSwitch name="Frightened" />
          <FormSwitch name="Grappled" />
          <FormSwitch name="Incapacitated" />
          <FormSwitch name="Invisible" />
          <FormSwitch name="Paralyzed" />
          <FormSwitch name="Petrified" />
          <FormSwitch name="Poisoned" />
          <FormSwitch name="Prone" />
          <FormSwitch name="Restrained" />
          <FormSwitch name="Stunned" />
          <FormSwitch name="Exhaustion" />
          <FormSwitch name="Unconscious" />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <AppBottomBar />
      </View>
    </SafeAreaView>

  );
}
