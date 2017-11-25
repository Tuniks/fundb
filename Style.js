import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    borderTopWidth: 24,
    borderTopColor: 'black', // StatusBar color
    backgroundColor: '#1c65af',
    height: 80,
  },
  card:{
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: this.marginLeft,
    width: width * .8,
  },
  buttonIconRow:{
    width: '100%',
    flexDirection: 'row',
    paddingTop: 10,
  },
  buttonIcon:{
    paddingRight: 15,
  }
});

export default styles;