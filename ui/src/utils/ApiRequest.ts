import {loginUrl} from "../../oldsrc/pages/Login/Login";
import { importMetaEnv } from "./importMeta";
import {TeamDto} from "../../oldsrc/utils/TeamActions";

/**
 * Horrific general API request method
 * @param path
 * @param method
 * @param body
 */
export const makeApiRequest = async (path: string, method: string, body: TeamDto | undefined = undefined) => {
    const token = localStorage.getItem("token");

    const options: RequestInit = {
        method: method,
        mode: "cors",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        }
    };

    if (body) {
        options['body'] = JSON.stringify(body);
    }

    const res = await fetch(`${importMetaEnv().VITE_API_URL}${path}`, options);
    if(!res.ok) {
        if(res.status == 401) window.location.replace(`${loginUrl}`);
        else throw new Error(`${res.status} ${res.statusText}: ${await res.text()}`);
    }
    return res;
}
