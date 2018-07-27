process.env.NODE_ENV = 'test';

import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import GUID from '../utils/guid';

import app from '../app';

chai.should();

chai.use(chaiHttp);

let newUser = {
   user_id: GUID,
 Name: 'lola',
 Username: 'Adu',
 email: 'lola@yahoo.com',
 password: 'lolaAdu@',

};

 describe('Handles valid endpoints for users login and sign up', () => {
   describe('POST api/v1/auth/signup', () => {
     it('should add a new user to the database', (done) => {
       chai.request(app)
         .post('/api/v1/auth/signup')
         .send(newUser)
         .end((err, res) => {
           expect(res.statusCode).to.equal(201);
           if (err) return done(err);
           done();
         });
     });
   });
 });