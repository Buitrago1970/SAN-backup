export const API_URL = process.env.API_URL || 'https://backendsan.herokuapp.com';
/**
 * 
 * @param {any} image 
 * @returns 
 */

export const fromImageToUrl = (image) => {
    if(!image) {
        return "https://san-ecommerce.s3.amazonaws.com/thumbnail_image_not_found_scaled_1150x647_8fc97ab876.png?width=1150&height=647";
    }
    let urlImage = image.attributes.url

    if(urlImage.indexOf("/") === 0) {
        return `${urlImage}`;
    }
    return urlImage;


}