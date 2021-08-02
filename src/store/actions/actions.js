
import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({ commit }) {
        const urlMain = "https://api.predic8.de/shop/products/";
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
    GET_CATEGORIES_FROM_API({ commit }) {
        const urlCategories = "https://api.predic8.de/shop/categories/";
        return axios(urlCategories, {
            method: "GET",
            timeout: 1000,
        })
            .then((response) => {
                commit("SET_CATEGORIES_TO_STATE", response.data.categories);
                return response;
            })
            .finally(() =>
                console.log(
                    "%cData categories loading is complete on VueX",
                    "background: #52E747FF; color: #FFFFFFFF"
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
                    console.log("Error data categories", error.message);
                }
                console.log(error.config);
            });
    },
};