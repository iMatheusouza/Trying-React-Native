import React, { Component }  from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

class Title extends Component {
  static navigationOptions = {
    title: 'Title Page' 
  }
  render(){
    return(
     <ScrollView>
       
          <ScrollView horizontal> 
              <View style={styles.cointainerBlue}>
                <Image
                  style={styles.image}
                  source={{uri:'http://www.reactnativeexpress.com/static/logo.png'}}
                />
              </View>
              <View style={styles.cointainerBlue}>
                  <Image
                    style={styles.image}
                    source={{uri:'http://www.reactnativeexpress.com/static/logo.png'}}
                  />
              </View >
              <View style={styles.cointainerBlue}>
                  <Image
                    style={styles.image}
                    source={{uri:'http://www.reactnativeexpress.com/static/logo.png'}}
                  />
              </View>
          </ScrollView>
          <ScrollView>
            <View style={styles.cointainerCoral}>
              <Image
                style={styles.image}
                source={{uri:'http://www.reactnativeexpress.com/static/logo.png'}}
              />
            </View>
          <ScrollView horizontal>
              <View style={styles.cointainerYellow}>
                  <Image
                    style={styles.image}
                    source={{uri:'http://www.reactnativeexpress.com/static/logo.png'}}
                  />
              </View >
              <View style={styles.cointainerYellow}>
                  <Image
                    style={styles.image}
                    source={{uri:'http://www.reactnativeexpress.com/static/logo.png'}}
                  />
              </View >
              <View style={styles.cointainerYellow}>
                  <Image
                    style={styles.image}
                    source={{uri:'http://www.reactnativeexpress.com/static/logo.png'}}
                  />
              </View >
          </ScrollView>
            <View style={styles.cointainerCoral}>
                <Image
                  style={styles.image}
                  source={{uri:'http://www.reactnativeexpress.com/static/logo.png'}}
                />
            </View>
    
          </ScrollView>
       
     </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  cointainerYellow: {
    marginHorizontal: 5,
    marginTop: 5,
    height: 400,
    width: 400,
    backgroundColor: 'yellow',
    borderColor: 'steelblue',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 20,
  },
  cointainerCoral: {
    marginHorizontal: 5,
    marginVertical: 24,
    height: 400,
    width: 400,
    backgroundColor: 'coral',
    borderColor: 'steelblue',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 20,
  },
  cointainerBlue: {
    marginHorizontal: 5,
    height: 400,
    width: 400,
    backgroundColor: 'skyblue',
    borderColor: 'steelblue',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 20,
  },
  image: {
    height: 400,
    width: 400,
  }
})
export default Title