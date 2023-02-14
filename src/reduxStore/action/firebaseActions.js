import { USERDATA, CHATLIST, ALL_MESSAGE, ALLUSERLIST, GROUPLIST, ALLADDEDUSERLIST, ALLPARTICIPIANTSLIST, SAVEALLCHATMESSAGE } from './firebaseTypes';
import Toast from 'react-native-simple-toast';
import * as URL from './webApiUrl';
import { Constants, AsyncStorageHelper } from "@lib";
import firestore from '@react-native-firebase/firestore';
import { logOut } from './doctorAction';
const usersCollection = firestore().collection('Users');
const messageCollection = firestore().collection('Message');
const groupCollection = firestore().collection('Groups');

export const firebaseRegister = (data, setloaderVisible, PageNavigation) => {
  return async dispatch => {
    setloaderVisible(true);
    data = { ...data, createdAt: new Date(), email: data.email.toLowerCase() }
    usersCollection.add(data).then((response) => {
      if (!response.empty) {
        response.onSnapshot((snapShot) => {
          let userData = { ...snapShot.data(), id: snapShot.id };
          AsyncStorageHelper.setData("firebaseUserData", JSON.stringify(userData));
          dispatch(saveUserData(userData))
        })
      }
      setloaderVisible(false);
      PageNavigation(response)
      Toast.show("Register Successfully", Toast.LONG);
    }).catch((error) => {
      setloaderVisible(false);
      console.log("firebaseRegister", error)
      Toast.show("Something went wrong", Toast.LONG);
    })
  }
};

export const addExternalUser = (data, setloaderVisible, PageNavigation) => {
  return async dispatch => {
    setloaderVisible(true);
    await usersCollection.add(data).then((response) => {
      dispatch(getBussinessAddedUser())
      setloaderVisible(false);
      PageNavigation()
    }).catch((error) => {
      setloaderVisible(false);
      console.log("firebaseRegister", error)
    })
  }
};

export const getUserData = (data, PageNavigation) => {
  return async dispatch => {
    usersCollection.where(firestore.FieldPath.documentId(), "==", data).limit(1).get().then(snapshot => {
      snapshot?.docs?.forEach((doc) => {
        console.log("doc", doc.data(), doc.id);
        PageNavigation({ ...doc.data(), id: doc.id })
      })
    }).catch((error) => {
      // setloaderVisible(false);
      console.log("getUserData", error)
    })
  }
};

export const deleteAddedUser = (data, setloaderVisible, PageNavigation) => {
  return async dispatch => {
    setloaderVisible(true);
    // console.log("data", data)
    await usersCollection.doc(data).delete().then((response) => {
      dispatch(getBussinessAddedUser())
      setloaderVisible(false);
      PageNavigation()
    }).catch((error) => {
      setloaderVisible(false);
      console.log("firebaseRegister", error)
    })
  }
};

export const saveUserData = (data) => {
  return ({
    type: USERDATA,
    payload: data
  })
};

export const firebaseLogin = (data, loginData, type, setloaderVisible, PageNavigation) => {
  return async dispatch => {
    setloaderVisible(true);
    const querySnapshot = usersCollection.where("email", "==", data.email.toLowerCase()).where("password", "==", data.password).where("user_type", "==", type).limit(1);
    querySnapshot.get().then(snapshot => {
      if (snapshot?.docs?.length < 1) {
        dispatch(firebaseRegister({ ...loginData, user_type: loginData.user_type == 1 ? "User" : "Business", ...data }, setloaderVisible, PageNavigation))
      } else {
        snapshot.docs.forEach(documentSnapshot => {
          let userData = { ...documentSnapshot.data(), id: documentSnapshot.id }
          AsyncStorageHelper.setData("firebaseUserData", JSON.stringify(userData));
          dispatch(saveUserData(userData))
        })
        setloaderVisible(false);
        PageNavigation()
      }
      Toast.show("Login Successfully", Toast.LONG);
    }).catch(err => {
      console.log("firebaseLogin", err);
      setloaderVisible(false);
      Toast.show("Invailid credentials", Toast.LONG);
    })
  }
};

