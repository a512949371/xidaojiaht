const Base = require('./base');
const factory = think.service("factory");
let factoryper =async function(ctx,data){
	let token = await ctx.session("token");
	let factorydata = await factory.factoryperlistquest(data,token);
	return factorydata;
}
export default class extends Base{
	async selectListAction(){
		let pagedata=this.post();
		if(think.isEmpty(pagedata)){
			pagedata={
				pageNo:1,
				pageSize:10
			}
		}else{
			pagedata=pagedata
		}
		let token = await this.session("token");
		let factorydata=await factoryper(this,pagedata);
		let facorderdata = await factory.facordercountquest('',token)
		console.log("factorydata",facorderdata.body);
		if(facorderdata.status==403){
			this.assign({"facordersta":true})
		}
		if(factorydata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (factorydata.status == 404) {
            return this.redirect('/operate/404');
        } else if (factorydata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			this.assign({"pageInfo":factorydata.body.pageInfo,"facorderdata":facorderdata.body})
			return this.display()
		}
		
	}
	//新建工厂人员页面
	async addfacperAction(){
		return this.display()
	}
	//新建工厂人员
	async addfacperdataAction(){
		let token = await this.session("token");
		let data =this.post();
		let facperdata = await factory.insertfactoryperquest(data,token);
		console.log("facperdata",facperdata);
		if(facperdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (facperdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (facperdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body=facperdata
		}
	}
	//单条工厂人员信息
	async selectoneAction(){
		let token = await this.session("token");
		let data={
			id:this.get("id")
		};
		let facperdata= await factory.factoryperonequest(data,token);
		console.log("facperdata",facperdata.body);
		if(facperdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (facperdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (facperdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			this.assign({"facperdata":facperdata.body})
			return this.display();
		}
	}
	//删除工厂人员信息
	async removefacperAction(){
		let token = await this.session("token");
		let data ={
			id:this.get("id")
		}
		let facperdata = await factory.removefactoryperonequest(data,token);
		console.log("facperdata",facperdata);
		if(facperdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (facperdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (facperdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body=facperdata
		}
	}
	//编辑工厂人员信息
	async updatefactoryperoneAction(){
		let token = await this.session("token");
		let data =this.post();
		let facperdata = await factory.updatefactoryperonequest(data,token);
		console.log("facperdata",facperdata);
		if(facperdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (facperdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (facperdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body=facperdata
		}
	}
	//修改工厂员工密码页面
	async selectpwdAction(){
		let data =this.get("id");
		this.assign({"id":data});
		return this.display()
	}
	//修改工厂员工密码
	async updatefactoryperpwdAction(){
		let token = await this.session("token");
		let data =this.post();
		let facperdata = await factory.updatefactoryperpwdquest(data,token);
		console.log("facperdatapwd",facperdata);
		if(facperdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (facperdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (facperdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body=facperdata
		}
	}
}
