import axios from "axios";

const BASE_URL = " https://www.googleapis.com/customsearch/v1"

const params = {
    key: 'AIzaSyD-Umdxj4BHJtZ3bRjytor-9vKnX3W7DaQ',
    cx: '645348639dd7f4407'
}
export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload }
    })
    return data;
};
