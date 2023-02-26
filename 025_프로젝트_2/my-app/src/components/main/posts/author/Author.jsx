import React from 'react';

const Author = (props) => {
    const { profileImg, userName, created } = props;
    return (
        <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
            <dd className="author"><img src={profileImg} alt=""/> {userName}</dd>
            <dt className="a11y-hidden">Created</dt>
            <dd className="created">{created}</dd>
        </dl>
    );
};

export default Author;
