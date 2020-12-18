import SpeechToText from 'speech-to-text';

export default class Stt{
  state = {
    error: '',
    interimText: '',
    finalisedText: [],
    listening: false,
    language: 'en-US'
  };

  onAnythingSaid = text => {
    this.setState({ interimText: text });
  };

  onEndEvent = () => {
    if (this.listening) {
      this.setState({ listening: false });
    } else  {
      this.setState({ listening: true });
      this.startListening();
    }
  };

  onFinalised = text => {
    this.setState({
      finalisedText: [text, ...this.state.finalisedText],
      interimText: ''
    });
  };

  startListening = () => {
    try {
      this.listener = new SpeechToText(
        this.onFinalised,
        this.onEndEvent,
        this.onAnythingSaid,
        this.state.language
      );
      this.listener.startListening();
      this.setState({ listening: true });
    } catch (err) {
      console.log('yoyoy');
      console.log(err);
    }
  };

  stopListening = () => {
    this.listener.stopListening();
    this.setState({ listening: false });
  };
  
}