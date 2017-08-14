import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TabBarIOS
} from 'react-native';

const screens = {
  'home': {
    icon: 'featured',
    content: 'Home'
  },
  'calendar': {
    icon: 'downloads',
    content: 'Calendar'
  },
  'history': {
    icon: 'history',
    content: 'History'
  },
  'settings': {
    icon: 'more',
    content: 'Settings'
  }
}
export default class Root extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentScreen: 'home'
    }
  }

  renderScreen (name) {
    const isSelected = this.state.currentScreen === name
    return <TabBarIOS.Item
      style={styles.content}
      key={name}
      onPress={this.onPressTab.bind(this, name)}
      selected={isSelected}
      systemIcon={screens[name].icon}
      title={name}>
      <Text>{screens[name].content}</Text>
    </TabBarIOS.Item>
  }

  onPressTab (screenName) {
    this.setState(() => ({currentScreen: screenName}))
  }

  render() {
    return <View style={styles.container}>
      <TabBarIOS style={styles.tabs}>
        {Object.keys(screens).map((name) => {
          return this.renderScreen(name)
        })}
      </TabBarIOS>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
