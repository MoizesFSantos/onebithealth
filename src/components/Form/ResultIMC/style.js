import  {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  resultImc:{
    flex:1,
    marginTop:15,
    paddingTop:60,
    borderRadius:50,
    alignItems:"center",
    width:"100%",
    
  },
  numberImc:{
    fontSize:48,
    color:"#ff0043",
    fontWeight:"bold",
  },
  information:{
    fontSize:18,
    color:"#ff0043",
    fontWeight:"bold",
  }, 
  categoryIMC:{
    fontSize:24,
    color:"#ff0043",
    fontWeight:"bold",
  },
  boxSharebutton:{
    width:"100%",
    alignItems:"center",
    marginBottom:10,
  },
  shared:{
    backgroundColor:"#ff0043",
    borderRadius: 50,
    paddingTop:5,
    paddingBottom:5,
  },
  sharedText:{
    color:"#fff",
    fontWeight:"bold",
    paddingHorizontal:30,
  }
});

export default styles;