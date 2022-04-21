import { reactive } from "vue";
import router from "../router";
//we're importing useMessages so that we can make error message notifications
import { useMessages } from "./messages";
import { api } from "./myFetch";

import * as users from "../models/user";


const session = reactive({
    user: null as users.User | null,
    destinationUrl: null as string | null,
})

export async function Login(email: string, password: string) {
    const messages = useMessages();

    try {
        const user = await api("users/login", { email, password });

        if(user) {

            messages.notifications.push({
                type: "success",
                message: `Welcome back ${user.firstName}!`,
            });

            session.user = user;
            router.push(session.destinationUrl  ?? '/wall');
        }    
    } catch (error: any) {
        messages.notifications.push({
            type: "danger",
            message: error.message,
        });
        console.table(messages.notifications)
    }
}

export function Logout() {
    session.user = null;
    router.push('/login');
}
    
export default session;