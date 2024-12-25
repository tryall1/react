import {cryptoAssets} from './data'

export async function fetchCrypto() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': 'WmQ4BtKE6VFQrsI7hDeG4Ti+9nAP8jh4KgtgsCbK/5s='
        }
    };

    try {
        const response = await fetch('https://openapiv1.coinstats.app/coins', options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; 
    } catch (err) {
        console.error('Error fetching crypto data:', err);
        return null;  
    }
}


export function fetchAssets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 2)
    })
}