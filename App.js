import { Navigation } from 'react-native-navigation';


import Login from './src/Screen/Login';
import MainTabs from './src/Screen/MainTabs';
import MyPalo from './src/Screen/MyPalo';
import Notifications from './src/Screen/Notifications';
import SignUp from './src/Screen/SignUp';
import Stat from './src/Screen/Stat';
import You from './src/Screen/You';

Navigation.registerComponent("com.paloupmobile.Login", () => Login);
Navigation.registerComponent("com.paloupmobile.MainTabs", () => MainTabs);
Navigation.registerComponent("com.paloupmobile.MyPalo", () => MyPalo);
Navigation.registerComponent("com.paloupmobile.Notifications", () => Notifications);
Navigation.registerComponent("com.paloupmobile.SignUp", () => SignUp);
Navigation.registerComponent("com.paloupmobile.Stat", () => Stat);
Navigation.registerComponent("com.paloupmobile.You", () => You);

//Start Up
Navigation.startSingleScreenApp({
  screen: {
    screen:'com.paloupmobile.Login',
    title: 'Login',
    navigatorStyle: { navBarHidden:true,statusBarColor:"#e74c3c"}
   
  }
})