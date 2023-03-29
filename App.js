import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import LearExpo from "./src/LearExpo";

export default function App() {
	return (
		<View>
			<LearExpo />
			<StatusBar />
		</View>
	);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
