const Base = require('./base');
const bannerlist =think.service("bannerlist");
const fileload = think.service('fileupload');
let bannerlistdata = async function(ctx,data){
	let token = await ctx.session("token");
	let banner = await bannerlist.bannerlistquest(data,token);
	return banner;
}
export default class extends Base{
	async selectListAction(){
		let pagedata = this.post();
		if(think.isEmpty(pagedata)){
			pagedata={
				pageNo:1,
				pageSize:10
			}
		}else{
			pagedata=pagedata
		};
		let bannerdata = await bannerlistdata(this,pagedata);
		console.log("bannerdata",bannerdata.body);
		if(bannerdata.status == 401){
			await this.session(null);
			return this.redirect("/auth/login");
        }else if(bannerdata.status==404){
    		return this.redirect('/operate/404');
    	}else if(bannerdata.status==500){
    		return this.redirect('/operate/500');
    	}else{
			this.assign({"pageInfo":bannerdata.body.pageInfo})
			return this.display()
		}
	}
	//广告详情
	async selectoneAction(){
		let data = {
			id:this.get("id")
		};
		let token =await this.session("token");
		let bannerdata = await bannerlist.banneronequest(data,token);
		console.log("bannerdata",bannerdata)
		if(bannerdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        }else if(bannerdata.status==404){
    		return this.redirect('/operate/404');
    	}else if(bannerdata.status==500){
    		return this.redirect('/operate/500');
    	}else{
			this.assign({"bannerdata":bannerdata.body})
			return this.display()
		}
	}
	//新增广告页面
	async addbannerAction(){
		return this.display()
	}
	//新增广告
	async addbannerdataAction(){
		let token = await this.session("token");
		let data =this.post();
		let bannerdata = await bannerlist.insertbannerquest(data,token);
		console.log("bannerdata",bannerdata);
		if(bannerdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        }else if(bannerdata.status==404){
    		return this.redirect('/operate/404');
    	}else if(bannerdata.status==500){
    		return this.redirect('/operate/500');
    	}else{
			return this.body=bannerdata
		}
	}
	//删除广告
	async removebanneroneAction(){
		let token = await this.session("token");
		let data ={id:this.get("id")};
		let bannerdata = await bannerlist.removebanneronequest(data,token);
		console.log("bannerdata",bannerdata);
		if(bannerdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        }else if(bannerdata.status==404){
    		return this.redirect('/operate/404');
    	}else if(bannerdata.status==500){
    		return this.redirect('/operate/500');
    	}else{
			return this.body=bannerdata
		}
	}
	//编辑广告
	async updatebanneroneAction(){
		let token = await this.session("token");
		let data =this.post();
		let bannerdata = await bannerlist.updatebanneronequest(data,token);
		console.log("bannerdata",bannerdata);
		if(bannerdata.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        }else if(bannerdata.status==404){
    		return this.redirect('/operate/404');
    	}else if(bannerdata.status==500){
    		return this.redirect('/operate/500');
    	}else{
			return this.body=bannerdata
		}
	}
	//图片上传
    async uploadimgAction(){
    	let file= this.file("imgFile")
    	let token = await this.session("token");
    	let img= await fileload.exec(file.name,file,token);
    	console.log("im",img)
    	if(img.status== 0){
    		return this.body = {status:200,data:img.body.url,realUrl:img.body.img};
    	} else if(img.status==403) {
    		return this.body = {status:403,data:"无权限"};
    	} else if(img.status==401) {
    		await this.session(null)
    	  return this.redirect("/auth/login")
        }else if(img.status==404){
    		return this.redirect('/operate/404');
    	}else if(img.status==500){
    		return this.redirect('/operate/500');
    	}else{
    		return this.body = {status:500,data:"请求异常"};
    	}
    	
    }
}
