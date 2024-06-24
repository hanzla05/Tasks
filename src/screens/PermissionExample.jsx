import React, { useState } from 'react';
import { View, Button, Image, Alert, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-crop-picker';
import { PERMISSIONS, request, check, RESULTS } from 'react-native-permissions';

const PermissionExample = () => {
  const [imageUri, setImageUri] = useState(null);

  const requestPermission = async () => {
    let permission;
    if (Platform.OS === 'android') {
      permission = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    } else {
      permission = PERMISSIONS.IOS.PHOTO_LIBRARY;
    }

    const result = await check(permission);
    if (result === RESULTS.GRANTED) {
      return true;
    }

    const requestResult = await request(permission);
    return requestResult === RESULTS.GRANTED;
  };

  const pickImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) {
      Alert.alert('Permission denied');
      return;
    }

    launchImageLibrary({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri;
        setImageUri(uri);
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pick an Image" onPress={pickImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />}
    </View>
  );
};

export default PermissionExample;
