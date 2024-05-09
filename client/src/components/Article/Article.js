

const Article = (props) => {
    const {title} = {props};

    retrun (
        <div className='article' >
            {title}
        </div>
    )
}

export default Article