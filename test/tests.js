const supertest = require('supertest');
const app = require('../index');
const chai = require('chai');
const { assert } = require('chai')

chai.should();
//const api = supertest(server);

describe('GET method', () => {
    it('should return 200', (done) => {
        supertest(app).get('/')
            .expect(200)
            .end(function(err, res){
                if (err) done(err);
                done();
            });
    });
})

describe('api GET method', () => {
    it('should return 200', (done) => {
        supertest(app).get('/api/fruits')
            .expect(200)
            .end(function(err, res){
                if (err) done(err);
                done();
            });
    });
})

describe('POST then PUT then DELETE', () => {
    var f_id = 0;
    it('should return 200 and correct JSON reply', (done) => {
        supertest(app).post('/api/fruits')
            .send({name:'apple',color:'red',taste:'sweet'})
            .expect(200)
            .end(function(err, res){
                if (err) done(err);
                try {
                    const reply = JSON.parse(res.text);
                    f_id = reply.data._id;
                    reply.message.should.equal('New fruit created!');
                    done();
                } catch(e) {
                    done(e);
                }
            });
    });
    it('should return 200 and update entry (PUT)', (done) => {
        supertest(app).put('/api/fruits/' + f_id)
            .send({name:'lemon',color:'yellow',taste:'sour'})
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                try {
                    const reply = JSON.parse(res.text);
                    reply.message.should.equal('fruit info updated');
                    done();
                }catch (e) {
                    done(e);
                }
            });

    });
    it('should return 200 and DELETE entry', (done) => {
        supertest(app).delete('/api/fruits/' + f_id)
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                try {
                    const reply = JSON.parse(res.text);
                    reply.message.should.equal('fruit deleted');
                    done();
                }catch (e) {
                    done(e);
                }
            });

    });
})


