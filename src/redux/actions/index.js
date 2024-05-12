import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../utils/api";


export const getFlights= createAsyncThunk('flight/getFlights',async()=>{
const res =await axios.request(api);
const formatted= res.data.aircraft.map((i)=>({
    id:i[0],
    code:i[1],
    lat:i[2],
    lng:i[3]
}));
return formatted;
});