export const fetchRequestCreator = async url => {
    return fetch(url, {
                method: 'GET',
            });
}