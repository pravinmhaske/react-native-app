import * as yup from "yup";

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
} from "react-native";
import { Field, Formik } from "formik";
import React, { createRef, useState } from "react";

import CustomInput from "./../../components/atoms/CustomInput";
import Loader from "./../../components/atoms/Loader";
import ScreenContainer from './../wrapper'

// import AsyncStorage from '@react-native-community/async-storage';

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      // .label("Email")
      // .email("Enter a valid email")
      // .required("Please enter a registered email"),
      ,
    password: yup
      .string()
      // .label("Password")
      // .required("required")
      // .matches(4, "Password must have at least 4 characters "),
  });

  const goToSignup = () => navigation.push("Register");

  const handleSubmitPress = () => {
    // setErrortext('');

    setLoading(true);
    let dataToSend = { email: userEmail, password: userPassword };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      body: formBody,
      headers: {
        //Header Defination
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === "success") {
          //   AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace("DrawerNavigationRoutes");
        } else {
          setErrortext(responseJson.msg);
          console.log("Please check your email id or password");
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  const fetchUsers =  () => {

const query = `
  userMany {
    name
  }
`;
// try {
   fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({query}),
    })
      .then((response) => { return response.json() } ) 
     .catch((error) => alert("fetch error:", error))
     .then((response) => {
       alert(response)
     })
//     // .then((res) => res.json())
//       .then((res) => alert("res =>",res))
//       .catch(function(error) {
// alert('There has been a problem with your fetch operation: ' + error.message);
//  // ADD THIS THROW error
//   throw error;
// });

    // alert("res r  =>",res);
  
// } catch (error) {
//   alert("error r  =>",error);
// }

    
      
  };

  return (
    <ScreenContainer style={styles.container}>
    {/* <View style={styles.container}> */}
      <Loader loading={loading} />
      <KeyboardAvoidingView enabled>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
            fetchUsers();
            // handleSubmitPress();
          }}
        >
          {({ handleSubmit }) => (
            <>
              {/* {
              Object.entries({email: '', password: ''}).map(ele =>{
                return (<Field
                component={CustomInput}
                name={ele}
                placeholder="email"
              />)
              })
            } */}
              <Field component={CustomInput} name="email" placeholder="email" />
              <Field
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
          style={styles.registerTextStyle}
          title="Don't have an account? Sign Up"
          onPress={goToSignup}
          titleStyle={{
            color: "#F57C00",
          }}
          type="clear"
        />
      </KeyboardAvoidingView>
    {/* </View> */}
    </ScreenContainer>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 300,
    backgroundColor: "#4f83cc",
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
  registerTextStyle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
});
