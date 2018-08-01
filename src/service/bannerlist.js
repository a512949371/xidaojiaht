export default class extends think.Service{
	//广告列表
	async bannerlistquest(data,token){
		let result={};
		result = await this.execGetWithAuth('bannerlist',data,token);
		return result;
	}
	//广告详情
	async banneronequest(data,token){
		let result={};
		result = await this.execGetWithAuth('bannerone',data,token);
		return result;
	}
	//新增广告
	async insertbannerquest(data,token){
		let result={};
		result = await this.execPostWithAuth('insertbanner',data,token);
		return result;
	}
	//删除广告
	async removebanneronequest(data,token){
		console.log("2",data)
		let result={};
		result = await this.execPostWithAuth('removebannerone',data,token);
		return result;
	}
	//编辑广告
	async updatebanneronequest(data,token){
		let result={};
		result = await this.execPostWithAuth('updatebannerone',data,token);
		return result;
	}
}
