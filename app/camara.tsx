import { View, StyleSheet } from 'react-native';
import { CameraOrganism } from '../components/organisms/camaraOrganism';
import { Colors } from '../constants/colores';

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <CameraOrganism />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});