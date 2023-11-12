import { GifGridItem } from "./GifGridItem";
import { useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LoadMoreButton } from "./LoadMoreButton";

import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const [offset, setOffset] = useState(0)
    const { images, isLoading, pagination } = useFetchGifs(category, offset);

    const handleUpdateOffset = () => {
        setOffset(offset + (11))
    }

    return (
        <>
            <h3 className="text-category text-xl mb-2.5 mt-3 font-extrabold">{category}</h3>

            <div>
                <div className="card-grid flex flex-wrap">

                    {isLoading && <div className="backdrop-blur-sm w-full h-full fixed top-0 left-0 dark:bg-neutral-900/80 bg-white/80 z-50">
                        <div className="flex justify-center items-center mt-[50vh]">
                            <div className="relative inline-flex">
                                <div className="w-8 h-8 bg-color rounded-full"></div>
                                <div className="w-8 h-8 bg-color rounded-full absolute top-0 left-0 animate-ping"></div>
                                <div className="w-8 h-8 bg-color rounded-full absolute top-0 left-0 animate-pulse"></div>
                            </div>
                        </div>
                    </div>}

                    {images.map((image) => (
                        <GifGridItem key={image.id} {...image} />
                    ))}

                </div>

                {pagination.total_count > 0 &&
                    <LoadMoreButton handleUpdateOffset={handleUpdateOffset} />
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
