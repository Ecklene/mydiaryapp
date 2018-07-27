
import mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index.js';

let should = chai.should();
chai.use(chaiHttp);

let entries = [];

describe('Entries', () => {
  beforeEach((done) => { 
    entries = []
    done(); 
  });

  /*
  * Test the /GET route
  */
describe('/GET /api/v1/entries', () => {
    it('it should GET all the entries', (done) => {
      chai.request(server)
        .get('/api/v1/entries')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(3);
          done();
        });
    });
  });  
});

describe('/GET /api/v1/entries/:entryId', () => {
  it('it should GET a single entry', (done) => { 
    let entries = {
      id: 1,
      title: 'Travelling, I have been dreaming of travelling for a very long time'  
    }   
    chai.request(server)
      .get('/api/v1/entries/1')
      .send('entries')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        done();
      });
  });
});

/*
  * Test the /POST route
  */
describe('/POST /api/v1/entries', () => {
  it('it should POST to entries', (done) => {
    let entries = {
      title: 'Travelling, I have been dreaming of travelling for a very long time.'  
    }
    chai.request(server)
      .post('/api/v1/entries')
      .send(entries)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        //res.body.length.should.be.eql(3);
        done();
      });
  });
});  

/*
  * Test the /PUT route
  */
describe('/PUT /api/v1/entries/:entryId', () => {
  it('it should PUT to entries', (done) => {
    let entries = {title: "Travelling, I have been dreaming of travelling for a very time."    
    }
    chai.request(server)
      .put('/api/v1/entries/1')
      .send({title: "Travelling, I have been dreaming of travelling for a very time."})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        done();
      });
  });
});  

  /*
  * Test the /DELETE route
  */
describe('/DELETE /api/v1/entries/:entryId', () => {
  it('it should DELETE a single entry', (done) => {
    chai.request(server)
      .delete('/api/v1/entries/4')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        done();
      });
  });
});  
