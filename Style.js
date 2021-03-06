import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF6',
  },
	homeCategoryTitle: {
		fontSize: 25,
		textAlign:"left",
		marginTop: 10,
		marginHorizontal: 10,
		color: '#3f3f3f',
		// fontFamily: 'Roboto'
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
		marginHorizontal:10,
		width: width * .5,
  },
  buttonIconRow:{
		width: '100%',
		height: 20,
    alignContent: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
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