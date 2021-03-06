const Base = require("./base")
const clothestype= think.service("clothestype")
const fileload = think.service('fileupload');
let  clotheslist= async function(ctx,data){
	let token = await ctx.session("token")
	let result = await clothestype.getclothesparmequest(data,token)
	return result
}
export default class extends Base{
    async selectListAction(){
    	let token = await this.session("token")
    	let pagedata=this.post();
    	if(think.isEmpty(pagedata)){
    		pagedata={
	    		type:"1",
	    		pageNo:1,
	    		pageSiez:10
    		}
    	}else{
    		pagedata.type="1";
    		pagedata=pagedata;
    	}
    	let clothesdata= await clotheslist(this,pagedata)
    	let allclothesdata= await clothestype.allclothesquest({type:"4"},token)
    	console.log("clothesdata",clothesdata.body)
    	if(clothesdata.status== 401||allclothesdata.status==401){
    	  await	this.session(null)
    	  return this.redirect("/auth/login")
			} else if (clothesdata.status == 404) {
				return this.redirect('/operate/404');
			} else if (clothesdata.status == 500) {
				return this.redirect('/operate/500');
			} else {
    		this.assign({"pageInfo":clothesdata.body.pageInfo,"allclothesdata":allclothesdata.body})
    		return this.display()
    	}
	}
    //获取衣物详情
    async selectoneAction(){
    	let token = await this.session("token")
    	let data={
    		id:this.get("id"),
    		type:"1"
    	}
    	let clothesonedata= await clothestype.getclothesparmeonequest(data,token)
    	let allclothesdata= await clothestype.allclothesquest({type:"4"},token)
    	console.log("clothesonedata",clothesonedata.body)
    	if(clothesonedata.status== 401){
    	  await	this.session(null)
    	  return this.redirect("/auth/login")
			} else if (clothesonedata.status == 404) {
				return this.redirect('/operate/404');
			} else if (clothesonedata.status == 500) {
				return this.redirect('/operate/500');
			} else {
    		this.assign({"clothesonedata":clothesonedata.body,"allclothesdata":allclothesdata.body})
    		return this.display()
    	}
    }
    //图片上传
    async uploadimgAction(){
    	let file= this.file("imgFile")
    	let token = await this.session("token")
    	let img= await fileload.exec(file.name,file,token)
    	console.log("im",img)
    	if(img.status== 0){
    		return this.body = {status:200,data:img.body.url,realUrl:img.body.img};
    	} else if(img.status==403) {
    		return this.body = {status:403,data:"无权限"};
    	} else if(img.status==401) {
    		await this.session(null)
    	  return this.redirect("/auth/login")
			} else if (img.status == 404) {
				return this.redirect('/operate/404');
			} else if (img.status == 500) {
				return this.redirect('/operate/500');
			} else {
    		return this.body = {status:500,data:"请求异常"};
    	}
    	
    }
    //新增一条衣物数据
    async insertclothesAction(){
    	let token = await this.session("token")
    	let data=this.post()
    	let insertclothesdata= await clothestype.insertclothesparmequest(data,token)
    	if(insertclothesdata.status== 401){
    	  await	this.session(null)
    	  return this.redirect("/auth/login")
			} else if (insertclothesdata.status == 404) {
				return this.redirect('/operate/404');
			} else if (insertclothesdata.status == 500) {
				return this.redirect('/operate/500');
			} else {
    		return this.body=insertclothesdata
    	}
    }
    //修改一条衣物数据
    async updataclothesAction(){
    	let token = await this.session("token")
    	let data=this.post()
    	console.log("$a",data)
    	let updataclothesdata= await clothestype.updataclothesparmequest(data,token)
    	console.log("updataclothesdata",updataclothesdata.body)
    	if(updataclothesdata.status== 401){
    	  await	this.session(null)
    	  return this.redirect("/auth/login")
			} else if (updataclothesdata.status == 404) {
				return this.redirect('/operate/404');
			} else if (updataclothesdata.status == 500) {
				return this.redirect('/operate/500');
			} else {
    		return this.body=updataclothesdata;
    	}
    }
    
}
