/* //Logout
const logout = document.getElementById('logout')

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('User is logged out');
    })
}); */

//Get profile data based on userID
const userSearch = document.getElementById("userSearch")

userSearch.addEventListener('click', async (e) => {
    e.preventDefault();
    const userID = document.getElementById("userIdSearch").value;
    const user = db.collection("userProfiles").doc(userID);
    const doc = await user.get();
    if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data()["firstName"]);
      }
    
    const firstName = document.getElementById("firstNameField");
    const lastName = document.getElementById("lastNameField");
    const age = document.getElementById("ageField");
    const residence = document.getElementById("residenceField");

    firstName.innerHTML = doc.data()["firstName"];
    lastName.innerHTML = doc.data()["lastName"];
    age.innerHTML = doc.data()["age"];
    residence.innerHTML = doc.data()["cityOfResidence"];


} );

//Add or change user data based on user ID
const dataInput = document.getElementById("dataInput");

dataInput.addEventListener('click', async (e) => {
    e.preventDefault();
    //console.log(document.getElementById("firstNameInput").value.length !== 0)//
    /* console.log(document.getElementById("firstNameInput").value) */
    const valueObject = {};
    const userID = document.getElementById("userIdInput").value;

    if (document.getElementById("firstNameInput").value.length !== 0) {
        console.log("First name is empty");
        valueObject["firstName"] = document.getElementById("firstNameInput").value;
    };

    if (document.getElementById("lastNameInput").value.length !== 0) {
        console.log("Last name is not empty");
        valueObject["lastName"] = document.getElementById("lastNameInput").value;
    };

    if (document.getElementById("ageInput").value.length !== 0) {
        console.log("Age is not empty");
        valueObject["age"] = document.getElementById("ageInput").value;
    };

    const newData = valueObject;
    const res = await db.collection("userProfiles").doc(userID).set(newData, {merge: true})
})

const user1Data = db.collection("userProfiles").doc("user0001");

const observer = user1Data.onSnapshot( docSnapshot => {
    console.log(`Received doc snaphot: ${docSnapshot["firstName"]}`);
    console.log()
}, err => {
    console.log(`Encountered error: ${err}`);
})

//Show permanent profile based on provided user ID
const userIDPerm = "user0001";
const permFirstName = document.getElementById("firstNameFieldPerm");
const permLastName = document.getElementById("lastNameFieldPerm");
const permAge = document.getElementById("ageFieldPerm");
const residencePerm = document.getElementById("residenceFieldPerm");

async function getUserDataPerm() {   
    const userPerm = db.collection("userProfiles").doc(userIDPerm);
            const doc = await userPerm.get();
            if (!doc.exists) {
                console.log('No such document!');
            } else {
                console.log('Document data:', doc.data()["firstName"]);
            }
            permFirstName.innerHTML = doc.data()["firstName"];
            permLastName.innerHTML = doc.data()["lastName"];
            permAge.innerHTML = doc.data()["age"];
            residencePerm.innerHTML = doc.data()["cityOfResidence"];
};

getUserDataPerm();




//Show permanent profile based on user ID from logged in user