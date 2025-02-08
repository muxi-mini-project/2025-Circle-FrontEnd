import axios from "axios";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
export default getToken = ()=> {
   const baseURL = ''
   const getUserInfo = async()=>{
    try{
        const response = await axios.get(`&{baseURL}/user`);
        return response.data;
    }catch(error){
        console.error(`Error fetching user info:`,error);
        throw error
    }
   }
}