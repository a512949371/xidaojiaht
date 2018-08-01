export default class extends think.Service{
	//获取柜子列表
	async getsmarklistquest(data,token){
		let result={};
		result =await this.execGetWithAuth('getsmarklist',data,token);
		return result;
	}
	//查看单个柜子信息
	async getsmarkonequest(data,token){
		let result={};
		result =await this.execGetWithAuth('getsmarkone',data,token);
		return result;
	}
	//获取所有柜子组别
	async getsmarkgroupquest(data,token){
		let result={};
		result =await this.execGetWithAuth('getsmarkgroup',data,token);
		return result;
	}
	//新增柜子信息
	async insertsmarkquest(data,token){
		let result={};
		result =await this.execPostWithAuth('insertsmark',data,token);
		return result;
	}
	
}
