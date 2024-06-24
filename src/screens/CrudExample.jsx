import React, { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';
import  { addUser, updateUser, deleteUser } from '../redux/store';
import themeStyle from '../styles/themeStyle';

export default  CrudExample = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [userId, setUserId] = useState(null);

  const handleSubmit = () => {
    if (userId) {
      dispatch(updateUser({ id: userId, name, age }));
    } else {
      dispatch(addUser({ id: Date.now(), name, age }));
    }
    setName('');
    setAge('');
    setUserId(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={themeStyle.BLACK}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        placeholderTextColor={themeStyle.BLACK}
      />
      <Button title={userId ? "Update User" : "Add User"} onPress={handleSubmit} />
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={{color:themeStyle.BLACK}}>{item.name} - {item.age}</Text>
            <Button title="Edit" onPress={() => {
              setName(item.name);
              setAge(item.age.toString());
              setUserId(item.id);
            }} />
            <Button title="Delete" onPress={() => dispatch(deleteUser(item.id))} />
          </View>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    color:themeStyle.BLACK
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

