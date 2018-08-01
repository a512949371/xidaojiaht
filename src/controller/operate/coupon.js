const Base = require('./base.js');
const operation = think.service('operation');
let couponlist = async function(ctx,data){
    let token = await ctx.session('token');
    let result = {};
    result = await operation.couponselectquest(data,token);
    return result;
}
let couponone = async function(ctx,data){
    let token = await ctx.session('token');
    let result = {};
    result = await operation.couponselectonequest(data,token);
    return result;
}
export default class extends Base{
    //优惠管理
    async selectListAction(){
        let pagedata =this.post();
        if(think.isEmpty(pagedata)){
            pagedata={
            pageNo:1,
            pageSize:10,
        }
        }else{
            pagedata=pagedata
        }
        let coudata =await couponlist(this,pagedata);
        console.log("couponlist",coudata);
        if(coudata.status==401){
            await this.session(null);
            return this.redirect('/auth/login');
        } else if (coudata.status == 404) {
            return this.redirect('/operate/404');
        } else if (coudata.status == 500) {
            return this.redirect('/operate/500');
        } else {
            this.assign({"pageInfo":coudata.body.pageInfo,"querymodel":coudata.body.queryModel});
            return this.display();
        }
    }

    //单条查询
    async singlequeryAction(){
        let data  ={
            id:this.get("id"),
        }
        let singlequery = await couponone(this,data);
        console.log("singlequery",singlequery);
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

    //优惠券新增
    async couponinsertAction(){
    	let token = await this.session("token");
    	let data=this.post();
    	let couponinsertdata= await operation.couponinsertquest(data,token);
    	console.log("couponinsertdata",couponinsertdata);
    	if(couponinsertdata.status== 401){
    	  await	this.session(null);
    	  return this.redirect("/auth/login");
        } else if (couponinsertdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (couponinsertdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
    		return this.body=couponinsertdata;
    	}
    }

    //优惠券删除
    async deletecouponAction(){
        let token = await this.session("token");
        let data=this.post();
        console.log("aaa",data);
        let coupondeletedata= await operation.updatecouponquest(data,token);
        console.log("coupondeletedata",coupondeletedata);
        if(coupondeletedata.status== 401){
            await	this.session(null);
            return this.redirect("/auth/login");
        } else if (coupondeletedata.status == 404) {
            return this.redirect('/operate/404');
        } else if (coupondeletedata.status == 500) {
            return this.redirect('/operate/500');
        } else {
            return this.body=coupondeletedata;
        }
    }
    
    //优惠券更新--启用
    async enablecouponAction(){
    	let token = await this.session("token");
    	let data=this.post();
        data.status="1";
    	console.log("bbb",data)
    	let enabledata= await operation.updatecouponquest(data,token);
    	console.log("enabledata",enabledata.body);
    	if(enabledata.status== 401){
    	  await	this.session(null);
    	  return this.redirect("/auth/login");
        } else if (enabledata.status == 404) {
            return this.redirect('/operate/404');
        } else if (enabledata.status == 500) {
            return this.redirect('/operate/500');
        } else {
    		return this.body=enabledata;
    	}
    }

    //优惠券更新--失效
    async invalidcouponAction(){
    	let token = await this.session("token");
    	let data=this.post();
        data.status="2";
    	console.log("bbb",data);
    	let updatecoupondata= await operation.updatecouponquest(data,token);
    	console.log("updatecoupondata",updatecoupondata.body);
    	if(updatecoupondata.status== 401){
    	  await	this.session(null);
    	  return this.redirect("/auth/login");
        } else if (updatecoupondata.status == 404) {
            return this.redirect('/operate/404');
        } else if (updatecoupondata.status == 500) {
            return this.redirect('/operate/500');
        } else {
    		return this.body=updatecoupondata;
    	}
    }
    
}