const assert = require('chai').assert
const request = require('supertest')
const app = require('./app')


describe('GET /api/iecho', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/api/iecho?text=hello')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('returns reversedText in body', function(done) {
        request(app)
          .get('/api/iecho?text=hello')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            assert.hasAnyKeys(res.body, ['reversedText'])
            return done();
          });
      });

      it('returns reversed text "olleh"', function(done) {
        request(app)
          .get('/api/iecho?text=hello')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            assert.equal(res.body.reversedText, 'olleh')
            return done();
          });
      });

      it('returns isPalindrome false', function(done) {
        request(app)
          .get('/api/iecho?text=hello')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            assert.equal(res.body.isPalindrome, false)
            return done();
          });
      });

      it('returns isPalindrome true', function(done) {
        request(app)
          .get('/api/iecho?text=hellolleh')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            assert.equal(res.body.isPalindrome, true)
            return done();
          });
      });
      

      it('returns http status 400 if text not sent in query', function(done) {
        request(app)
          .get('/api/iecho')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, done)
      });

      
  });