import Constants from './Constants';
export default class CommonApiMethods {
  static getUserImageUrl(url) {
    return Constants.Image_Url + url;
  }
  static BaseUrl(url) {
    return Constants.Base_Url + url;
  }
}
