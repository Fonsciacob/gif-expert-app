import PropTypes from 'prop-types';

export const GifGridItem = ({ url, title }) => {

    return (
        <div className="card pb-2 pr-2">
            <img src={url} alt={title} />
        </div>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
