import axios from 'axios';

const API_BASE_URL = 'https://api.10minuteschool.com/discovery-service/api/v1';

export const getProductData = async (lang: 'en' | 'bn' = 'en') => {
  try {
    const response = await axios.get<{ data: unknown }>(`${API_BASE_URL}/products/ielts-course`, {
      params: { lang },
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        Accept: 'application/json',
      },
    });

    return response.data?.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return null;
  }
};
