export default class extends think.Service{
	async getclothesparmequest(data,token){
		let result={}
		result =await this.execGetWithAuth('getclothesparme',data,token)
		return result
	}
	//获取单条衣物信息
	async getclothesparmeonequest(data,token){
		let result={}
		result =await this.execGetWithAuth('getclothesparmeone',data,token)
		return result
	}
	//获取衣物大类
	async allclothesquest(data,token){
		let result={}
		result =await this.execGetWithAuth('allclothes',data,token)
		return result
	}
	//新增一条衣物数据
	async insertclothesparmequest(data,token){
		let result={}
		result =await this.execPostWithAuth('insertclothesparme',data,token)
		return result
	}
	//修改一条数据
	async updataclothesparmequest(data,token){
		let result={}
		result =await this.execPostWithAuth('updataclothesparme',data,token)
		return result
	}
	//删除一条衣物数据
	async deleteclothesparmequest(data,token){
		let result={}
		result =await this.execPostWithAuth('deleteclothesparme',data,token)
		return result
	}
	
}
