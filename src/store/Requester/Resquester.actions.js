import api from "./../../services/api";
const md5 = require("md5");
const date = new Date();

export function request(path, publicKey, privateKey) {
    return api({
        url: path,
        type: "GET",
        params: {
            apikey: publicKey,
            ts: date.getTime(),
            hash: md5(`${date.getTime()}${privateKey}${publicKey}`),
        },
    });
}
