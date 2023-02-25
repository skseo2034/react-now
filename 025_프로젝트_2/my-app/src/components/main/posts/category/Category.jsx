import React from 'react';

const Category = (props) => {
    const { categories } = props;
    return (
        <dl className="category">
            <dt className="a11y-hidden">Category</dt>
            {
                categories.map(category => <dd>{category}</dd>)
            }
        </dl>
    );
};

export default Category;
