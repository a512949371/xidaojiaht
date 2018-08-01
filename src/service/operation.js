const md5 =require('md5');
export default class extends think.Service{
    //订单管理
    async orderselectquest(data,token){
        let result={};
        result = await this.execGetWithAuth('orderselect',data,token);
        return result;
    }

	//查看单个柜子信息
	async getsmarkonequest(data,token){
		let result={};
		result =await this.execGetWithAuth('getsmarkone',data,token);
		return result;
	}

	//用户管理
    async accountselectquest(data,token){
        let result={};
        result = await this.execGetWithAuth('accountselect',data,token);
        return result;
    }

	//用户管理更新
    async accountupdatequest(data,token){
        let result={};
        result = await this.execPostWithAuth('accountupdate',data,token);
        return result;
    }

	//优惠管理
    async couponselectquest(data,token){
        let result={};
        result = await this.execGetWithAuth('couponselect',data,token);
        return result;
    }

    //优惠券新增
    async couponinsertquest(data,token){
        let result={};
        result = await this.execPostWithAuth('couponinsert',data,token);
        return result;
    }

    //优惠券删除
    async coupondeletequest(data,token){
        let result={};
        result = await this.execPostWithAuth('coupondelete',data,token);
        return result;
    }

    //优惠券更新
    async updatecouponquest(data,token){
        let result={};
        result = await this.execPostWithAuth('updatecoupon',data,token);
        return result;
    }

	//充值赠送
    async rechargeselectquest(data,token){
        let result={};
        result = await this.execGetWithAuth('rechargeselect',data,token);
        return result;
    }

	//充值赠送单条查询
    async rechargeselectonequest(data,token){
        let result={};
        result = await this.execGetWithAuth('rechargeselectone',data,token);
        return result;
    }

	//充值赠送更新
    async updaterechargequest(data,token){
        let result={};
        result = await this.execPostWithAuth('updaterecharge',data,token);
        return result;
    }

	//充值赠送新增
    async rechargeinsertquest(data,token){
        let result={};
        result = await this.execPostWithAuth('rechargeinsert',data,token);
        return result;
    }

	//充值赠送删除
    async deleterechargequest(data,token){
        let result={};
        result = await this.execPostWithAuth('deleterecharge',data,token);
        return result;
    }

	//交易管理
    async paylogselectquest(data,token){
        let result={};
        result = await this.execGetWithAuth('paylogselect',data,token);
        return result;
    }

	//交易管理新增
    async paylogaddquest(data,token){
        let result={};
        result = await this.execPostWithAuth('paylogadd',data,token);
        return result;
    }
    
	//智能柜列表
	async smartaskquest(data,token){
    	let result={};
    	result = await this.execGetWithAuth('smartask',data,token);
    	return result;
    }
    
	//优惠管理单条查询
	async couponselectonequest(data,token){
    	let result={};
    	result = await this.execGetWithAuth('couponselectone',data,token);
    	return result;
    }
    
	//用户管理单条查询
	async accountselectonequest(data,token){
    	let result={};
    	result = await this.execGetWithAuth('accountselectone',data,token);
    	return result;
    }
    
	//用户优惠券查询
	async accountcouponquest(data,token){
    	let result={};
    	result = await this.execGetWithAuth('accountcoupon',data,token);
    	return result;
    }

	//用户优惠券删除
	async accountcoupondeletequest(data,token){
    	let result={};
    	result = await this.execPostWithAuth('accountcoupondelete',data,token);
    	return result;
    }
    
	//订单单条查询
	async orderselectonequest(data,token){
    	let result={};
    	result = await this.execGetWithAuth('orderselectone',data,token);
    	return result;
    }
    
	//智能柜列表
	async cabinetselectquest(data,token){
    	let result={};
    	result = await this.execGetWithAuth('cabinetselect',data,token);
    	return result;
    }

}
