import React from 'react';

const Author = (props) => {
    const {profileImg} = props;
    return (
        <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
            <dd className="author"><img src={profileImg} alt=""/> Chilli</dd>
            <dt className="a11y-hidden">Created</dt>
            <dd className="created">2022.05.25</dd>
        </dl>
    );
};

export default Author;
