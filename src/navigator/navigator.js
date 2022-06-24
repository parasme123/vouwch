import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screen/splash/splash';
import Welcome from '../screen/welcome/welcome';
import Login from '../screen/login/login';
import Signup from '../screen/signup/signup';
import BusinessSignup from '../screen/businessSignup/businessSignup';
import Home from '../screen/homescreens/home';
import Bottomtab from './Bottomtab';
import Doctordetails from '../screen/homescreens/doctor/doctordetails';
import Bravocard from '../screen/Bravocard/Bravocard';
import Notification from '../screen/Notification/Notification';
import profile from '../screen/setting/profile';
import account from '../screen/setting/account';
import menu from '../screen/setting/menu';
import addhospital from '../screen/setting/addhospital';
import Searchresult from '../screen/setting/searchresult';
import myprofilecomment from '../screen/setting/myprofilecomment';
import Rate from '../screen/homescreens/review/rate';
import settingprofile from '../screen/setting/settingprofile';
import Editprofile from '../screen/setting/editprofile';
import ForgotPassword from '../screen/Forgotpassword/Forgotpassword';
import OtpPage from '../screen/Forgotpassword/Otppage';
import Hospotalbravocard from '../screen/HospitalBravocard/HospitalBravocard';
import Doctorcard from '../screen/DoctorCard/Doctorcard';
import Resetpassword from '../screen/Forgotpassword/Resetpassword';
import Reply from '../screen/Message/Reply';
import MessageBox from '../common/MessegeBox';
// import { Doctor_Card } from '../screen/DoctorCard/Doctorcard';
const MainStack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="splash" component={Splash} />
        <MainStack.Screen name="welcome" component={Welcome} />
        <MainStack.Screen name="login" component={Login} />
        <MainStack.Screen name="signup" component={Signup} />
        <MainStack.Screen name="business" component={BusinessSignup} />
        {/* <MainStack.Screen name="home" component={Home} /> */}
        <MainStack.Screen name="bottomtab" component={Bottomtab} />
        <MainStack.Screen name="Doctordetails" component={Doctordetails} />
        <MainStack.Screen name="Bravocard" component={Bravocard} />
        <MainStack.Screen name="Notification" component={Notification} />
        <MainStack.Screen name="rate" component={Rate} />
        <MainStack.Screen name="profile" component={settingprofile} />
        <MainStack.Screen name="profilepage" component={profile} />
        <MainStack.Screen name="asscounsetting" component={account} />
        <MainStack.Screen name="menue" component={menu} />
        <MainStack.Screen name="hospital" component={addhospital} />
        <MainStack.Screen name="search" component={Searchresult} />
        <MainStack.Screen name="myprofliecomment" component={myprofilecomment} />
        <MainStack.Screen name="edit" component={Editprofile} />
        <MainStack.Screen name="forgotpassword" component={ForgotPassword} />
        <MainStack.Screen name="otppage" component={OtpPage} />
        <MainStack.Screen name="DoctorCard" component={Doctorcard} />
        <MainStack.Screen
          name="Hospotalbravocard"
          component={Hospotalbravocard}
        />
        <MainStack.Screen name="Confirmpassword" component={Resetpassword} />
        <MainStack.Screen name="Reply" component={Reply} />
        <MainStack.Screen name="Msg" component={MessageBox} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export function handleNavigation(nav) {
  // console.log('====navigation', nav.navigation);
  switch (nav.type) {
    case 'push':
      nav.navigation.navigate(nav.page, nav.passProps);
      break;
    case 'setRoot':
      nav.navigation.reset({ index: 0, routes: [{ name: nav.page }] });
      break;
    case 'pop':
      nav.navigation.goBack();
      break;
    case 'popTo':
      break;
  }
}

export default Navigator;
