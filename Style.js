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
    height: 55,
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
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 10,
  },
  buttonIcon:{
    paddingRight: 15,
  },
  tabsContainer:{
    flexDirection: 'row',
    //paddingTop: 30,
    backgroundColor: '#4A7C88',
    height:60,
  },
  tab:{
    flex: 1,
    paddingVertical: 15,
  },
  tabIcon:{
    color: 'white',
  },
  tabIconActive:{
    color: 'white',
  },
  contentContainer:{
    flex:1,
  },
});

export default styles;