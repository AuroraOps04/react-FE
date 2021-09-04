import {post} from "@utils/requests";

export const loginApi = (name, password) => {
    return post("/user/login", {name, password})
}
