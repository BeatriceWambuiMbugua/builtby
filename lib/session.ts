import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { getServerSession } from "next-auth/next";
import { AdapterUser } from "next-auth/adapters";
import jsonwebtoken from "jsonwebtoken"
import { JWT } from "next-auth/jwt";
import { SessionInterface } from "@/common.types";
export const authOptions: NextAuthOptions = {
providers: [
    GoogleProvider({

        clientId: process.env.GOOGLE_CLIENT_ID!, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY!,
    })
], 
// jwt: {
// encode: ({secret, token}) =>{},
// decode: async ({secret, token}) =>{}
// }, 

theme: {
    colorScheme: 'light', 
    logo: '/logo.png'
}, 

callbacks: {
    async session ({session}){
        return session;

    }, 
    async signIn({user}: {user: AdapterUser | User}){
        try {
            //get the user if they exist


            //if they do not exist, create them


            //return true

            return true

            
        } catch (error: any){
            console.log(error)
            return false

            
        }
    }
}
}

export async function getCurrentUser(){
    const session = await getServerSession(authOptions) as SessionInterface;

    return session;
}