const express = require('express');
const {creatUser, loginUser, findUserInDB} = require("../controllers/usersControllers");
const {protect} = require("../middlewares/auth");

const router = express.Router({mergeParams: true});

router.post('/signIn', creatUser);
router.post('/logIn', loginUser);
router.get('/find-user', protect, findUserInDB);

module.exports = router;