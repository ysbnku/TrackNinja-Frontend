import axios, { AxiosError, AxiosResponse } from 'axios';

export class LogsService {
    static getLogs() {
        return axios.get('https://trackninja-backend-52c9c95cd779.herokuapp.com/api/logs')
            .then(response => {
                console.log(response.data);
                return response.data; 
            })
            .catch(error => {
                console.error("API çağrısı sırasında hata oluştu: ", error);
            });
        }
    }