export const fetchRequestCreator = async url => {
    return fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': 'token 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',
                },
            });
}