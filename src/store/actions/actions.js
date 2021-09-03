
import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({ commit }) {
        const urlMain = "https://api.predic8.de:443/shop/products/";
        return axios(urlMain, {
            method: "GET",
            timeout: 1000,
        })
            .then((response) => {
                commit("SET_PRODUCTS_TO_STATE", response.data.products);
                return response;
            })
            .finally(() =>
                console.log(
                    "%cData products loading is complete on VueX",
                    "background: #0096d3; color: #FFFFFFFF"
                )
            )
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    },
};