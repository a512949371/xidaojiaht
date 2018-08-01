export default class extends think.Service{
	async logisticslistquest(data,token){
		let result={};
		result = this.execGetWithAuth('logisticslist',data,token);
		return result;
	}
	//物流人员详情
	async logisticsonequest(data,token){
		let result={};
		result = this.execGetWithAuth('logisticsone',data,token);
		return result;
	}
	//删除物流人员
	async removelogisticsquest(data,token){
		let result={};
		result = this.execPostWithAuth('removelogistics',data,token);
		return result;
	}
	//新建物流人员
	async insertlogisticsquest(data,token){
		let result={};
		result = this.execPostWithAuth('insertlogistics',data,token);
		return result;
	}
	//编辑物流人员
	async updatelogisticsquest(data,token){
		let result={};
		result = this.execPostWithAuth('updatelogistics',data,token);
		return result;
	}
	//修改物流人员密码
	async updatelogisticspwdquest(data,token){
		let result={};
		result = this.execPostWithAuth('updatelogisticspwd',data,token);
		return result;
	}
	
	
}
