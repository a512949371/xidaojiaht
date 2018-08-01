const Base = require('./base.js');
const operation = think.service('operation');
let orderlist = async function(ctx,data){
    let token = await ctx.session('token');
    let result = {};
    result = await operation.orderselectquest(data,token);
    return result;
}
let smartask=async function(ctx,data){
    let token = await ctx.session("token");
    let result={};
    result =await operation.smartaskquest(data,token);
    return result;
}
let orderselectone=async function(ctx,data){
    let token = await ctx.session("token");
    let result={};
    result =await operation.orderselectonequest(data,token);
    return result;
}
let ordersmarkone=async function(ctx,data){
    let token = await ctx.session("token");
    let result={};
    result =await operation.getsmarkonequest(data,token);
    return result;
}
let cabinetselect=async function(ctx,data){
    let token = await ctx.session("token");
    let result={};
    result =await operation.cabinetselectquest(data,token);
    return result;
}

export default class extends Base{
    //订单管理
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
        let order =await orderlist(this,pagedata);
        let smartdata= await smartask(this,'');
        let cabinetdata= await cabinetselect(this,'');
        console.log("orderlist222223",order.body);
        console.log("cabinetdata",cabinetdata.body);
        if(order.status==401){
            await this.session(null);
            return this.redirect('/auth/login');
        } else if (order.status == 404) {
            return this.redirect('/operate/404');
        } else if (order.status == 500) {
            return this.redirect('/operate/500');
        } else {
            this.assign({"pageInfo":order.body.pageInfo,"smartdata":smartdata.body,"cabinetdata":cabinetdata.body,"querymodel":order.body.queryModel});
            return this.display();
        }
    }

    async singlequeryAction(){
        let data  ={
            id:this.get("id"),
        }
        let singlequery = await orderselectone(this,data);
        console.log("singlequery",singlequery);
        console.log("singlequery22224",singlequery.body);
        if(singlequery.status==401){
            await this.session(null);
            return this.redirect('/auth/login');
        } else if (singlequery.status == 404) {
            return this.redirect('/operate/404');
        } else if (singlequery.status == 500) {
            return this.redirect('/operate/500');
        } else {
            this.assign({"selectone":singlequery.body});
            return this.display();
        }
    }
    async smarkoneAction(){
		let data ={
			id:this.get("id"),
		}
		let smarkdata= await ordersmarkone(this,data);
		console.log("smarkdata",smarkdata.body);
		if(smarkdata.status == 401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (smarkdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (smarkdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			this.assign({"smarkdata":smarkdata.body});
			return this.display();
		}
    }
    
}