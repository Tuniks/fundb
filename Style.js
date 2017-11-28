import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    borderTopWidth: 0,
    borderTopColor: 'black', // StatusBar color
    backgroundColor: '#4A7C88',
    height: 65,
  },
  card:{
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal:0,
    width: width * .925,
  },
  buttonIconRow:{
    width: '100%',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
  },
  buttonIcon:{
    paddingRight: 15,
  },
  tabsContainer:{
    flexDirection: 'row',
    paddingTop: 30,
    backgroundColor: '#4A7C88',
  },
  tab:{
    flex: 1,
    paddingVertical: 15,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab:{
    borderBottomColor:'white',
  },
  tabText:{
    color: 'white',
    textAlign: 'center'
  }
});

export default styles;