export const firebaseLogout = (setloaderVisible, PageNavigation) => {
  return async dispatch => {
    AsyncStorageHelper.removeMultiItemValue(["firebaseUserData"])
    dispatch(logOut())
    setloaderVisible(false);
    PageNavigation()
    Toast.show("Logged Out Successfully", Toast.LONG);
  }
};

export const startChatWithNewUser = (chatWithId, setloaderVisible, callBack) => {
  return async dispatch => {
    setloaderVisible(true);
    let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
    firebaseUserData = JSON.parse(firebaseUserData);
    const querySnapshot = usersCollection.where("friends", "array-contains", chatWithId).where(firestore.FieldPath.documentId(), "==", firebaseUserData.id);
    querySnapshot.get().then(snapshot => {
      // console.log("snapshot", snapshot?.docs)
      if (snapshot?.docs?.length < 1) {
        usersCollection.doc(firebaseUserData.id).update({
          friends: firestore.FieldValue.arrayUnion(chatWithId)
        }).then(() => {
          usersCollection.doc(chatWithId).update({
            friends: firestore.FieldValue.arrayUnion(firebaseUserData.id)
          });
          let apiData = {
            admin: firebaseUserData.id,
            createdAt: new Date(),
            deletedBy: [],
            isGroup: false,
            participiants: [chatWithId, firebaseUserData.id],
            updatedAt: new Date()
          }
          // console.log("createGroup claad by startChatWithNewUser");
          dispatch(createGroup(apiData, setloaderVisible, callBack))
          // callBack()
          // setloaderVisible(false);
        }).catch((error) => {
          setloaderVisible(false);
          console.log("startChatWithNewUser", error)
          Toast.show("Something went wrong", Toast.LONG);
        })
      } else {
        dispatch(messageList(chatWithId, setloaderVisible))
        callBack()
        // setloaderVisible(false)
      }
    })
    // if (empty(querySnapshot)) {
    //   await usersCollection.doc(firebaseUserData.id).update({
    //     friends: firestore.FieldValue.arrayUnion(chatWithId)
    //   }).then(() => {
    //     usersCollection.doc(chatWithId).update({
    //       friends: firestore.FieldValue.arrayUnion(firebaseUserData.id)
    //     });
    //     let apiData = {
    //       admin: firebaseUserData.id,
    //       createdAt: new Date(),
    //       deletedBy: [],
    //       isGroup: false,
    //       participiants: [chatWithId, firebaseUserData.id],
    //       updatedAt: new Date()
    //     }
    //     dispatch(createGroup(apiData, setloaderVisible, callBack))
    //     // callBack()
    //     // setloaderVisible(false);
    //   }).catch((error) => {
    //     setloaderVisible(false);
    //     console.log("firebaseRegister", error)
    //     // Toast.show("Something went wrong");
    //   })
    // } else {
    //   callBack()
    //   setloaderVisible(false)
    // }
  }
}

export const unreadMessages = () => {
  return async dispatch => {
    let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
    if (firebaseUserData) {
      let userData = JSON.parse(firebaseUserData);
      const querySnapshot = groupCollection.where("participiants", "array-contains", userData.id);
      querySnapshot.get().then(snapshot => {
        var userChatList = []
        if (snapshot?.docs?.length > 0) {
          snapshot.docs.forEach(doc => {
            messageCollection.where("group", "==", doc.id).get().then(snapshot1 => {
              snapshot1.docs.forEach(doc1 => {
                if (doc.data().isGroup) {
                  userChatList.push({ ...doc1.data(), id: doc1.id, groupId: doc.id })
                } else {
                  let participiantsID = doc.data().participiants.filter(item => item != userData.id)
                  userChatList.push({ ...doc1.data(), id: doc1.id, userId: participiantsID[0] })
                }
              })
              setTimeout(() => {
                dispatch(saveAllMessageList(userChatList));
              }, 5000);
            })
          })
        } else {
          dispatch(saveAllMessageList(userChatList));
        }
      }).catch(err => {
        console.log('chatList', err);
        Toast.show("Something Went wrong", Toast.LONG);
      });
    }
  }
}

