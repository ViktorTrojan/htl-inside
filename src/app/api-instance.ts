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
        const res = await this.api_instance.get('/getSchueler?id=' + id);
        return res.data;
    }

    static getHobbies = async (id: any) => {
        const res = await this.api_instance.get("/getHobbies?id=" + id);
        return res.data;
    }

    static getMaleCount = async() => {
        const res = await this.api_instance.get("/getmalecount");
        return res.data;
    }

    static getFemaleCount = async() => {
        const res = await this.api_instance.get("/getfemalecount");
        return res.data;
    }
}

export default API;