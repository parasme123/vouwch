const Constants = {
  AppName: "Doctor",
  Base_Url: "https://apponedemo.top/vouwch/",
  Image_Url: "https://apponedemo.top/vouwch/",
  google_place_api_key: "",

  //Methods Apis
  POST: "POST",
  GET: "GET",
  POST_UPLOAD: "POST_UPLOAD",
  TRUE: "true",
  FALSE: "false",
  DeviceType: Platform.OS == "android" ? "Android" : "IOS",
  DeviceToken: "123456",
  USER_DATA: "user_data",
  Current_Address: "currentAddress",
  stripe_customer_id: "stripe_customer_id",
  TOKEN: "token",
  Success: true,
  success: 'true',
  GUEST_USER: "guest_user",




  //Main Message Api
  SorryMessageError: "Sorry, something went wrong.",
  InternetError: "You're offline \n Please check internet connection.",
  Currentpassword: "Enter current password.",
  current_passwordChar: "Current password should be minimum 8 characters.",


};
export default Constants;
