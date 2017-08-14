import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function renderLoading () {
  return <View>
    <Text>Loading...</Text>
  </View>
}

function renderContent () {
  return <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
  </View>
}
export default class Root extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    setTimeout(() => (this.setState({ isLoading: false })), 2000)
  }

  render() {
    return this.state.isLoading ? renderLoading() : renderContent()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
