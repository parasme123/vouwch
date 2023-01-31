import { BackHandler } from 'react-native';

const Imagepath = {
  icon: require('../assect/icon/Logo.svg'),
  logo: require('../assect/icon/icon.png'),
  background: require('../assect/images/Welcome.png'),
  man: require('../assect/icon/man.png'),
  man1: require('../assect/icon/man1.png'),
  doctoricon: require('../assect/icon/doctoricon.png'),
  bg: require('../assect/images/bg.png'),
  google: require('../assect/icon/google.png'),
  user: require('../assect/icon/man.png'),
  lock: require('../assect/icon/lock.png'),
  email: require('../assect/icon/email.png'),
  eye: require('../assect/icon/eye.png'),
  eyehide: require('../assect/icon/eyehide.png'),
  twitter: require('../assect/icon/twitter.png'),
  fb: require('../assect/icon/fb.png'),
  yes: require('../assect/icon/yes.png'),
  check: require('../assect/icon/check.png'),
  business: require('../assect/icon/business.png'),
  doctorbg: require('../assect/images/doctorbg.png'),
  doctor: require('../assect/icon/maleDoctor.png'),
  homebg: require('../assect/images/homebg.png'),
  headerbg: require('../assect/images/headerbg.png'),
  homebg2: require('../assect/images/homebg2.png'),
  navmenu: require('../assect/icon/nav-menu.png'),
  searchbtn: require('../assect/icon/searchbtn.png'),
  profile: require('../assect/icon/profile.png'),
  Notification: require('../assect/icon/Notification.png'),
  Messageicon: require('../assect/icon/Messageicon.png'),
  Share: require('../assect/icon/Share.png'),
  Bravo: require('../assect/icon/Bravo.png'),
  commenticon: require('../assect/icon/commenticon.png'),
  Photo: require('../assect/icon/Photo.png'),
  Video: require('../assect/icon/Video.png'),
  doctors: require('../assect/icon/doctors.png'),
  redstar: require('../assect/icon/redstar.png'),
  yellowstar: require('../assect/icon/yellowstar.png'),
  Followicon: require('../assect/icon/Followicon.png'),
  calender: require('../assect/icon/calender.png'),
  mess: require('../assect/icon/mess.png'),
  dot: require('../assect/icon/dot.png'),
  bluetick: require('../assect/icon/bluetick.png'),
  likeicon: require('../assect/icon/likeicon.png'),
  setting_icon: require('../assect/icon/setting-icon.png'),
  Notfication_icon: require('../assect/icon/Notfication-icon.png'),
  User_Icon: require('../assect/icon/User-icon.png'),
  bottom_plus: require('../assect/icon/plusIcon.png'),
  plus: require('../assect/icon/plus.png'),
  back: require('../assect/icon/back.png'),
  Videoicon: require('../assect/Video-icon.png'),
  Photos: require('../assect/Photo-icon.png'),
  alarm_clock: require('../assect/icon/alarm-clock.png'),
  Edit: require('../assect/icon/Edit.png'),
  camera: require('../assect/icon/camera.png'),
  hospital: require('../assect/icon/hospital.png'),
  down: require('../assect/icon/down.png'),
  send: require('../assect/icon/send.png'),
  follow: require('../assect/icon/follow.png'),
  videocall: require('../assect/icon/videocall.png'),
  voicecall: require('../assect/icon/voicecall.png'),
  Notification22: require('../assect/icon/Notification22.png'),
  Profilesetting: require('../assect/icon/Profilesetting.png'),
  Accountsetting: require('../assect/icon/Accountsetting.png'),
  help: require('../assect/icon/help.png'),
  privacy: require('../assect/icon/privacy.png'),
  Accountsetting: require('../assect/icon/Accountsetting.png'),
  Contact: require('../assect/icon/Contact.png'),
  i: require('../assect/icon/i.png'),
  homeicon: require('../assect/icon/homeicon.png'),
  setting: require('../assect/icon/setting.png'),
  Icons: require('../assect/icon/Icons.png'),
  doctoricon2: require('../assect/icon/doctoricon2.png'),
  crose: require('../assect/icon/crose.png'),
  addbravocard: require('../assect/icon/addbravocard.png'),
  write: require('../assect/icon/write.png'),
  whatshupicon: require('../assect/icon/whatshupicon.png'),
  facebookicon: require('../assect/icon/facebookicon.png'),
  twitericon: require('../assect/icon/twitericon.png'),
  instaicon: require('../assect/icon/instaicon.png'),
  mailicon: require('../assect/icon/mailicon.png'),
  attach: require('../assect/icon/attach.png'),
  Vouwch: require('../assect/icon/Vouwch.png'),
  loading: require('../assect/icon/loading.png'),
  replyIcons: require('../assect/icon/replyIcons.png'),
  forwordIcon: require('../assect/icon/forwordIcon.png'),
  massege: require('../assect/icon/massege.png'),
  following: require('../assect/icon/following.png'),
  forword: require('../assect/icon/forword.png'),
  chat: require('../assect/icon/chat.png'),
  personConnect: require('../assect/icon/add-group.png'),
  serachIcon: require('../assect/icon/serachIcon.jpg'),
  menu: require('../assect/icon/menu.png'),
  Rectangle: require('../assect/icon/blueRectangle.png'),
  menuDevide: require('../assect/icon/menuDevide.png'),
  maan: require('../assect/icon/maan.png'),
  proMam: require('../assect/icon/proMan.jpg'),
  proWoman: require('../assect/icon/proWoman.jpg'),
  googleMan: require('../assect/icon/googleMan.jpg'),
  googleWomen: require('../assect/icon/googleWomen.jpg'),
  editor: require('../assect/icon/editor.png'),
  threeDots: require('../assect/icon/dots.png'),
  cross: require('../assect/icon/cross.png'),
  abdul: require('../assect/icon/abdul.png'),
  badal: require('../assect/icon/badal.png'),
  cadmus: require('../assect/icon/cadmus.png'),
  daamodar: require('../assect/icon/daamodar.png'),
  edgarton: require('../assect/icon/edgarton.png'),
  fadil: require('../assect/icon/fadil.png'),
  gannon: require('../assect/icon/gannon.png'),
  previous: require('../assect/icon/previous.png'),
  circle: require('../assect/icon/circle.png'),
  read: require('../assect/icon/read.png'),
  curvedBack: require('../assect/icon/curvedBack.png'),
  forworrdd: require('../assect/icon/forworrdd.png'),
  coppyy: require('../assect/icon/coppyy.png'),
  bin: require('../assect/icon/bin.png'),
  info: require('../assect/icon/info.png'),
  notify: require('../assect/icon/notify.png'),
  group: require('../assect/icon/group.jpg'),
  editing: require('../assect/icon/editing.png'),
  search: require('../assect/icon/search.png'),
  invite: require('../assect/icon/invite.png'),
  circleRight: require('../assect/icon/correct.png'),
  redCircle: require('../assect/icon/redCircle.png'),
  RecycleBin: require('../assect/icon/RecycleBin.png'),
  clickcamera: require('../assect/icon/clickcamera.png'),
  chain: require('../assect/icon/chain.png'),
  gallery: require('../assect/icon/gallery.png'),
  smile: require('../assect/icon/smile.png'),
  horizontalDots: require('../assect/icon/horizontalDots.png'),
  magnifier: require('../assect/icon/magnifier.png'),
  rightarrow: require('../assect/icon/rightarrow.png'),
  wallclock: require('../assect/icon/wallclock.png'),
  radiobutton: require('../assect/icon/radiobutton.png'),
  picStore: require('../assect/icon/picStore.png'),
  right:require('../assect/icon/right.png'),
  multi:require('../assect/icon/multi.png'),
  sendImg:require('../assect/send-msg.png')
}

export default Imagepath;