export const saveAllMessageList = (data) => {
  return ({
    type: SAVEALLCHATMESSAGE,
    payload: data
  })
}

export const chatList = () => {
  return async dispatch => {
    let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
    if (firebaseUserData) {
      let userData = JSON.parse(firebaseUserData);
      const querySnapshot = groupCollection.where("participiants", "array-contains", userData.id);
      querySnapshot.get().then(snapshot => {
        var userChatList = []
        if (snapshot?.docs?.length > 0) {
          snapshot.docs.forEach(doc => {
            if (doc.data().isGroup) {
              userChatList.push({ ...doc.data(), id: doc.id })
            } else {
              usersCollection.where("groups", "array-contains", doc.id).where(firestore.FieldPath.documentId(), "!=", userData.id).get().then(snapshot1 => {
                snapshot1.docs.forEach(doc1 => {
                  userChatList.push({ ...doc1.data(), id: doc1.id })
                })
                setTimeout(() => {
                  dispatch(saveUserChatList(userChatList))
                }, 2000);
              })
            }
          })
        } else {
          dispatch(saveUserChatList(userChatList));
        }
      }).catch(err => {
        console.log('chatList', err);
        Toast.show("Something Went wrong", Toast.LONG);
      });
    }
  }
};

export const groupList = () => {
  return async dispatch => {
    // setloaderVisible(true);
    let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
    if (firebaseUserData) {
      let userData = JSON.parse(firebaseUserData);
      const querySnapshot = groupCollection.where("participiants", "array-contains", userData.id).where("isGroup", "==", true);
      querySnapshot.get().then(snapshot => {
        let userGroupList = []
        snapshot.docs.forEach(doc => {
          userGroupList.push({ ...doc.data(), id: doc.id })
        })
        dispatch(saveUserGroupList(userGroupList));
      }).catch(err => {
        console.log('groupList', err);
        Toast.show("Something Went wrong", Toast.LONG);
      });
    }
  }
};

export const saveUserGroupList = (data) => {
  return ({
    type: GROUPLIST,
    payload: data
  })
}

export const saveUserChatList = (data) => {
  return ({
    type: CHATLIST,
    payload: data
  })
}

export const messageList = (chatWithId, setloaderVisible) => {
  return async dispatch => {
    setloaderVisible(true);
    let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
    if (firebaseUserData) {
      let userData = JSON.parse(firebaseUserData);
      // console.log("[userData.id, chatWithId]", [userData.id, chatWithId]);
      const querySnapshot = groupCollection.where("participiants", "array-contains", chatWithId && userData.id).where("isGroup", "==", false);
      querySnapshot.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          // console.log("doc", doc.data());
          if (doc.data().participiants.includes(userData.id) && doc.data().participiants.includes(chatWithId)) {
            messageCollection.where("group", "==", doc.id).limit(1).get().then(snapshotMsg => {
              snapshotMsg.forEach(docMsg => {
                // console.log("snapshotMsg.docs", docMsg.id);
                dispatch(saveMessagesList({ ...docMsg.data(), messageCollectionId: docMsg.id }));
              })
            })
          }
        })
        setloaderVisible(false);
        // dispatch(saveUserChatList(userChatList));
      }).catch(err => {
        console.log('messageList', err);
        Toast.show("Something Went wrong", Toast.LONG);
      });
    }
  }
};

export const groupMessageList = (chatWithId, setloaderVisible) => {
  return async dispatch => {
    setloaderVisible(true);
    messageCollection.where("group", "==", chatWithId).limit(1).get().then(snapshotMsg => {
      snapshotMsg.forEach(docMsg => {
        // console.log("snapshotMsg.docs", docMsg.id);
        dispatch(saveMessagesList({ ...docMsg.data(), messageCollectionId: docMsg.id }));
      })
      setloaderVisible(false);
    }).catch(err => {
      console.log('Error getting documents', err);
      Toast.show("Something Went wrong", Toast.LONG);
    });
  }
};

