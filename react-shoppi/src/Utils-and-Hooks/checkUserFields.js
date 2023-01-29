
export const checkUserFields = (user, setMessageColor, setMessage) => {
    let results;

    const red = 'red-message';

    const {username, email, password} = user;
    // validForm is make sure all fields in form are filled correctly
    const validForm = {
        username: username.length >= 3,
        email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        password: /^\w{6,10}$/.test(password),
    };

    if (!validForm.username) {
        setMessageColor(red);
        setMessage('username must have 3 characters');

        results = false;
    } else if (!validForm.email) {
        setMessageColor(red);
        setMessage('email is incorrect');

        results = false;
    } else if (!validForm.password) {
        setMessageColor(red);
        setMessage('password is incorrect');

        results = false;
    } else {
        results = true;
    }


    return results;
}