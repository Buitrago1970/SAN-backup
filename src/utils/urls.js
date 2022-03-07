export const API_URL = process.env.API_URL || 'https://backendsan.herokuapp.com';
/**
 * 
 * @param {any} image 
 * @returns 
 */

export const fromImageToUrl = (image) => {
    if(!image) return "../images/image-not-found.png";
    if(image.url.indexOf("/") === 0) {
        return `${API_URL}${image.url}`;
    }
    return image.url;


}