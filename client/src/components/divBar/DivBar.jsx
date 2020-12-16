import './DivBar.css';

const DivBar = () => {

    return (
        <>
        {/* current user */}
            <div className="messageContainer justifyEnd">
                <button className="btn"></button>
                <p className="sentText pr-10"></p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite"></p>
                </div>
            </div>
        {/* another user */}
            <div className="messageContainer justifyStart">
            <button className="btn"></button>
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark"></p>
                </div>
                <p className="sentText pl-10 "></p>
            </div>
        </>
    );
}

export default DivBar;

