const auth = firebase.auth();

// sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    ///get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // signup the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        const signupModal = document.querySelector('#modal-signup');
        signupModal.classList.remove('open');
        signupForm.reset();
    });
});

// logout user

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        alert("User Logout Sussessfully");
    });
});