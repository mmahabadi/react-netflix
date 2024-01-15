import axios from "axios";

// const fetcher = async (url: string) => {
//   const res = await fetch(url);
//   const data = await res.json();

//   return data;
// };
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default fetcher;
