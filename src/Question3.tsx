import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Q3 = () => {
  //Q3
  function twoSum(numbers: number[], target: number): number[] {
    // your code here
    let map = new Map<number, number>();
    for (let i = 0; i < numbers.length; i++) {
      let difference = target - numbers[i];
      if (map.has(difference)) {
        return [map.get(difference) ?? -1 + 1, i + 1];
      }
      map.set(numbers[i], i);
    }
    return [];
  }
  console.log(twoSum([4, 11, 17, 25], 21));
  console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
  console.log(twoSum([-1, 0], -1));

  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([2, 3, 4], 6));

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.question}>Question 3</Text>
        <Text>Please look in console log</Text>
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
  question: {
    fontSize: 22,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default Q3;
