import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category, offset) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pagination, setPagination] = useState(0);

    const getImages = async () => {
        setIsLoading(true);
        const newImages = await getGifs(category, offset)
        setImages([...images, ...newImages.gifs]);
        setPagination(newImages.pagination);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [offset])

    return {
        images,
        isLoading,
        pagination
    }
}