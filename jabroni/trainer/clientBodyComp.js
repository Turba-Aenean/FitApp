import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Dimensions, AsyncStorage, Image } from 'react-native'
import NavClient from './rosterClientNav.js'

const { width, height } = Dimensions.get('window');



  // async componentDidMount() {
  //   await AsyncStorage.setItem('key' : 'I like to save it.')
  //   //JSON stringify the data into storage and JSON parse it out, THIS IS SO AMAZING
  // }

class ClientBodyComp extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      client: '',
    }
    this.reset = this.reset.bind(this)
  }


  async componentDidMount() {
    this.props.nav.cleanUp()
    let name = await AsyncStorage.getItem('@FitApp:SelectedClient')
    console.log('what is name Jon???', name)
    this.setState({
      client: JSON.parse(name).name,
    })
  }

  async componentWillReceiveProps(nextProps){
    let name = await AsyncStorage.getItem('@FitApp:SelectedClient')
    if(name){
      this.setState({
        client: JSON.parse(name).name,
      })
    }
  }

  componentWillUnmount() {
    this.props.nav.cleanUp()
  }

  reset(){
    this.setState({
      client: '',
      loaded: false
    })
  }

  render() {
    return (
      <View style={{flexDirection:'column', width:width, height:height, backgroundColor: 'white'}}>  
      <View style={{flex:1}}>
      </View>  
        <View style={{flex: 2}}>
          <Text style={{fontSize: 30, marginBottom: 50, textAlign:'center'}}>You are looking at {this.state.client} client body composition</Text>
        </View>
        <NavClient nav={this.props.nav} reset={this.reset} index={0}/>
      </View>
    )

  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: width,
    height: height,
    backgroundColor: 'white'
  },

  nav: {
    position: 'absolute',
    bottom:0,
  }
})

export default ClientBodyComp