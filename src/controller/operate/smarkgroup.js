const Base = require("./base");
const smarkgroup = think.service("smarkgroup");
let smarkgroupdata = async function(ctx,data){
	let token = await ctx.session("token");
	let result = await smarkgroup.smarkgrouplistquest(data,token);
	return result
}
export default class extends Base{
	//智能柜组别列表
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
		let smarklist = await smarkgroupdata(this,pagedata);
		console.log("smarklist",smarklist)
		if(smarklist.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (smarklist.status == 404) {
            return this.redirect('/operate/404');
        } else if (smarklist.status == 500) {
            return this.redirect('/operate/500');
        } else {
			this.assign({"pageInfo":smarklist.body.pageInfo,"queryModel":smarklist.body.queryModel})
			return this.display();
		}
	}
	//打开新增页面
	async addsmarkgroupAction(){
		let token = await this.session("token");
		let sglogdata = await smarkgroup.selectsglogquest('',token);
		console.log("sglogdata",sglogdata);
		if(sglogdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (sglogdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (sglogdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			this.assign({"sglogdata":sglogdata.body});
			return this.display()
		}
		
	}
	//新增智能柜分组
	async addsmarkgroupinfoAction(){
		let token =await this.session("token");
		let data= this.post();
		let smarkinfo = await smarkgroup.insertsmarkgroupquest(data,token);
		console.log("smarkinfo",smarkinfo);
		console.log("2",smarkinfo.status==401);
		if(smarkinfo.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (smarkinfo.status == 404) {
            return this.redirect('/operate/404');
        } else if (smarkinfo.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body=smarkinfo
		}
	}
	//编辑智能柜分组页面
	async selectoneAction(){
		let token =await this.session("token");
		let data={
			id:this.get("id")
		};
		let smarkinfo = await smarkgroup.selectsmarkgroupquest(data,token);
		let sglogdata = await smarkgroup.selectsglogquest('',token);
		console.log("smarkinfo",smarkinfo);
		if(smarkinfo.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (smarkinfo.status == 404) {
            return this.redirect('/operate/404');
        } else if (smarkinfo.status == 500) {
            return this.redirect('/operate/500');
        } else {
			this.assign({"smarkinfo":smarkinfo.body,"sglogdata":sglogdata.body})
			return this.display()
		}
	}
	//编辑单条智能柜分组
	async updatesmarkgroupAction(){
		let token = await this.session("token");
		let data = this.post();
		let smarkdata = await smarkgroup.updatesmarkgroupquest(data,token);
		console.log("smarkdata",smarkdata);
		if(smarkdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (smarkdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (smarkdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body=smarkdata
		}
	}
}
