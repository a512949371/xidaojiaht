const md5 = require('md5');

module.exports = class extends think.Service {
    async doLogin(username,password) {
    	console.log(username,password,"1");
        let result = {};
        result = await this.execPost('login',{'userName':username,'passWord':password});
        console.log("1",result);
        return result;
    }
};
