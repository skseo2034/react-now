import './category.css';

const Category = (props) => {
    const { categories } = props;
    return (
        <dl className="category">
            <dt className="a11y-hidden">Category</dt>
            {
                categories.map((category, idx) => <dd key={idx}>{category}</dd>)
            }
        </dl>
    );
};

export default Category;
