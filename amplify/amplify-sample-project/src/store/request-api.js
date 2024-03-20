import { API } from 'aws-amplify';
import awsconfig from '../aws-exports'

API.configure(awsconfig);

export class WebAPI {
    async getAPIRsequest(url) {
        // REST APIの呼び出し例
        return await API.get('api9ecd8242', url, {}).then(response => 
            response.message
        ).catch(error => {error});
    }
}