import { Axios } from "axios";

export const axiosSecure = Axios.create({
  baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {

  return axiosSecure;

};

export default useAxiosSecure;