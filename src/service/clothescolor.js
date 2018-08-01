export default class extends think.Service{
	//获取颜色列表
	async getclothescolorlistquest(data,token){
		let result ={};
		result = await this.execGetWithAuth('getclothescolorlist',data,token);
		return result
	}
	//新增单条颜色
	async insertclothescolorquest(data,token){
		let result ={};
		result = await this.execPostWithAuth('insertclothescolor',data,token);
		return result
	}
	//查看单条颜色
	async getclothescoloronequest(data,token){
		let result ={};
		result = await this.execGetWithAuth('getclothescolorone',data,token);
		return result
	}
	//修改单条颜色
	async upclothescoloronequest(data,token){
		let result ={};
		result = await this.execPostWithAuth('upclothescolorone',data,token);
		return result
	}
	//删除单条颜色
	async delclothescoloronequest(data,token){
		let result ={};
		result = await this.execPostWithAuth('delclothescolorone',data,token);
		return result
	}
	

}
