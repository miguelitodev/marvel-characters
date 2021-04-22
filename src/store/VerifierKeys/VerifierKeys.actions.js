import api from "./../../api/api";
const md5 = require("md5");
const date = new Date();

export function verify(publicKey, privateKey) {
    return api({
        url: "/v1/public/comics",
        type: "GET",
        params: {
            apikey: publicKey,
            ts: date.getTime(),
            hash: md5(`${date.getTime()}${privateKey}${publicKey}`),
        },
    });
}
