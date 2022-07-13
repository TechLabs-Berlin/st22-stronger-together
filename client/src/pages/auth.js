//Signup functionality
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); //by default, page would refresh -> we want to prevent that as we would lose the modal
  //Get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  //Sign up the user
  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred);
    const userCred = cred;
    // close the signup modal & reset form
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

//Login
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //Get user data
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  //log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    console.log("User is logged in");

    //Close login modal & reset form
    const modal = document.getElementById("modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});

//Logout
const logout = document.getElementById("logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("User is logged out");
  });
});

/* //Listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User logged in: ', user);
    } else {
        console.log('User logged out');
    }
}); */
