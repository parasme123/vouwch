import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screen/splash/splash';
import Welcome from '../screen/welcome/welcome';
import Login from '../screen/login/login';
import Signup from '../screen/signup/signup';
import BusinessSignup from '../screen/businessSignup/businessSignup';
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
// import settingprofile from '../screen/setting/settingprofile';
import Editprofile from '../screen/setting/editprofile';
import ForgotPassword from '../screen/Forgotpassword/Forgotpassword';

import Doctorcard from '../screen/DoctorCard/Doctorcard';

import Resetpassword from '../screen/Forgotpassword/Resetpassword';
import Reply from '../screen/Message/Reply';
import MessageBox from '../common/MessegeBox';
import MyWebComponent from '../component/webVview/MyWebComponent';
import FeedbackUserProfile from '../screen/setting/FeedbackUserProfile';
import feedbackpage from '../screen/homescreens/doctor/feedbackpage';
import DetailedBusinessProfile from '../screen/DetailedBusinessProfile';
import NewChat from '../screen/NewChats/NewChat';
import Messeges from '../screen/NewChats/Messeges/Messeges';
import GroupMessage from '../screen/NewChats/GroupMessage/Messeges';
import UserGroup from '../screen/UserGroup/UserGroup';
import UserGroupEdit from '../screen/UserGroupEdit/UserGroup'
import MsgManagement from '../screen/MsgManagement/MsgManagement';
import UserGrpMsg from '../UserGrpMsg/UserGrpMsg';
import DoctorGrpMsg from '../screen/DoctorGrpMsg/DoctorGrpMsg';
import NewGroup from '../screen/NewGroup/NewGroup';
import AddParticipiants from '../screen/AddParticipiants';
import AddSubNewGrp from '../screen/AddSubNewGrp/AddSubNewGrp';
import Hospotalbravocard from '../component/Hospitalcard'
import Hospitalcard from '../component/Hospitalcard';
import HospitalDetail from '../screen/homescreens/doctor/HospitalDetail';
const MainStack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="splash"
        // initialRouteName="myprofliecomment"

        screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="splash" component={Splash} />
        <MainStack.Screen name="welcome" component={Welcome} />
        <MainStack.Screen name="login" component={Login} />
        <MainStack.Screen name="signup" component={Signup} />
        <MainStack.Screen name="business" component={BusinessSignup} />
        {/* <MainStack.Screen name="home" component={Home} /> */}
        <MainStack.Screen name="bottomtab" component={Bottomtab} />
        <MainStack.Screen name="Doctordetails" component={Doctordetails} />
        <MainStack.Screen name="HospitalDetail" component={HospitalDetail} />
        <MainStack.Screen name="Bravocard" component={Bravocard} />
        <MainStack.Screen name="Notification" component={Notification} />
        <MainStack.Screen name="review" component={Rate} />
        {/* <MainStack.Screen name="profile" component={settingprofile} /> */}
        <MainStack.Screen name="profilepage" component={profile} />
        <MainStack.Screen name="asscounsetting" component={account} />
        <MainStack.Screen name="menue" component={menu} />
        <MainStack.Screen name="hospital" component={addhospital} />
        <MainStack.Screen name="search" component={Searchresult} />
        <MainStack.Screen name="myprofliecomment" component={myprofilecomment} />
        <MainStack.Screen name="edit" component={Editprofile} />
        <MainStack.Screen name="forgotpassword" component={ForgotPassword} />
        <MainStack.Screen name="DoctorCard" component={Doctorcard} />
       <MainStack.Screen name='Hospitalcard' component={Hospitalcard} />
        <MainStack.Screen name="Hospotalbravocard" component={Hospotalbravocard} />
        <MainStack.Screen name="Confirmpassword" component={Resetpassword} />
        <MainStack.Screen name="Reply" component={Reply} />
        <MainStack.Screen name="Msg" component={MessageBox} />
        <MainStack.Screen name="webView" component={MyWebComponent} />
        <MainStack.Screen name="FeedbackUserProfile" component={FeedbackUserProfile} />
        <MainStack.Screen name="DetailedBusinessProfile" component={DetailedBusinessProfile} />
        <MainStack.Screen name="NewChat" component={NewChat} />
        <MainStack.Screen name="Messeges" component={Messeges} />
        <MainStack.Screen name="GroupMesseges" component={GroupMessage} />
        <MainStack.Screen name="UserGroup" component={UserGroup} />
        <MainStack.Screen name="UserGroupEdit" component={UserGroupEdit} />
        <MainStack.Screen name="MsgManagement" component={MsgManagement} />
        <MainStack.Screen name="UserGrpMsg" component={UserGrpMsg} />
        <MainStack.Screen name="DoctorGrpMsg" component={DoctorGrpMsg} />
        <MainStack.Screen name="NewGroup" component={NewGroup} />
        <MainStack.Screen name="AddParticipiants" component={AddParticipiants} />
        <MainStack.Screen name="AddSubNewGrp" component={AddSubNewGrp} />
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
