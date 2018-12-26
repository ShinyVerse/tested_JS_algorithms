var SlapHead = function() {};

SlapHead.prototype.hairCount = function (string) {
  let head = string.split('');
  return head.filter(hair => hair == '/').length;
};

SlapHead.prototype.headState = function (num) {
  let lessHair = ['Clean', 'Unicorn', 'Homer'];
  return (num <= 2) ? lessHair[num] : (num > 5) ? 'Hobo' : 'Careless';
};

SlapHead.prototype.shaveAndInsult = function (string) {
  let insult = this.headState(this.hairCount(string));
  let shaven = string.replace(/\//g, '-')
  return [shaven, insult + "!"];
};

module.exports = SlapHead;
