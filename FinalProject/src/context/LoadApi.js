import React, {useCallback, useContext, useEffect, useState} from 'react';
import Axios from 'axios';

export const ApiContext = React.createContext();

const LoadApi = ({children}) => {
  const [rollPhotos, updateRollPhotos] = useState(null);

  const fetchCat = useCallback(async () => {
    try {
      Axios.defaults.headers.common['x-api-key'] =
        '2c7e068b-6c10-4846-847c- a50e06b2baa7';
      const {status, data} = await Axios.get(
        'https://api.thecatapi.com/v1/images/search',
        {
          params: {limit: 15, size: 'full'},
        },
      );
      if (status === 200) {
        updateRollPhotos(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCat();
  }, [fetchCat]);

  return (
    <ApiContext.Provider
      value={{
        rollPhotos,
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export default LoadApi;

type LApi = {
  rollPhotos: Array,
};

export const useApiInformation = (): LApi => {
  const context = useContext(ApiContext);

  if (context === undefined) {
    throw new Error('useUserInformation debe ser usado dentro de LoadApi');
  }

  return context;
};
