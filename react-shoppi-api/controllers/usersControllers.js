const User = require('../models/userSchem');
const asyncHandler = require('../middlewares/asyncHandler');

exports.creatUser = asyncHandler(async (req, res) => {
    let user = await User.findOne({email: req.body.email});

    if (!user || user.length === 0) {
        const newUser = await User.create(req.body)
        user = await User.findOne({email: req.body.email})
        const token = user.getJwtToken();

        res.json({
            isSign: true,
            message: 'login successfully',
            username: newUser.username,
            token,
        });
    } else {
        res.json({
            isSign: false,
            username: req.body.username,
            message: 'you are a signed user please login',
        });
    }
});

exports.loginUser = asyncHandler( async (req, res, next) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        res.json({isSign: false, message: 'please provide username a valid mail and password'});
    }

    const user = await User.findOne({email}).select('+password');
    if (!user) {
        res.json({
            isSign: false,
            message: 'not a signed user please sign in first (or check email spelling)'
        });
        return next(new Error('not signed'));
    }

    if (username !== user.username) {
        res.json({
            isSign: false,
            message: 'username is incorrect'
        });
        return next(new Error('incorrect username'));
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        res.json({isSign: false, message: 'password does not fit'});
    }
    const token = user.getJwtToken();
    res.json({
        isSign: true,
        message: 'login successfully',
        username: user.username,
        token,
    });
});

exports.findUserInDB = (asyncHandler(async (req, res, next) => {
    const userId = req.decodeUserId.id;
    const user = await User.findById(userId);

    if (!user) {
        next(new Error('no user found'));
    } else {
        res.json({userLog: true, username: user.username, message: 'login successfully'});
    }
}));


