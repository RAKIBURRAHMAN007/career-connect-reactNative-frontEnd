import { useQuery } from "@tanstack/react-query";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import UseAxiosPublic from "../../hooks/AxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import HrJobCard from "./HrJobCard";

const ManagePostedJobs = () => {
  const axiosPublic = UseAxiosPublic();
  const { user } = useContext(AuthContext);

  const {
    data: jobs = [],

    refetch,
  } = useQuery({
    queryKey: ["jobs", user?.email],

    queryFn: async () => {
      const res = await axiosPublic.get(`/jobs/${user.email}`);
      return res.data;
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {jobs.map((job) => (
          <HrJobCard key={job._id} job={job}></HrJobCard>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 5,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#9475d6",
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 100,
    paddingHorizontal: 10,
  },
  jobCard: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#444",
  },
});

export default ManagePostedJobs;
