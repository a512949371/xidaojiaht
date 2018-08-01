const Base = require('./base');
const version = think.service('version');
const operation = think.service('operation');
export default class extends Base{
	async indexAction(){
		return this.display()
	}
	//版本更新通知
	async versionsendAction(){
		let token = await this.session('token');
		let order = await version.versionsendquest('',token);
		console.log("version",order);
		if(order.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (order.status == 404) {
            return this.redirect('/operate/404');
        } else if (order.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body = order
		}
	}
	//版本更新通知
	async versionsendoneAction(){
		let token = await this.session('token');
		let data ={
			cabinetId:this.get('id')
		} 
		let order = await version.versionsendonequest(data,token);
		console.log("version",order);
		if(order.status==401){
			await this.session(null);
			return this.redirect("/auth/login");
        } else if (order.status == 404) {
            return this.redirect('/operate/404');
        } else if (order.status == 500) {
            return this.redirect('/operate/500');
        } else {
			return this.body = order
		}
	}
	
	//智能柜列表
	async cabinetselectAction(){
		let token = await this.session('token');
		let data = this.get('id');
		let order =  await operation.cabinetselectquest(data,token);
		return this.body = order
	}
}
