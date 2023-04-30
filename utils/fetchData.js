import { useRouter } from 'next/router';
import axios from '@/services/axiosConfig';
import { useState } from 'react';

const fetchData = () => {
  const [data, setData] = useState(null);

  const router = useRouter();
  const { isReady } = router;

  const getCustomer = (url, id) => {
    if (isReady) {
      axios
        .get(`/${url}/${id}`)
        .then((data) => setData(data.data.data))
        .catch((error) => console.log(error));
    }
    console.log(data);
  };

  return { data, getCustomer }
};

export default fetchData;
