import { Image } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HrJobCard = ({ job }) => {
  const {
    _id,
    hrEmail,
    jobTitle,
    jobDescription,
    company,
    salary,
    location,
    img,
  } = job;
  console.log("Image URL:", img);
  const fixedImgUrl = img.replace("i.ibb.co.com", "i.ibb.co");

  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: img,
        }}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.cardContent}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.jobDescription}>{jobDescription}</Text>
        <Text style={styles.salary}>💰 {salary}</Text>
        <Text style={styles.location}>📍 {location}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => onUpdate(_id)}
          >
            <Icon name="edit" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(_id)}
          >
            <Icon name="trash" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    flexDirection: "row",
    gap: 8,
    padding: 16,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 30,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  company: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  jobDescription: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
    lineHeight: 20,
  },
  salary: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#007bff",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end", // Align buttons to the right
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 50,
    marginLeft: 10, // Add margin between buttons
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 50,
    marginLeft: 10, // Add margin between buttons
  },
});

export default HrJobCard;
