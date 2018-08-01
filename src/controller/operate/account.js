const Base = require('./base.js');
const operation = think.service('operation');
let accountlist = async function(ctx,data){
    let token = await ctx.session('token');
    let result = {};
    result = await operation.accountselectquest(data,token);
    return result;
}
let accountone = async function(ctx,data){
    let token = await ctx.session('token');
    let result = {};
    result = await operation.accountselectonequest(data,token);
    return result;
}
let accountcoupon = async function(ctx,data){
    let token = await ctx.session('token');
    let result = {};
    result = await operation.accountcouponquest(data,token);
    return result;
}

export default class extends Base{
    //用户管理
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
        let accdata =await accountlist(this,pagedata);
        console.log("accountlist22222",accdata.body);
        if(accdata.status==401){
            await this.session(null);
            return this.redirect('/auth/login');
        }else if(accdata.status==404){
    		return this.redirect('/operate/404');
    	}else if(accdata.status==500){
    		return this.redirect('/operate/500');
    	}else{
            this.assign({"pageInfo":accdata.body.pageInfo,"querymodel":accdata.body.queryModel});
            return this.display();
        }
    }

    //单条查询
    async singlequeryAction(){
        let data  ={
            id:this.get("id"),
            accountId:this.get("id"),
        }
        let singlequery = await accountone(this,data);
        let coupondata = await accountcoupon(this,'');
        console.log("singlequery",singlequery);
        console.log("coupondata",coupondata.body);
        if(singlequery.status==401){
            await this.session(null);
            return this.redirect('/auth/login');
        }else if(singlequery.status==404){
    		return this.redirect('/operate/404');
    	}else if(singlequery.status==500){
    		return this.redirect('/operate/500');
    	}else{
            this.assign({"selectone":singlequery.body,"pageInfo":coupondata.body.pageInfo.list,"querymodel":coupondata.body.queryModel});
            return this.display();
        }
    }
    
    //用户更新--冻结
    async accountfrozenAction(){
    	let token = await this.session("token");
    	let data=this.post();
        data.status="1";
    	console.log("bbb",data);
    	let frozendata= await operation.accountupdatequest(data,token);
    	console.log("frozendata",frozendata.body);
    	if(frozendata.status== 401){
    	  await	this.session(null);
    	  return this.redirect("/auth/login");
        }else if(frozendata.status==404){
    		return this.redirect('/operate/404');
    	}else if(frozendata.status==500){
    		return this.redirect('/operate/500');
    	}else{
    		return this.body=frozendata;
    	}
    }

    //用户优惠券--删除
    async accountdeleteAction(){
        let token = await this.session("token");
        let data=this.post();
        console.log("bbb",data);
        let deldata= await operation.accountcoupondeletequest(data,token);
        console.log("deldata",deldata.body);
        if(deldata.status== 401){
            await	this.session(null);
            return this.redirect("/auth/login");
        }else if(deldata.status==404){
    		return this.redirect('/operate/404');
    	}else if(deldata.status==500){
    		return this.redirect('/operate/500');
    	}else{
            return this.body=deldata;
        }
    }

    //用户更新--解冻
    async accountthawAction(){
    	let token = await this.session("token");
    	let data=this.post();
        data.status="2";
    	console.log("bbb",data);
    	let thawdata= await operation.accountupdatequest(data,token);
    	console.log("thawdata",thawdata.body);
    	if(thawdata.status== 401){
    	  await	this.session(null);
    	  return this.redirect("/auth/login");
        }else if(thawdata.status==404){
    		return this.redirect('/operate/404');
    	}else if(thawdata.status==500){
    		return this.redirect('/operate/500');
    	}else{
    		return this.body=thawdata;
    	}
    }
    
}