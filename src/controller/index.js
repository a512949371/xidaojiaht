const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    let user = await this.session('user');
    if(think.isEmpty(user)) {
        return this.redirect('/auth/login');
    } else {
      return this.redirect('/operate/home');
    }
  }
};
