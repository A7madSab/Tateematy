import * as firebase from "firebase"

export default class FirebaseApi {
    static signInWithEmailAndPassword = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error.code, error.message)
            })
    }

    static registerWithEmailAndPassword = (name, surName, idNumber, street, city, email, password, phoneNumber) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
                firebase.database().ref('users/' + user.user.uid).set({
                    name, surName, idNumber, street, city, phoneNumber
                }).then(() => {
                    console.log("Inserted")
                }).catch((err) => {
                    console.log("not Inserted error:", err)
                })
            })
            .catch(function (error) {
                return error
            });
    }

    static addChild = (childName, birthday) => {
        firebase.database().ref(this.currentLoggedInUser+"/children").set({
            childName,
            birthday
        }).then(() => {
            console.log("Inserted")
        }).catch((err) => {
            console.log("not Inserted error:", err)
        });
    }

    static currentLoggedInUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user)
                return user
            } else {
                console.log(`No User Is Logged In `)
                return {}
            }
        });
    }

    static currentLoggedInUserId = async () => {
        await firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid)
                return user.uid
            } else {
                console.log(`No User Is Logged In `)
                return null
            }
        });
    }

    static logoutUser = () => {
        firebase.auth().signOut().then(
            console.log("User Logged Out")
        )
    }

    // static writeItem = (userId, itemId, itemName, itemPrice) => {
    //     // console.log(userId, code, itemName, ItemPrice)
    //     firebase.database().ref('items/' + itemId).set({
    //         userId,
    //         itemName,
    //         itemPrice
    //     }).then(() => {
    //         console.log("Inserted")
    //     }).catch((err) => {
    //         console.log("not Inserted error:", err)
    //     });
    // }
}









// (user) => {
//     if (user) {
//         user.updateProfile({
//             name,
//             surName,
//             idNumber,
//             street,
//             city,
//             phoneNumber
//         })
//     }
// }