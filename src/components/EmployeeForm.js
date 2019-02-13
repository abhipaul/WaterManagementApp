import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {
        return (
        <View>
            <CardSection>
                        <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => {
                            this.props.employeeUpdate({prop: 'name', value: text})
                        }} />
            </CardSection>
                    <CardSection>
                        <Input
                            label="Phone"
                            placeholder="555-555-555"
                            value={this.props.phone} 
                            onChangeText={value => {
                                this.props.employeeUpdate({prop: 'phone', value})
                            }}
                        />
                    </CardSection>
                    <CardSection style={{ flexDirection: 'column' }}>
                        <Text style={styles.pickerTextStyle}>Shift</Text>
                        <Picker
                        
                        selectedValue={this.props.shift}
                        onValueChange={day =>  this.props.employeeUpdate({ prop: 'shift', value: day })}
                        >
                            <Picker.Input label="Monday" value="Monday" />
                            <Picker.Input label="Tuesday" value="Tuesday" />
                            <Picker.Input label="Wednesday" value="Wednesday" />
                            <Picker.Input label="Thursday" value="Thursday" />
                            <Picker.Input label="Friday" value="Friday" />
                            <Picker.Input label="Saturday" value="Saturday" />
                            <Picker.Input label="Sunday" value="Sunday" />
                        </Picker>
                    </CardSection>
                </View>
            )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps= (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);