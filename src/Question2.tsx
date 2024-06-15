import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const Q2 = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [isFocus, setIsFocus] = useState(false);
  const [selectedNav, setSelectedNav] = useState('');
  const [searchDoc, setSearchDoc] = useState('');

  const mockNavList = [
    {
      name: 'AEON',
      href: 'https://aeonretail.com.my/',
    },
    {
      name: 'Showcase',
      href: 'https://showcase.my/',
    },
    {
      name: 'Docs',
      href: 'https://reactnative.dev/docs/getting-started',
    },
  ];

  const onPressNav = (link: string) => {
    Linking.openURL(link);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.question}>Question 2</Text>
        <Text style={styles.viewTitle}>Desktop View</Text>

        <View style={styles.horizontalContainer}>
          {mockNavList.map(item => (
            <TouchableOpacity onPress={() => onPressNav(item.href)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
          <TextInput
            style={styles.item}
            placeholder="Search documentation"
            onChangeText={setSearchDoc}
            defaultValue={searchDoc}
          />
        </View>

        <Text style={styles.viewTitle}>Mobile View</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={mockNavList}
          search
          maxHeight={300}
          labelField="name"
          valueField="href"
          placeholder={!isFocus ? 'Select Navigation' : '...'}
          searchPlaceholder="Search..."
          value={selectedNav}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSelectedNav(item.href);
            onPressNav(item.href);
            setIsFocus(false);
          }}
        />
      </View>
      <Button
        title="Next Q3"
        onPress={() => {
          navigation.navigate('Q3');
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  horizontalInnerContainer: {
    justifyContent: 'space-around',
  },
  item: {
    height: 30,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#ebebeb',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  viewTitle: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 15,
  },
  question: {
    fontSize: 22,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Q2;
