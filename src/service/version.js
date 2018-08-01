export default class extends think.Service{
	async versionsendquest(data,token){
		let result={};
		result = await this.execPostWithAuth('versionsend',data,token);
		return result;
	}
	async versionsendonequest(data,token){
		let result={};
		result = await this.execPostWithAuth('versionsendone',data,token);
		return result;
	}
	
}