export const saveMessagesList = (data) => {
  return ({
    type: ALL_MESSAGE,
    payload: data
  })
}

export const addMessage = (data, chatWithId, collectionId, setloaderVisible, isGroup = false) => {
  return async dispatch => {
    setloaderVisible(true)
    await messageCollection.doc(collectionId).update({
      message: firestore.FieldValue.arrayUnion(data)
    }).then(() => {
      if (isGroup) {
        dispatch(groupMessageList(chatWithId, setloaderVisible))
      } else {
        dispatch(messageList(chatWithId, setloaderVisible))
      }
      // callBack()
    }).catch((error) => {
      console.log("addMessage", error);
      Toast.show("Something Went wrong", Toast.LONG);
    });
  }
};

export const forwardMessage = (data, chatWithId, setloaderVisible, isGroup = false) => {
  return async dispatch => {
    setloaderVisible(true);
    let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
    if (firebaseUserData) {
      let userData = JSON.parse(firebaseUserData);
      // console.log("[userData.id, chatWithId]", [userData.id, chatWithId]);
      const querySnapshot = groupCollection.where("participiants", "array-contains", userData.id).where("isGroup", "==", isGroup);
      querySnapshot.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          // console.log("doc", doc.data());
          if (doc.data().participiants.includes(userData.id) && doc.data().participiants.includes(chatWithId)) {
            messageCollection?.where("group", "==", doc.id).limit(1).get().then(snapshotMsg => {
              snapshotMsg.docs.forEach(docMsg => {
                // dispatch(saveMessagesList({ ...docMsg.data(), messageCollectionId: docMsg.id }));
                let messagesList = docMsg.data().message;
                data.messageId = messagesList.length > 0 ? messagesList[messagesList.length - 1].messageId + 1 : 1;
                data.sendBy = userData.id;
                messageCollection.doc(docMsg.id).update({
                  message: firestore.FieldValue.arrayUnion(data)
                }).then(() => {
                  if (isGroup) {
                    dispatch(groupMessageList(chatWithId, setloaderVisible))
                  } else {
                    dispatch(messageList(chatWithId, setloaderVisible))
                  }
                  // callBack()
                }).catch((error) => {
                  console.log("forwardMessage1", error);
                  Toast.show("Something Went wrong", Toast.LONG);
                });
              })
            }).catch(err => {
              console.log('forwardMessage2', err);
              Toast.show("Something Went wrong", Toast.LONG);
            });
          }
        })
        setloaderVisible(false);
        // dispatch(saveUserChatList(userChatList));
      }).catch(err => {
        console.log('forwardMessage3', err);
        Toast.show("Something Went wrong", Toast.LONG);
      });
    }
  }
};

export const deleteMessage = (data, chatWithId, collectionId, setloaderVisible, isGroup = false) => {
  return async dispatch => {
    setloaderVisible(true)
    await messageCollection.doc(collectionId).update({
      message: firestore.FieldValue.arrayRemove(data)
    }).then(() => {
      if (isGroup) {
        dispatch(groupMessageList(chatWithId, setloaderVisible))
      } else {
        dispatch(messageList(chatWithId, setloaderVisible))
      }
      // callBack()
    }).catch((error) => {
      console.log("addMessage", error);
      Toast.show("Something Went wrong", Toast.LONG);
    });
  }
};

export const setReadMsg = (data, collectionId) => {
  return async dispatch => {
    await messageCollection.doc(collectionId).update({
      message: data
    }).then(() => {
      dispatch(unreadMessages())
    })
  }
};

export const allUserList = () => {
  return async dispatch => {
    let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
    usersCollection.onSnapshot(snapshot => {
      let userData = JSON.parse(firebaseUserData);
      let userList = []
      snapshot.forEach(doc => {
        if (userData.id != doc.id) {
          // console.log("userData.id != doc.id", userData.id, doc.id);
          userList.push({ ...doc.data(), id: doc.id })
        }
      })
      dispatch(saveAllUserList(userList));
    })
  }
};

