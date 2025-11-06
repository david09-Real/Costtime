import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { red } from 'react-native-reanimated/lib/typescript/Colors';
import React, { useState } from 'react';



export default function TabOneScreen() {
  return (
    <view  style={styles.total}>
<LinearGradient
  colors={['#E65729','#000000', '#343434ff']}

locations={[0, 0.3, 1]}

style = {styles.linear}
> 
<Text style={styles.textotitulo}>
Bem Vindo de volta!
</Text>


<Text style={styles.textonormal}>
Preencha os seus dados ou continue com as redes sociais

</Text>

</LinearGradient>









    </view>
  );
}

const styles = StyleSheet.create({
linear: {

height: '100%',
width: '100%',

},
total: {
flex: 1

},
textotitulo:{
fontSize: 25,
fontFamily: 'Roboto',
color: 'white',
fontWeight: 'bold'


},
textonormal:{
color: 'white',
fontSize: 16,
fontFamily: 'Roboto'

}
});
