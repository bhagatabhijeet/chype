import './DivBar.css';

const ChatDivFrom = (props) => {

    return (
        <>
        {/* current user */}
            {/* <div className="messageContainer justifyEnd">
                <button className="btn"></button>
                <p className="sentText pr-10"></p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{props.text}</p>
                </div>
            </div> */}
        {/* another user */}
            <div className="messageContainer justifyStart">
            <button className="btn"></button>
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{`${props.messagePayload.message}`}</p>
                    <p className="translatedMessageText colorDark">{`Translation:[${props.messagePayload.translatedMessage}]`}</p>
                </div>
                {/* <p className="sentText pl-10 ">{props.text}</p> */}
            </div>
        </>
    );
}

export default ChatDivFrom;

