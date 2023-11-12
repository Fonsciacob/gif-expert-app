import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({ onSearch }) => {

    const [input, setInput] = useState('')

    const handleInputChange = ({ target }) => {
        setInput(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (input.trim().length <= 1) return;
        onSearch(input);
        setInput('');
    }

    return (
        <form className="mt-4" onSubmit={onSubmit}>
            <input
                className="w-full py-2 ps-4 rounded-lg shadow-sm"
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Search gif"
            />
        </form>
    )
}

AddCategory.propTypes = {
    onSearch: PropTypes.func.isRequired
}
