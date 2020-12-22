import "./DivBar.css";

const ChatDivTo = (props) => {
  return (
    <>
      {/* current user */}
      <div className="messageContainer justifyEnd">
        <button className="btn"></button>
        <p className="sentText pr-10"></p>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{`${props.messagePayload.message}`}</p>
          {props.messagePayload.translatedMessage ? (
            <p className="translatedMessageText colorWhite">{`Translation:[${props.messagePayload.translatedMessage}]`}</p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ChatDivTo;
