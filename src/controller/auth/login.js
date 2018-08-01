const Base = require('../base.js');
const svgCaptcha = require('svg-captcha');
const auth = think.service('auth');

let getCaptcha2 = async function(ctx) {
  var captcha = svgCaptcha.create({size: 4,ignoreChars:'0o1i',noise: 2,background: '#B0B0B0',width: 95,height: 34,fontSize: 38});
  let captchaData = captcha.text.toLocaleLowerCase();
  console.log("2323",captchaData);
  await ctx.session('login_valiImg',captchaData);
  return captcha.data;
}

let doLogin = async function(ctx) {
  let userInfo = await ctx.session('user');
  let originValiCode = await ctx.session('login_valiImg');
  let validCode = ctx.post('validCode');
  let result;
  if(validCode.toLocaleLowerCase()!=originValiCode) {
    result = {status:-7,msg:'验证码错误'};
  } else {
    if(think.isEmpty(userInfo)) {
      let username = ctx.post('username');
      let password = ctx.post('password');
      let apiResult = await auth.doLogin(username,password);
      console.log("23",apiResult.body.menus);
      if(apiResult.status==0) {
          let data = apiResult.body;
          await ctx.session('user',data.name);
          await ctx.session('token',data.token);
          await ctx.session("menus",data.menus.userMenus);
          await ctx.session("userBottons",data.menus.userBottons);
          console.log('data: '+data);
          result = {status:0,data:1};
      } else {
          console.log('apiResult: '+apiResult.status);
            result = apiResult;
      }
    } else {
      result = {status:1,data:1};
    }
  }  
  return result;
}
 let exit = async function(ctx){
    await ctx.session(null);
    return ctx.redirect('/auth/login');
 }
module.exports = class extends Base {
  async indexAction() {
  	await this.session(null);
    this.assign('appName','洗到家');
    return this.display();
  }

  async authImageAction() {
    let captcha = await getCaptcha2(this);
    return this.body = captcha;
  }

  async doLoginAction() {
    let body = await doLogin(this);
    return this.body = body;
  }
  
  async exitAction() {
  	return await exit(this);
  }
};
