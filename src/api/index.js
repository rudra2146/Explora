import axios from 'axios';



const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async(sw,ne)=>{
    try {
        const {data: {data}} = await axios.get(URL, {
        params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
        },
        headers: {
                'x-rapidapi-key': 'ff08d1bdfbmsh3141dc608f89d9ap15c194jsn7c0d85ff309c',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
      })        
        return data;

    } catch (error) {
        console.log(error);
    }
}