import { Text } from "react-native";
import { StyleSheet, View } from "react-native";

const AllAvilableJobs = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>all aviable jobs</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    fontSize: 24,
    color: "#9475d6",
  },
});
export default AllAvilableJobs;
