import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Q1 = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [total, setTotal] = useState(0);

  const onPressAdd2Num = () => {
    setTotal(parseInt(firstNumber) + parseInt(secondNumber));
  };
  return (
    <SafeAreaView>
      {/* Q1 */}
      <View style={styles.container}>
        <Text style={styles.question}>Question 1</Text>
        <Text style={styles.title}>Adding Two Numbers</Text>
        <TextInput
          style={styles.item}
          placeholder="First Number"
          onChangeText={setFirstNumber}
          defaultValue={firstNumber}
          autoCapitalize="none"
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.item}
          placeholder="Second Number"
          onChangeText={setSecondNumber}
          defaultValue={secondNumber}
          autoCapitalize="none"
          keyboardType="number-pad"
        />
        <TouchableOpacity style={styles.button} onPress={onPressAdd2Num}>
          <Text style={styles.buttonText}> Add Two Numbers </Text>
        </TouchableOpacity>
        <Text style={styles.buttonText}> Total: {total} </Text>

        <Button
          title="Next Q2"
          onPress={() => {
            navigation.navigate('Q2');
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  item: {
    height: 40,
    borderWidth: 1,
    marginVertical: 12,
    width: 200,
    padding: 10,
  },
  button: {
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    borderBlockColor: '#000000',
    borderRadius: 5,
    borderWidth: 1,
    width: 200,
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  question: {
    fontSize: 22,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default Q1;
