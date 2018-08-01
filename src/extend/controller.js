let getToken=async function (){
    let user = await  this.session('user');
    return user.token;
}

module.exports={
    getToken:getToken
}