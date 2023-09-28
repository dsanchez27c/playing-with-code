import { useState, useEffect } from 'react';
import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface configObjInterface {
  axiosInstance: AxiosInstance;
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  requestConfig?: object;
}

const useAxios = (configObj: any) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  const [response, setResponse] = useState<String[] | undefined>([]);
  const [error, setError] = useState<String | undefined>('');
  const [loading, setLoading] = useState<Boolean | undefined>(true);

  useEffect(() => {
    const controller: AbortController = new AbortController();

    const fetchData = async () => {
      try {
        const res: any = await axiosInstance[method](url, {
          ...requestConfig,
          signal: controller.signal
        });

        if (res.data !== undefined) {

          setResponse(res.data);
        }

      } catch (err: AxiosError | any) {

        setError(err.message);
      } finally {
        setLoading(false);
      }

    };

    fetchData();

    //useEffect cleanup function
    return () => {
      controller.abort();
    };
  }, []);

  return [response, error, loading];
};

export default useAxios;
