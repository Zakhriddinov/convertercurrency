import axios from "axios"

export const customAxios = axios.create({
   baseURL: "https://freecurrencyapi.net/api/v2",
   params: {
      apikey: "51d4a220-4282-11ec-894e-d1852a12b49c"
   }
})
