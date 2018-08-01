export default class extends think.Service{

    async roleselectlistquest(e,token) {
        let result = {};
        result = await this.execGetWithAuth('roleselectlist',e,token);
        return result;
    }

    async selectoneRolequest(e,token) {
        let result = {};
        result = await this.execGetWithAuth('selectoneRole',e,token);
        return result;
    }

    async updateRolequest(e,token) {
        let result = {};
        result = await this.execPostWithAuth('updateRole',e,token);
        return result;
    }

    async deleteRolequest(e,token) {
        let result = {};
        result = await this.execPostWithAuth('deleteRole',e,token);
        return result;
    }

    async saveRolequest(e,token) {
        let result = {};
        result = await this.execPostWithAuth('saveRole',e,token);
        return result;
    }
}
