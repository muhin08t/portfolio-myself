import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
    const location = useLocation();
    const { book } = location.state || {};
    console.log(book);
    return (
        <div>
            <h2>Book details page</h2>
        </div>
    );
};

export default BookDetails;