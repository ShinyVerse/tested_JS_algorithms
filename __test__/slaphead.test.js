const SlapHead = require('../lib/slaphead');

describe('slapHead', function() {
  var slapHead;

  beforeEach(function() {
    slapHead = new SlapHead();
  })

  it('counts hairs', function() {
    expect(slapHead.hairCount('/--------')).toBe(1);
  })

  it('returns head state', function() {
    expect(slapHead.headState(0)).toBe('Clean');
    expect(slapHead.headState(1)).toBe('Unicorn');
    expect(slapHead.headState(4)).toBe('Careless');
    expect(slapHead.headState(60)).toBe('Hobo');
  })

  it('should shave them an insult them', function() {
    expect(slapHead.shaveAndInsult('/---------')).toEqual(['----------', 'Unicorn!']);
  })

});
