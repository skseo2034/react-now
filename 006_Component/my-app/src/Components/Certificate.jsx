function Certificate(props) {
    const {title, contents} = props;
    return (
        <section>
            <h2>{title}</h2>
            <p>{contents}</p>
        </section>
    )
}

export default Certificate;