import axios from "axios"

export const domain = "http://localhost:5000"



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