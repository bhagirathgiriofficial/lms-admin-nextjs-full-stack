import { axiosInstance } from "./helper";

const getCategories = () => {
    return axiosInstance.get("/category")
        .then(response => response.data.categories)
        .catch(error => {
            console.error(error);
            return [];
        });
};
const getCourses = () => {
    return axiosInstance.get("/course")
        .then(response => response.data.courses)
        .catch(error => {
            console.error(error);
            return [];
        });
}

export { getCategories, getCourses };