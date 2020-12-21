import "./DivBar.css";

const ChatDivFrom = (props) => {
  return (
    <>
      <div className="messageContainer justifyStart">
        <button className="btn"></button>
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{`${props.messagePayload.message}`}</p>
          {props.messagePayload.translatedMessage ? (
            <p className="translatedMessageText colorDark">{`Translation:[${props.messagePayload.translatedMessage}]`}</p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ChatDivFrom;
