import React from 'react'
import { StyleSheet, TextInput, KeyboardAvoidingView, Keyboard, Text, View } from 'react-native'

export default class Home extends React.Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.renderField = this.renderField.bind(this)
  }

  handleChange (index) {
    return (text) => {
      let updatedRecords = [...this.props.records]
      updatedRecords[index] = text
      this.props.onChangeRecord(updatedRecords, this.props.currentDate)
    }
  }

  renderField (index, value) {
    return <TextInput
      value={value}
      style={styles.field}
      onChangeText={this.handleChange(index)}
      onSubmitEditing={Keyboard.dismiss}
    />
  }

  render () {
    return <KeyboardAvoidingView behavior='padding' style={styles.root}>
      <View>
        <Text style={styles.title}>Date</Text>
        {this.renderField(0, this.props.records[0])}
        {this.renderField(1, this.props.records[1])}
        {this.renderField(2, this.props.records[2])}
      </View>
    </KeyboardAvoidingView>
  }
}

const styles = StyleSheet.create({
  root: {flex: 1, alignSelf: 'stretch', justifyContent: 'center', backgroundColor: 'steelblue'},
  title: {
    textAlign: 'center',
    fontSize: 18
  },
  field: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 5,
    textAlign: 'center',
    margin: 10
  }
})
