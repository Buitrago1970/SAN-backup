export const API_URL = process.env.API_URL || 'http://localhost:1337';

export const MAGIC_PUBLIC_KEY = process.env.MAGIC_PUBLIC_KEY || 'pk_live_79E5F8702E9508A4';
/**
 * 
 * @param {any} image 
 * @returns 
 */

export const fromImageToUrl = (image) => {
    if(!image) return "/images/image-not-found.png";
    if(image.url.indexOf("/") === 0) {
        return `${API_URL}${image.url}`;
    }
    return image.url;


}