import { axiosInstance } from "./helper";

const getCategories = () => {
    return axiosInstance.get("/category")
        .then(response => response.data.categories)
        .catch(error => {
            console.error(error);
            return [];
        });
};

export { getCategories };