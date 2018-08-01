const Base = require("./base")
const clothescolor = think.service("clothescolor");
let getclothescolorlist = async function(ctx,data){
	let token = await ctx.session("token");
	let colordata = await clothescolor.getclothescolorlistquest(data,token);
	return colordata;
}
export default class extends Base{
	async selectListAction(){
		let pagedata =this.post();
		if(think.isEmpty(pagedata)){
			pagedata={
				pageNo:1,
	    		pageSiez:10
			}
		}else{
			pagedata=pagedata
		};
		let getclothescolor= await getclothescolorlist(this,pagedata);
		console.log("getclothescolor",getclothescolor.body);
		if(getclothescolor.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
		} else if (getclothescolor.status == 404) {
			return this.redirect('/operate/404');
		} else if (getclothescolor.status == 500) {
			return this.redirect('/operate/500');
		} else {
			this.assign({"pageInfo":getclothescolor.body.pageInfo});
			return this.display();
		}
	}
	//查看单条颜色
	async selectoneAction(){
		let token = await this.session("token");
		let data={
			id:this.get("id")
			};
		let coloronedata = await clothescolor.getclothescoloronequest(data,token);
		console.log("coloronedata",coloronedata);
		if(coloronedata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
		} else if (coloronedata.status == 404) {
			return this.redirect('/operate/404');
		} else if (coloronedata.status == 500) {
			return this.redirect('/operate/500');
		} else {
			this.assign({"coloronedata":coloronedata.body});
			return this.display();
		}
		
	}
	//新增单条颜色
	async insertoneAction(){
		let token = await this.session("token");
		let data=this.post();
		let colordata = await clothescolor.insertclothescolorquest(data,token);
		console.log("colordata",colordata);
		if(colordata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
		} else if (colordata.status == 404) {
			return this.redirect('/operate/404');
		} else if (colordata.status == 500) {
			return this.redirect('/operate/500');
		} else {
			return this.body=colordata
		}
	}
	//修改单条颜色
	async upclothescoloroneAction(){
		let token = await this.session("token");
		let data=this.post();
		let colordata = await clothescolor.upclothescoloronequest(data,token);
		console.log("upcolordata",colordata);
		if(colordata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
		} else if (colordata.status == 404) {
			return this.redirect('/operate/404');
		} else if (colordata.status == 500) {
			return this.redirect('/operate/500');
		} else {
			return this.body=colordata
		}
	}
	//删除单条颜色
	async delclothescoloroneAction(){
		let token = await this.session("token");
		let data=this.post();
		let colordata = await clothescolor.delclothescoloronequest(data,token);
		console.log("delcolordata",colordata);
		if(colordata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
		} else if (colordata.status == 404) {
			return this.redirect('/operate/404');
		} else if (colordata.status == 500) {
			return this.redirect('/operate/500');
		} else {
			return this.body=colordata
		}
	}
	
}
