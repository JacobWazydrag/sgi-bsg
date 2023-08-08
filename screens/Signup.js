import React, { useState } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;
import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    ButtonText,
    LeftIcon,
    RightIcon,
    StyledButton,
    StyledInputLabel,
    StyledTextInput,
    Colors,
    Line,
    MsgBox,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
    StyledContainer,
} from '../components/styles';

const { brand, darkLight, primary } = Colors;
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Signup = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = Date.parse(event) !== NaN ? event : date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    };

    const showDatePicker = () => {
        setShow(true);
    };
    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageTitle>SGI BSG</PageTitle>
                    <SubTitle>Account Signup</SubTitle>
                    {show && (
                        <DateTimePicker
                            isVisible={show}
                            testID="dateTimePicker"
                            value={date}
                            locale="en_GB"
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onConfirm={onChange}
                            onCancel={onChange}
                        />
                    )}
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            fullName: '',
                            dateOfBirth: '',
                            confirmPassword: '',
                        }}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Full Name"
                                    icon="person"
                                    placeholder="Bob Gajokai"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('fullName')}
                                    onBlur={handleBlur('fullName')}
                                    value={values.fullName}
                                />
                                <MyTextInput
                                    label="Email Address"
                                    icon="mail"
                                    placeholder="test@email.com"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />
                                {/* <MyTextInput
                                label="Date of Birth"
                                icon="calendar"
                                placeholder="YYYY - MM - DD"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('dateOfBirth')}
                                onBlur={handleBlur('dateOfBirth')}
                                value={dob ? dob.toDateString() : ''}
                                isDate={true}
                                editable={false}
                                showDatePicker={showDatePicker}
                            /> */}
                                <MyTextInput
                                    label="Password"
                                    icon="lock"
                                    placeholder="*****************"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MyTextInput
                                    label="Confirm Password"
                                    icon="lock"
                                    placeholder="*****************"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MsgBox>...</MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Login</ButtonText>
                                </StyledButton>
                                <Line />
                                <ExtraView>
                                    <ExtraText>Already have an account already?</ExtraText>
                                    <TextLink onPress={() => navigation.navigate('Login')}>
                                        <TextLinkContent> Login</TextLinkContent>
                                    </TextLink>
                                </ExtraView>
                            </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({ label, icon, isPassword, setHidePassword, hidePassword, isDate, showDatePicker, ...props }) => {
    return (
        <View>
            <TouchableOpacity onPress={showDatePicker}>
                <LeftIcon>
                    <Octicons name={icon} size={30} color={brand} />
                </LeftIcon>
                <StyledInputLabel>{label}</StyledInputLabel>
                {!isDate && <StyledTextInput {...props} />}
                {isDate && (
                    <TouchableOpacity onPress={showDatePicker}>
                        <StyledTextInput {...props} />
                    </TouchableOpacity>
                )}
                {isPassword && (
                    <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                        <Ionicons size={30} color={darkLight} name={hidePassword ? 'md-eye-off' : 'md-eye'} />
                    </RightIcon>
                )}
            </TouchableOpacity>
        </View>
    );
};
export default Signup;
