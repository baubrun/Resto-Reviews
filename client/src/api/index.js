import axios from "axios"

const domain = "http://localhost:5000"


const listRestaurants = async () => {

    try {
        const res = await axios.get(
            `${domain}/api/restaurants`,
        )
        return res.data

    } catch (error) {
        return {
            error: error.message,
        };

    }
}

const createRestaurant = async (data) => {

    try {
        const res = await axios.post(
            `${domain}/api/restaurants/`,
            data
        )
        return res.data

    } catch (error) {
        return {
            error: error.message,
        };

    }
}



export const api = {
    listRestaurants,
    createRestaurant,
}