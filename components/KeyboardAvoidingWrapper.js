import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView,
    ScrollView,
} from 'react-native';

const KeyboardAvoidingWrapper = ({ children }) => {
    return Platform.OS === 'ios' ? (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView>{children}</ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    ) : (
        <ScrollView>{children}</ScrollView>
    );
};

export default KeyboardAvoidingWrapper;
