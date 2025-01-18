import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Card from './Component/Card'
import ElevatedCard from './Component/ElevatedCard'
import FancyCard from './Component/FancyCard'
import ActionCard from './Component/ActionCard'

import ContactList from './Component/contactList'










const App = () => {
  return (
    <SafeAreaView >
      <ScrollView>
    <View>
      <Card/>
       <ElevatedCard/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/>
   
         
    
      
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})