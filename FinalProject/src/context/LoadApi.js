import React, {useCallback, useContext, useEffect, useState} from 'react';
import Axios from 'axios';

export const ApiContext = React.createContext();

const LoadApi = ({children}) => {
  const [rollPhotos, updateRollPhotos] = useState(null);
  const [categories, updateCategories] = useState(null);
  const [selectedCategory, updateSelectedCategory] = useState({id: 2});
  const [images, updateImages] = useState(1);
  const [paginationCount, updatePaginationCount] = useState(0);

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

  const getCategories = useCallback(async () => {
    try {
      Axios.defaults.headers.common['x-api-key'] =
        '2c7e068b-6c10-4846-847c- a50e06b2baa7'; // Replace this with your API Key, as it's set to defaults it will be used from now onwards

      let response = await Axios.get(
        'https://api.thecatapi.com/v1/categories/',
      );
      updateCategories(response.data);

      // pick one to display initially
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getImages = useCallback(async () => {
    try {
      console.log('id', selectedCategory.id);
      Axios.defaults.headers.common['x-api-key'] =
        '2c7e068b-6c10-4846-847c- a50e06b2baa7'; // Replace this with your API Key

      let query_params = {
        limit: 10,
        order: 'desc',
        page: 1 - 1,
        category_ids: selectedCategory.id,
      };

      let response = await Axios.get(
        'https://api.thecatapi.com/v1/images/search',
        {params: query_params},
      );

      updatePaginationCount(response.headers['pagination-count']);
      updateImages(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchCat();
    getCategories();
    getImages();
  }, [fetchCat, getCategories, getImages]);

  return (
    <ApiContext.Provider
      value={{
        rollPhotos,
        categories,
        getImages,
        selectedCategory,
        images,
        updateSelectedCategory,
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export default LoadApi;

type LApi = {
  rollPhotos: Array,
  categories: Array,
  getImages: Function,
  selectedCategory: Array,
  images: Array,
  updateSelectedCategory: Function,
};

export const useApiInformation = (): LApi => {
  const context = useContext(ApiContext);

  if (context === undefined) {
    throw new Error('useUserInformation debe ser usado dentro de LoadApi');
  }

  return context;
};
