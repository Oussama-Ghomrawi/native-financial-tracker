import { View, Text } from 'react-native'
import React from 'react'
import SettingsCard from '../../components/SettingsCard33'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
export default function SettingsScreen() {
  return (
    <View >
        <Text>
        <SimpleLineIcons name="user"/>   User</Text>
            <SettingsCard/>
            <SettingsCard/>
            <SettingsCard/>
        </View>
  )
}