import axios from "axios"

class API {

    static api_instance = axios.create({
        baseURL: 'https://api.susnext.com',
    })

    static getAllSchuelers = async () => {
        const res = await this.api_instance.get('/getAllSchueler');
        return res.data;
    }


    static getSchueler = async (id: any) => {
        const res = await this.api_instance.get('/getSchueler');
        return res.data;
    }
}

export default API;