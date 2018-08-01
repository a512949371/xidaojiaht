export default class extends think.Service{
	async factoryperlistquest(data,token){
		let result={};
		result = this.execGetWithAuth('factoryperlist',data,token);
		return result
	}
	//工厂概况统计
	async facordercountquest(data,token){
		let result={};
		result = this.execGetWithAuth('facordercount',data,token);
		return result
	}
	//新增工厂人员
	async insertfactoryperquest(data,token){
		let result={};
		result = this.execPostWithAuth('insertfactoryper',data,token);
		return result
	}
	//工厂人员信息
	async factoryperonequest(data,token){
		let result={};
		result = this.execGetWithAuth('factoryperone',data,token);
		return result
	}
	//删除工厂人员信息
	async removefactoryperonequest(data,token){
		let result={};
		result = this.execPostWithAuth('removefactoryperone',data,token);
		return result
	}
	//编辑工厂人员
	async updatefactoryperonequest(data,token){
		let result={};
		result = this.execPostWithAuth('updatefactoryperone',data,token);
		return result
	}
	//修改工厂人员密码
	async updatefactoryperpwdquest(data,token){
		let result={};
		result = this.execPostWithAuth('updatefactoryperpwd',data,token);
		return result
	}
	
	
}
