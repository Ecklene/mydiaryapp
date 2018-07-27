import express from 'express';
import router from 'router';
import expressValidator from 'express-validator';
import bcrypt from 'bcrypt'

const saltRounds = 10;
const app = express();


router.get('/', (req, res) => {
	res.json({
		message: 'welcome';
	})
});

 router.get('/', (req, res){
 	res.json({
 		message: check;
 	})
 });
 
router.get('/register', function(req,res,next){
   res.render('register', {title: 'Registration'});

router.post('/auth/signup', function(req,res,next){
	req.checkBody('name', 'Name field cannot be empty.').notEmpty();
	req.checkBody('name', 'Name must be between  8-15 character long.').len(8, 15);
    req.checkBody('username', 'Username field cannot be empty.').notEmpty();
	req.checkBody('username', 'Username must be between  4-15 character long.').len(4, 15);
    req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
	req.checkBody('email', 'Email must be between  8-80 character long.').len(8, 80);
    req.checkBody('password', 'Password must be between 8-100 character long.').len(8, 100);
	req.checkBody('passsword', "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*)(?=.*[^a-zA-Z0-9]).{8,}$/,"i");

	const errors = req.validationErrors();
	 if(errors){
	 	console.log(`errors: ${JSON.stringify(errors)}`);

	 	res.sender('register', {
	 		title: 'Registration Error',
	 		errors: errors
	 	});
	 }else{
        const name = req.body.name;
	 	const username = req.body.username;
	 	const email = req.body.email;
	 	const password = req.body.password;

	 	const pg = require('../db.js');

        bcrypt.hash(password, saltRound, function(err,hash))
	 	db.query('INSERT INTO users {username, email, password) VALUES (?,?,?,?)', [username, email, password], 
	    function (error, results, fields){
	    	if (error) throw error;

	    	res.render('register', {title: 'Registration Complete'});

	           })
	       }
        });

export default router;
