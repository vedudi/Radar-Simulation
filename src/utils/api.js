export const api = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.334588",
    bl_lng: "25.417416",
    tr_lat: "42.268071",
    tr_lng: "44.435762",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "9660ff2b1emsh8c3fab698d5ed15p15f9d6jsna68360c1cf33",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
export const headers = {
  "X-RapidAPI-Key": "9660ff2b1emsh8c3fab698d5ed15p15f9d6jsna68360c1cf33",
  "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
};