export const saveAllUserList = (data) => {
  return ({
    type: ALLUSERLIST,
    payload: data
  })
}

export const getBussinessAddedUser = () => {
  return async dispatch => {
    let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
    let userData = JSON.parse(firebaseUserData);
    usersCollection.where("addedBy", "==", userData.id).get().then(snapshot => {
      let userList = []
      snapshot.forEach(doc => {
        userList.push({ ...doc.data(), id: doc.id })
      })
      dispatch(saveAddedUserList(userList));
    })
  }
};

export const saveAddedUserList = (data) => {
  return ({
    type: ALLADDEDUSERLIST,
    payload: data
  })
}

export const createGroup = (data, setloaderVisible, callBack) => {
  return async dispatch => {
    // console.log("createGroup called");
    setloaderVisible(true)
    groupCollection.add(data).then((response) => {
      if (!response.empty) {
        response.onSnapshot((snapShot) => {
          let groupData = { ...snapShot.data(), id: snapShot.id };
          data.participiants.forEach(async element => {
            await usersCollection.doc(element).update({
              groups: firestore.FieldValue.arrayUnion(snapShot.id)
            })
          });
          messageCollection.add({ group: snapShot.id, message: [] })
        })
      }
      callBack()
      setloaderVisible(false)
    }).catch((error) => {
      console.log("firebaseRegister", error)
      Toast.show("Something Went wrong", Toast.LONG);
    })
  }
};

export const updateFirebaseProfile = (data, collectionId, setloaderVisible, callBack) => {
  return async dispatch => {
    setloaderVisible(true)
    let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
    let userData = JSON.parse(firebaseUserData);
    usersCollection.doc(collectionId).update(data).then((response) => {
      let newuserData = { ...userData, ...data }
      AsyncStorageHelper.setData("firebaseUserData", JSON.stringify(newuserData));
      callBack()
      setloaderVisible(false)
    }).catch((error) => {
      console.log("firebaseRegister", error)
      Toast.show("Something Went wrong", Toast.LONG);
    })
  }
};

export const getGroupParticipiants = (participiants) => {
  return async dispatch => {
    // setloaderVisible(true)
    const querySnapshot = usersCollection.where(firestore.FieldPath.documentId(), "in", participiants);
    querySnapshot.get().then(snapshot => {
      let participiantsList = []
      snapshot.docs.forEach(doc => {
        participiantsList.push({ ...doc.data(), id: doc.id })
      })
      dispatch(saveParticipiantsList(participiantsList));
    }).catch(err => {
      console.log('getGroupParticipiants', err);
      Toast.show("Something Went wrong", Toast.LONG);
    });
  }
};

export const saveParticipiantsList = (data) => {
  return ({
    type: ALLPARTICIPIANTSLIST,
    payload: data
  })
}

export const removeUserFromGroup = (userId, groupId, participiantsList, callBack) => {
  return async dispatch => {
    // setloaderVisible(true)
    usersCollection.doc(userId).update({
      groups: firestore.FieldValue.arrayRemove(groupId)
    }).then(snapshot => {
      groupCollection.doc(groupId).update({
        participiants: firestore.FieldValue.arrayRemove(userId)
      }).then(data => {
        dispatch(saveParticipiantsList(participiantsList.filter((item) => item.id != userId)));
        dispatch(chatList());
        callBack()
      }).catch(err => {
        callBack()
        Toast.show("Something Went wrong", Toast.LONG);
      });
    }).catch(err => {
      console.log('removeUserFromGroup', err);
      callBack()
      Toast.show("Something Went wrong", Toast.LONG);
    });
  }

}

export const updateGroupProfile = (profile_picture, groupName, groupId, callBack) => {
  return async dispatch => {
    groupCollection.doc(groupId).update({ profile_picture, groupName }).then((response) => {
      // dispatch(chatList());
      callBack()
    }).catch((error) => {
      console.log("firebaseRegister", error)
      Toast.show("Something Went wrong", Toast.LONG);
      callBack()
    })
  }
}

