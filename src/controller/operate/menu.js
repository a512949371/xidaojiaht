const Base = require('./base.js');
const menu = think.service('menu');

module.exports = class extends Base {
    indexAction() {
      return this.display();
    }
  
    async getMenusByPidAction() {
      let param = this.post()
      param.pid = this.get('pid');
      console.log(param);
      let token = await this.session('token');
      let result = await menu.getMenusByPid(param,token);
      console.log("result",result);
      return this.body = result;
    }

    async toAddOrUpdateAction() {
      let id = this.get('id');
      let token = await this.session('token');
      let result = await menu.getMenuById(id,token);
      if(result.status==0) {
        this.assign('e',result.body);
      }
      return this.display();
    }

    async addOrUpdateAction() {
      let params = this.post();
      let token = await this.session('token');
      let result = await menu.addOrUpdate(params,token);
      if(result.status==0) {
        return this.body = 'ok';
      }
      return this.body = 'fail';
    }

    async deletessAction() {
      let params = this.post();
      let token = await this.session('token');
      let result = await menu.deletess(params,token);
      if(result.status==0) {
        return this.body = 1;
      }
      return this.body = -1;
    }
  };