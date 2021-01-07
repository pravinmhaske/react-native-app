import * as yup from 'yup';

import {
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Field, Formik} from 'formik';
import React, {createRef, useState} from 'react';

import CustomInput from './../../components/atoms/CustomInput';
import Loader from './../../components/atoms/Loader';

// import AsyncStorage from '@react-native-community/async-storage';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const validationSchema = yup.object().shape({
  email: yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: yup.string()
    .label('Password')
    .required('required')
    .matches(4, 'Password must have at least 4 characters ')
})


  const goToSignup = () => navigation.navigate('Register');

  const handleSubmitPress = () => {
    // setErrortext('');
  
    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          //   AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
    <Loader loading={loading} />
      <KeyboardAvoidingView enabled>
        <Formik
          initialValues={{email: '', password: ''}}
           validationSchema={validationSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
            // handleSubmitPress();
          }}>
          {({handleSubmit}) => (
            <>
              <Field
                style={styles.inputBox}
                component={CustomInput}
                name="email"
                placeholder="email"
              />
              <Field
                style={styles.inputBox}
                component={CustomInput}
                name="password"
                placeholder="password"
                secureTextEntry
              />

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={handleSubmit}>
                  Login
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>

        <Button
          title="Don't have an account? Sign Up"
          onPress={goToSignup}
          titleStyle={{
            color: '#F57C00',
          }}
          type="clear"
        />
      </KeyboardAvoidingView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
});
