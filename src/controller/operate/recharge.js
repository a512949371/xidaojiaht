const Base = require('./base.js');
const operation = think.service('operation');
let rechargelist = async function(ctx,data){
    let token = await ctx.session('token');
    let result = {};
    result = await operation.rechargeselectquest(data,token);
    return result;
}
let rechargeone = async function(ctx,data){
    let token = await ctx.session('token');
    let result = {};
    result = await operation.rechargeselectonequest(data,token);
    return result;
}

export default class extends Base{
    //充值赠送
    async selectListAction(){
        let pagedata =this.post()
        if(think.isEmpty(pagedata)){
            pagedata={
            pageNo:1,
            pageSize:10
        }
        }else{
            pagedata=pagedata
        }
        let rechdata =await rechargelist(this,pagedata)
        console.log("rechargelist22222",rechdata.body)
        if(rechdata.status==401){
            await this.session(null);
            return this.redirect('/auth/login');
        } else if (rechdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (rechdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
            this.assign({"pageInfo":rechdata.body.pageInfo})
            return this.display()
        }
    }

    //充值详情
    async singlequeryAction(){
    	let token = await this.session("token");
    	let data={
    		id:this.get("id"),
    		type:"2"
    	}
    	let rechargeonedata= await rechargeone(this,data)
    	console.log("rechargeonedata",rechargeonedata.body)
    	if(rechargeonedata.status== 401){
    	  await	this.session(null)
    	  return this.redirect("/auth/login");
        } else if (rechargeonedata.status == 404) {
            return this.redirect('/operate/404');
        } else if (rechargeonedata.status == 500) {
            return this.redirect('/operate/500');
        } else {
    		this.assign({"rechargeonedata":rechargeonedata.body})
    		return this.display()
    	}
    }
    
    //充值新增
    async rechargeinsertAction(){
    	let token = await this.session("token");
    	let data=this.post()
    	let rechargeinsertdata= await operation.rechargeinsertquest(data,token)
    	console.log("rechargeinsertdata",rechargeinsertdata);
    	if(rechargeinsertdata.status== 401){
    	  await	this.session(null)
    	  return this.redirect("/auth/login");
        } else if (rechargeinsertdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (rechargeinsertdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
    		return this.body=rechargeinsertdata
    	}
    }

    //充值修改
    async updaterechargeAction(){
    	let token = await this.session("token");
    	let data=this.post();
    	console.log("$a",data);
    	let updaterechargedata= await operation.updaterechargequest(data,token);
    	console.log("updaterechargedata",updaterechargedata);
    	if(updaterechargedata.status== 401){
    	  await	this.session(null);
    	  return this.redirect("/auth/login");
        } else if (updaterechargedata.status == 404) {
            return this.redirect('/operate/404');
        } else if (updaterechargedata.status == 500) {
            return this.redirect('/operate/500');
        } else {
    		return this.body=updaterechargedata;
    	}
    }
    
    //充值删除
    async deleterechargeAction(){
        let token = await this.session("token");
        let data=this.post();
        console.log("rrr",data);
        let deleterechargedata= await operation.updaterechargequest(data,token);
        console.log("deleterechargedata",deleterechargedata);
        if(deleterechargedata.status== 401){
            await	this.session(null);
            return this.redirect("/auth/login");
        } else if (deleterechargedata.status == 404) {
            return this.redirect('/operate/404');
        } else if (deleterechargedata.status == 500) {
            return this.redirect('/operate/500');
        } else {
            return this.body=deleterechargedata;
        }
    }
    
}