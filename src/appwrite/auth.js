import {Client,Account,ID} from "appwrite"
import conf from "../config/conf"

export class AuthService{
   client=new Client();
   account;
   constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.account=new Account(this.client)
   }

   async createAccount({email,password,name}){
    try {
       const userAccount = await this.account.client(ID.unique(),email,password,name)
       if(userAccount){
        return this.login({email,password})
       }else{
        return userAccount
       }
    } catch (error) {
        throw error;
    }
   }
   async login({email,password}){
    try {
       return await this.account.client.createEmailSession(email,password)
    } catch (error) {
        throw error
    }
   }
   async getCurrentUser(){
    try {
        await this.account.get();
    } catch (error) {
        console.log("appwrite service :: getCurrentUser :: error", error);
        return null;
    }
   }
   async logOut(){
    try {
        await this.account.deleteSession()
    } catch (error) {
          console.log("appwrite service :: logout :: error", error);
    }
   }
}
const authService= new AuthService();
export default authService

