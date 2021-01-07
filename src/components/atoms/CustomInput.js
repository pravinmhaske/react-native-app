// CustomInput.js
import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    margin: 10,
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 2,
    paddingLeft: 10,
    backgroundColor: "#eeeeee",
    marginVertical: 10,
    minWidth: 300,
    borderRadius: 2,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#002f6c",
  },
  errorText: {
    fontSize: 10,
    color: "red",
     marginLeft: 10,
  },
  errorInput: {
    borderColor: "red",
  },
});

export default CustomInput;
