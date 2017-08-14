import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Root from './src/components/Root'

function renderLoading () {
  return <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
}

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    setTimeout(() => (this.setState({ isLoading: false })), 500)
  }

  render() {
    return this.state.isLoading ? renderLoading() : <Root />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
