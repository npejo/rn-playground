import React from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TabBarIOS,
  View,
  Keyboard
} from 'react-native'

import Home from './Home'
import History from './History'
import Calendar from './Calendar'

const screens = {
  'home': {
    icon: 'featured',
    render: Home
  },
  'calendar': {
    icon: 'downloads',
    render: Calendar
  },
  'history': {
    icon: 'history',
    render: History
  }
}

export default class Root extends React.Component {
  constructor (props) {
    super(props)
    const today = (new Date()).toLocaleDateString('de-DE')
    this.state = {
      currentScreen: 'home',
      currentDate: today,
      records: {
        [today]: ['a', 'b', 'c']
      }
    }

    this.renderHome = this.renderHome.bind(this)
    this.renderHistory = this.renderHistory.bind(this)
    this.renderCalendar = this.renderCalendar.bind(this)
    this.onChangeRecord = this.onChangeRecord.bind(this)
  }

  renderHome () {
    const todaysRecords = this.state.records[this.state.currentDate] || []

    return <TabBarIOS.Item
      style={styles.content}
      key='home '
      onPress={this.onPressTab.bind(this, 'home')}
      selected={this.state.currentScreen === 'home'}
      systemIcon='featured'
      title='Home'>
      <Home
        records={todaysRecords}
        currentDate={this.state.currentDate}
        onChangeRecord={this.onChangeRecord}
      />
    </TabBarIOS.Item>
  }

  renderHistory () {
    return <TabBarIOS.Item
      style={styles.content}
      key='history'
      onPress={this.onPressTab.bind(this, 'history')}
      selected={this.state.currentScreen === 'history'}
      systemIcon='history'
      title='History'>
      <History />
    </TabBarIOS.Item>
  }

  renderCalendar () {
    return <TabBarIOS.Item
      style={styles.content}
      key='calendar'
      onPress={this.onPressTab.bind(this, 'calendar')}
      selected={this.state.currentScreen === 'calendar'}
      systemIcon='downloads'
      title='Calendar'>
      <Calendar />
    </TabBarIOS.Item>
  }

  onPressTab (screenName) {
    this.setState(() => ({currentScreen: screenName}))
  }

  onChangeRecord (updatedRecords, date) {
    this.setState((state) => ({
      ...state,
      records: {
        [date]: updatedRecords
      }
    }))
  }

  render() {
    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TabBarIOS style={styles.tabs}>
          {this.renderHome()}
          {this.renderCalendar()}
          {this.renderHistory()}
        </TabBarIOS>
      </View>
    </TouchableWithoutFeedback>
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
