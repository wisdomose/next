import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) => {

  const response = await axios.get(url)
    .then((res) => res.data)
    return response;
};

module.exports = function useUser(token) {
  
  const { data, error} = useSWR(
    `${process.env.API_URL}/student/profile/${token}`,
    fetcher
  );

    return {
    data,
    loading: !error && !data,
    error,
  }
}
