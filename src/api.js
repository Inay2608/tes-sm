import axios from "axios";

export const getResto = async () =>{
    const resto = await axios.get(`${process.env.REACT_APP_BASEURL}/list`)

    return resto.data.restaurants
}

export const getDetailResto = async (id) =>{
    const detailResto = await axios.get(`${process.env.REACT_APP_BASEURL}/detail/${id}`)

    return detailResto.data.restaurant
}
