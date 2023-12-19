import React, { useState } from 'react'
import { FlatList, TextInput } from 'react-native'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'

const App = () => {

  const [product, setproduct] = useState('');
  const [myProducts, setMyProducts] = useState([])

  const inputHandler = (val) => {
    setproduct(val)
  }

  const submitHandler = () => {
    const idString = Date.now().toString();
    setMyProducts(currentMyProducts => [{key: idString, name: product}, ...currentMyProducts])
    setproduct('')
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Nouveau produit'
          onChangeText={inputHandler}
          value={product}
        />
        <Button
          title='Valider'
          onPress={submitHandler}
        />
      </View>

      <FlatList 
        data={myProducts}
        renderItem={({item}) => <Text
          style={styles.element}
          >
            {item.name}
            </Text> }
      />
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
  inputContainer: {
    flexDirection: "row",
    gap:5,
    marginBottom: 15,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    flexGrow: 1,
  },
  items: {
    marginTop: 10,
    },
  element: {
    backgroundColor: "#ffb6c1",
    padding:20,
    fontSize: 17,
    marginVertical: 6
    
  }
})