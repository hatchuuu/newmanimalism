export const getAnime = async (resource) => {
    try {
        const anime = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/${resource}`);
        const response = await anime.json();
        return response;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch anime data');
    }
};

