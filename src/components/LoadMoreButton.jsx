import PropTypes from 'prop-types';

export const LoadMoreButton = ({ handleUpdateOffset }) => {
    return (
        <>
            <div className="m-auto w-fit mt-2 mb-2">
                <button
                    className="pb-2 px-4 pt-2 bg-button rounded-sm flex items-center"
                    onClick={handleUpdateOffset}>
                    Load more</button>
            </div>
        </>
    )
}

LoadMoreButton.propTypes = {
    handleUpdateOffset: PropTypes.func.isRequired
}
