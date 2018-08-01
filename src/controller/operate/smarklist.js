const Base = require("./base");
const smarklist = think.service("smarklist");
let smarkdata=async  function(ctx,data){
	let token = await ctx.session("token");
	let smark = await smarklist.getsmarklistquest(data,token);
	return smark;
}
export default class extends Base{
	async selectListAction(){
		let pagedata= this.post();
		if(think.isEmpty(pagedata)){
			pagedata={
				pageNo:1,
				pageSize:10
			}
		}else{
			pagedata=pagedata
		};
		let smarklistdata =await smarkdata(this,pagedata);
		console.log("smarklistdata",smarklistdata.body);
		if(smarklistdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (smarklistdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (smarklistdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			this.assign({"pageInfo":smarklistdata.body.pageInfo,"queryModel":smarklistdata.body.queryModel})
			return this.display()
		}
		
	}
	//查看单个柜子信息
	async selectoneAction(){
		let token = await this.session("token");
		let data ={
			id:this.get("id")
		}
		let smarkdata= await smarklist.getsmarkonequest(data,token);
		console.log("smarkdata",smarkdata.body);
		if(smarkdata.status == 401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (smarkdata.status == 404) {
            return this.redirect('/operate/404');
        } else if (smarkdata.status == 500) {
            return this.redirect('/operate/500');
        } else {
			this.assign({"smarkdata":smarkdata.body})
			return this.display()
		}
	}
	//查看地图
	async lookmapAction(){
		let longitude= this.get("longitude");
		let latitude =this.get("latitude");
		this.assign({"longitude":longitude,"latitude":latitude})
		return this.display()
	}
	//新增柜子信息
	async addsmarkAction(){
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
	//新增柜子
	async addsmarkinfoAction(){
		let data = this.post();
		let token = await this.session("token");
		let smarkdata = await smarklist.insertsmarkquest(data,token);
		console.log("smarkdata",smarkdata)
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
	//选择地址
	async additudeAction(){
		let longitude= this.get("longitude");
		let latitude =this.get("latitude");
		this.assign({"longitude":longitude,"latitude":latitude})
		return this.display()
	}
}
