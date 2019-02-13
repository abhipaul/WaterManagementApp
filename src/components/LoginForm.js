import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Text,View } from 'react-native';


class LoginForm extends Component {
omEmailChanged(text) {
    //creating action creator in action/index.js
    this.props.emailChanged(text);
}
onPasswordChanged(text) {
    //creating action creator in action/index.js
    this.props.passwordChanged(text);
}

onButtonPress() {

    
    console.log(this.props);
    const { email, passWord } = this.props;
    this.props.loginUser({ email, passWord });
}

renderButton() {
    if(this.props.loading) {
        return <Spinner size="large"></Spinner>
    }

    return (
        <Button onPress={this.onButtonPress.bind(this)}>
            Login
        </Button>
    );
}

renderError(){
    if ( this.props.error ) {
        return (
            <View style={{ backgroundColor: 'white'}}>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
            </View>
        );
    }
}

    render() {
        return (
            <View style={{
                flex: 2,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}>
                <Card>
                    <CardSection>
                        <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.omEmailChanged.bind(this)}
                        value={this.props.email} />
                    </CardSection>
                    <CardSection>
                        <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.passWord} />
                    </CardSection>
                    {this.renderError()}
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles= {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, passWord, error, loading } = auth;
    return {
        email,
        passWord,
        error,
        loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);