const Base = require("./base")
const clotheserr= think.service("clotheserr")
let  clotheslist= async function(ctx,data){
	let token = await ctx.session("token")
	let result = await clotheserr.getclothesparmequest(data,token)
	return result
}
export default class extends Base{
    async selectListAction(){
    	let token = await this.session("token")
    	let pagedata=this.post();
    	if(think.isEmpty(pagedata)){
    		pagedata={
	    		type:"3",
	    		pageNo:1,
	    		pageSiez:10
    		}
    	}else{
    		pagedata.type="3";
    		pagedata=pagedata;
    	}
    	let clothesdata= await clotheslist(this,pagedata)
    	console.log("clothesdata2",clothesdata.body.pageInfo.list)
    	if(clothesdata.status== 401){
    	  await	this.session(null)
    	  return this.redirect("/auth/login")
			} else if (clothesdata.status == 404) {
				return this.redirect('/operate/404');
			} else if (clothesdata.status == 500) {
				return this.redirect('/operate/500');
			} else {
    		this.assign({"pageInfo":clothesdata.body.pageInfo})
    		return this.display()
    	}
	}
    //获取衣物瑕疵
    async selectoneAction(){
    	let token = await this.session("token")
    	let data={
    		id:this.get("id"),
    		type:"3"
    	}
    	let clothesonedata= await clotheserr.getclothesparmeonequest(data,token)
    	console.log("clothesonedata",clothesonedata.body)
    	if(clothesonedata.status== 401){
    	  await	this.session(null)
    	  return this.redirect("/auth/login")
			} else if (clothesonedata.status == 404) {
				return this.redirect('/operate/404');
			} else if (clothesonedata.status == 500) {
				return this.redirect('/operate/500');
			} else {
    		this.assign({"clothesonedata":clothesonedata.body})
    		return this.display()
    	}
    }
    //新增一条衣物瑕疵数据
    async insertclothesAction(){
    	let token = await this.session("token")
    	let data=this.post()
    	let insertclothesdata= await clotheserr.insertclothesparmequest(data,token)
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
    //修改一条衣物瑕疵数据
    async updataclothesAction(){
    	let token = await this.session("token")
    	let data=this.post()
    	console.log("$a",data)
    	let updataclothesdata= await clotheserr.updataclothesparmequest(data,token)
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
    //删除一条衣物瑕疵数据
    async deleteclothesparmeAction(){
    	let token = await this.session("token")
    	let data=this.post()
    	console.log("$b",data)
    	let deleteclothesdata= await clotheserr.deleteclothesparmequest(data,token)
    	console.log("updataclothesdata",deleteclothesdata)
    	if(deleteclothesdata.status== 401){
    	  await	this.session(null)
    	  return this.redirect("/auth/login")
			} else if (deleteclothesdata.status == 404) {
				return this.redirect('/operate/404');
			} else if (deleteclothesdata.status == 500) {
				return this.redirect('/operate/500');
			} else {
    		return this.body=deleteclothesdata;
    	}
    }
    
}
