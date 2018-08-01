export default class extends think.Service{
	async smarkgrouplistquest(data,token){
		let result ={}
		result = await this.execGetWithAuth('smarkgrouplist',data,token);
		return result;
	}
	//新增智能柜分组
	async insertsmarkgroupquest(data,token){
		let result={};
		result = this.execPostWithAuth('insertsmarkgroup',data,token);
		return result;
	}
	//编辑智能柜分组
	async updatesmarkgroupquest(data,token){
		let result ={};
		result = this.execPostWithAuth('updatesmarkgroup',data,token);
		return result;
	}
	//查看智能柜分组信息
	async selectsmarkgroupquest(data,token){
		let result ={};
		result = this.execGetWithAuth('selectsmarkgroup',data,token);
		return result;
	}
	//柜子组可选物流
	async selectsglogquest(data,token){
		let result ={};
		result = this.execGetWithAuth('selectsglog',data,token);
		return result;
	}
}
