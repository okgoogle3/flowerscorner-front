import axios from "axios";

const getAllFlowers = () => {
    return axios.get("http://localhost:8080/flowers")
}

export default {
    getAllFlowers,
}