export const clearFirebaseChat = (setloaderVisible, callBack) => {
  return async dispatch => {
    setloaderVisible(true)
    let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
    let userData = JSON.parse(firebaseUserData);
    const querySnapshot = groupCollection.where("participiants", "array-contains", userData.id);
    querySnapshot.get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        messageCollection.where("group", "==", doc.id).limit(1).get().then(snapshotMsg => {
          snapshotMsg.forEach(docMsg => {
            messageCollection.doc(docMsg.id).update({ message: [] }).then(() => {
              callBack();
              setloaderVisible(false)
              Toast.show("Chat Clear Successfully", Toast.LONG);
            }).catch((err) => {
              console.log('clearFirebaseChat', err);
              Toast.show("Something Went wrong", Toast.LONG);
            });
          })
        })
      })
    }).catch(err => {
      console.log('clearFirebaseChat', err);
      Toast.show("Something Went wrong", Toast.LONG);
    });

  }
}

export const deleteFirebaseChat = (setloaderVisible, callBack) => {
  return async dispatch => {
    setloaderVisible(true)
    let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
    let userData = JSON.parse(firebaseUserData);
    await usersCollection.doc(userData.id).update({ groups: [], friends: [] })

    const snapshot = await groupCollection.where("participiants", "array-contains", userData.id).get();
    // querySnapshot.then(snapshot => {
    if (snapshot?.docs?.length > 0) {
      snapshot.docs.forEach(async docMsg => {
        docMsg.data().participiants.map(async element => {
          await usersCollection.doc(element).update({
            groups: firestore.FieldValue.arrayRemove(docMsg.id),
          })
        })
        const dataMsg = await messageCollection.where("group", "==", docMsg.id).get()
        messageCollection.doc(dataMsg.docs[0].id).delete()
        await groupCollection.doc(docMsg.id).delete().then(() => {
          dispatch(chatList())
          // dispatch(groupList())
          setloaderVisible(false)
          callBack();
          Toast.show("Chat Deleted Successfully", Toast.LONG);
        }).catch((err) => {
          setloaderVisible(false)
          console.log('deleteFirebaseChat', err);
          Toast.show("Something Went wrong", Toast.LONG);
        });
        // groupCollection.doc(docMsg.id).update({
        //   participiants: firestore.FieldValue.arrayRemove(userData.id)
        // }).then(() => {
        //   dispatch(chatList())
        //   dispatch(groupList())
        //   setloaderVisible(false)
        //   callBack();
        //   Toast.show("Chat Deleted Successfully", Toast.LONG);
        // }).catch((err) => {
        //   setloaderVisible(false)
        //   console.log('deleteFirebaseChat', err);
        //   Toast.show("Something Went wrong", Toast.LONG);
        // });
      })
    } else {
      dispatch(chatList())
      // dispatch(groupList())
      setloaderVisible(false)
      callBack();
      Toast.show("Chat Deleted Successfully", Toast.LONG);
    }
    // }).catch(err => {
    //   setloaderVisible(false)
    //   console.log('deleteFirebaseChat', err);
    //   Toast.show("Something Went wrong", Toast.LONG);
    // });
    // }).catch((err) => {
    //   setloaderVisible(false)
    //   console.log('deleteFirebaseChat', err);
    //   Toast.show("Something Went wrong", Toast.LONG);
    // });
  }
}

export const addParticipiants = (participiants, groupData, setloaderVisible, callBack) => {
  return async dispatch => {
    setloaderVisible(true)
    participiants.forEach((element) => {
      usersCollection.doc(element.id).update({
        groups: firestore.FieldValue.arrayUnion(groupData.id)
      }).then(() => {
        groupCollection.doc(groupData.id).update({
          participiants: firestore.FieldValue.arrayUnion(element.id)
        })
      })
    })
    dispatch(chatList())
    setloaderVisible(false)
    callBack();
    Toast.show("Participiants Added Successfully", Toast.LONG);
  }
}
