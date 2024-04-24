import axios from "axios";

export const getResto = async () =>{
    const resto = await axios.get(`${process.env.REACT_APP_BASEURL}/list`)

    return resto.data.restaurants
}

export const getDetailResto = async (id) =>{
    const detailResto = await axios.get(`${process.env.REACT_APP_BASEURL}/detail/${id}`)

    return detailResto.data.restaurant
}

export const searchResto = async (q) =>{
    const searchResto = await axios.get(`${process.env.REACT_APP_BASEURL}/search?q=${q}`)

    return searchResto.data
}
