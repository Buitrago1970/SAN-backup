export function setAddress(address) {
    localStorage.setItem('address', address.address);
    localStorage.setItem('descriptionHouse', address.descriptionHouse);
    localStorage.setItem('phone', address.phone);
}
export function getAddress() {
    const address = {
        'address': localStorage.getItem('address'),
        'descriptionHouse': localStorage.getItem('descriptionHouse'),
        'phone': localStorage.getItem('phone')
    }
    return address

}