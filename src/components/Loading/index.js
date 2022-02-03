import "./index.css"

const Loading = (props) => {
    const { toggleLoading } = props;
    return (
        <div className="overlay" style={toggleLoading ? {display: "block"} : {display: "none"}}>
            <div className="loader"></div>
        </div>
    )
}

export default Loading;