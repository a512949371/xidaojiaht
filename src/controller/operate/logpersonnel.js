const Base = require("./base");
const logpersonnel = think.service("logpersonnel");
const smarklist = think.service("smarklist");
let logperlist= async function(ctx,data){
	let token = await ctx.session("token");
	let result = await logpersonnel.logisticslistquest(data,token);
	return result;
}
export default class extends Base{
	async selectListAction(){
		let pagedata  = this.post();
		if(think.isEmpty(pagedata)){
			pagedata={
				pageNo:1,
				pageSize:10
			}
		}else{
			pagedata =pagedata
		}
		let logperdata= await logperlist(this,pagedata);
		console.log("logperdata",logperdata.body);
		if(logperdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (logperdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (logperdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			this.assign({"pageInfo":logperdata.body.pageInfo})
			return this.display();
		}
	}
	//物流详情页面
	async selectoneAction(){
		let token =await this.session("token");
		let data={
			id:this.get("id")
		};
		let logperdata =await logpersonnel.logisticsonequest(data,token);
		let smarkgroupdata = await smarklist.getsmarkgroupquest('',token);
		console.log("logperone",logperdata.body);
		if(logperdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (logperdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (logperdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			this.assign({"logperdata":logperdata.body,"logperdata_format":JSON.stringify(logperdata.body.cabinetNamelist),"smarkgroupdata":JSON.stringify(smarkgroupdata.body)});
			return this.display()
		}
	}
	//新建物流人员页面
	async addlogperAction(){
		let token = await this.session("token");
		let smarkgroupdata = await smarklist.getsmarkgroupquest('',token);
		console.log("smarkgroupdata",smarkgroupdata)
		if(smarkgroupdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (smarkgroupdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (smarkgroupdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			this.assign({"smarkgroupdata":smarkgroupdata.body})
			return this.display()
		}
	}
	//新建物流人员
	async addlogperdataAction(){
		let token = await this.session("token");
		let data =this.post();
		let logperdata = await logpersonnel.insertlogisticsquest(data,token);
		console.log("logperdata",logperdata)
		if(logperdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (logperdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (logperdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body=logperdata
		}
	}
	//删除物流人员
	async removelogisticsAction(){
		let token = await this.session("token");
		let data ={
			id:this.get("id")
		}
		let logperdata = await logpersonnel.removelogisticsquest(data,token);
		console.log("logperdata",logperdata)
		if(logperdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (logperdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (logperdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body=logperdata
		}
	}
	//编辑物流人员
	async updatelogisticsAction(){
		let token = await this.session("token");
		let data =this.post();
		let logperdata = await logpersonnel.updatelogisticsquest(data,token);
		console.log("logperdata",logperdata)
		if(logperdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (logperdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (logperdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body=logperdata
		}
	}
	//修改密码页面
	async selectpwdAction(){
		let data = this.get("id");
		this.assign({"id":data});
		return this.display();
	}
	//修改密码
	async updatelogisticspwdAction(){
		let token = await this.session("token");
		let data = this.post();
		let logperdata = await logpersonnel.updatelogisticspwdquest(data,token);
		console.log("logperdatapwd",logperdata)
		if(logperdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (logperdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (logperdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body=logperdata
		}
	}
}
