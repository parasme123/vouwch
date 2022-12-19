import { APPMODE } from './types';
export const baseUrl = APPMODE == "LIVE" ? 'https://vouwch.com/test/api/' : 'https://apponedemo.top/vouwch/api/';
export const imgBaseUrl = APPMODE == "LIVE" ? 'https://vouwch.com/test/' : 'https://apponedemo.top/vouwch/';


const liveUrl = 'https://healthytok.com/vouwch/api/';
const testUrl = 'https://vouwch.com/test/api/';
const imageLiveUrl = 'https://healthytok.com/vouwch/';
const imageTestUrl = 'https://vouwch.com/test/';

// export const baseUrl = APPMODE == "LIVE" ? liveUrl : testUrl;
// export const imgBaseUrl = APPMODE == "LIVE" ? imageLiveUrl : imageTestUrl;


export const WebBaseUrl = 'https://vouwch.com/test/'
export const aboutUsUrl = "about-us";
export const contactUsUrl = "contact-us";
export const HelpSupportUrl = "help-support";
export const PrivacyPolicyUrl = "privacy-policy";
export const TermandConditionUrl = "termd-&-condition";


export const getFollowData = 'getfollow';
export const getAllCountry = "get-country";
export const getStateAndCity = "get-state-city";
export const getAllDoctors = 'all-doctor-list';
export const getMessageAndComment = "business-msg-commant";
export const postDoctorSearch = 'get-doctors';
export const getHomeData = 'get-home-data';
export const getAllBravoCard = "get-cards";
export const postFollow = "follow";
export const getPersonalLogin = "login";
export const getLoginBusiness = "Bussiness-login";
export const getRegistor = "register";
export const getCategoury = "get-categories";
export const postForgotapi = "check-user";
export const ResetPassword = "reset-password";
export const accountsetting = "set-doctor-account";
export const postotp = "confirm-otp";
export const addDoctor = "add-doctor";
export const DocProfile = "set-doctor-profile";
export const commetApi = "add-comment";
export const messageApi = "add-msg";
export const doctorDetails = "doctor-detail";
export const bravoApi = "add-bravo-card";
export const addReview = "add-review";
export const doctorlist = "hospital-doctor-list";
export const servicesList = "get-services";
export const getprofileuRL = "get-profile";
export const messageReply = "add-msg-reply";
export const commentReply = "add-comment-reply";
export const notification = "notification";
export const userLogout = "user-logout";
// export const messageReply = "add-msg-reply";
// export const commentReply = "add-comment-reply";
// export const servicesList = "get-services";
// export const getprofileuRL = "get-profile";
// export const messageReply = "add-msg-reply";
// export const commentReply = "add-comment-reply";
// export const servicesList = "get-services";
// export const getprofileuRL = "get-profile";
// export const messageReply = "add-msg-reply";
// export const commentReply = "add-comment-reply";
