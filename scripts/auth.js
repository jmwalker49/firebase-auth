// sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // signup user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    } );
});


// logout method

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault;
    auth.signOut().then(() => {
        console.log("user has logged out");
    });
});