const Base = require('./base.js');
const operation = think.service('operation');
let payloglist = async function(ctx,data){
    let token = await ctx.session('token');
    let result = {};
    result = await operation.paylogselectquest(data,token);
    return result;
}

export default class extends Base{
    //交易管理
    async selectListAction(){
        let pagedata =this.post();
        if(think.isEmpty(pagedata)){
            pagedata={
            pageNo:1,
            pageSize:10,
        }
        }else{
            pagedata=pagedata;
        }
        let paylog =await payloglist(this,pagedata);
        console.log("payloglist22222",paylog.body);
        if(paylog.status==401){
            await this.session(null);
            return this.redirect('/auth/login');
        } else if (paylog.status == 404) {
            return this.redirect('/operate/404');
        } else if (paylog.status == 500) {
            return this.redirect('/operate/500');
        } else {
            this.assign({"pageInfo":paylog.body.pageInfo,"querymodel":paylog.body.queryModel});
            return this.display();
        }
    }
    
}