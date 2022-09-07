export const SERVICE_API = 'http://localhost:5001';

export const appApis = {
   AUTH: '/api/v1/auth',
   ATMS: '/api/v1/atms',
};

export const CLOUDINARY_API =
   'https://res.cloudinary.com/dqvjijgb5/image/upload/v1661323143/atm/atm-card.jpg';

export const ADDRESS_ENDPOINT = {
   auth: '/api/v1/auth',
   atm: '/api/v1/atms',
};

export const headers = {
   Authorization: localStorage.getItem('accessToken') as string,
};
