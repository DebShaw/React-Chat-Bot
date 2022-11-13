import "./App.css";
import image from "./img/bot_image.jpg";
import { useRef } from "react";

function App() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  // const day = date.getDay();
  // const month = date.getMonth();
  // const year = date.getFullYear();

  // const days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  const time = `${hours}:${seconds}`;
  
  const checkStatus = (e) => {
    const status = document.querySelector(".status");
    status.innerHTML = "Active";
    status.style.color = "green";
  };
  const handleEnter = (e) => {
    if(e.key === 'Enter')
    {
      handleInput();
    }
  }
  const handleInput = () => {

    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    document.querySelector("#message2").style.display = "block";
    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense|bastard"];
    let words = new RegExp(badwords);
    let welcome = ["hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",];
    let words2 = new RegExp(welcome);
    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    let thanks = ["Thanks|thanks|thank you|thank you very much|Thank you very much",];
    let words4 = new RegExp(thanks);
    let how = ["How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",];
    let words5 = new RegExp(how);
    let good = ["That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",];
    let words6 = new RegExp(good);
    let response = ["I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",];
    let words7 = new RegExp(response);

    if (words.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Please do not use bad words";
        inputRef.value = ""; 
      }, 2000);
    }
    else if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello There how are you doing today?";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }
    else if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = ""; 
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }
    else if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = ""; 
      }, 2000);
    }
    else if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }
    else if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        inputRef.value = ""; 
      }, 1000);
    }
    else if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = ""; 
      }, 2000);
    }
    else {
      getBotMessage.innerText = "Typing...";
      setTimeout(()=> {
        getBotMessage.innerText = "Sorry! Didn't get that. Please type again."
        inputRef.value = "";
      },2000);
    }
    getHumanMessage.innerText = inputRef.value; 
  };
  return (
    <div className="App" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className="status">Active</div>
              <div className="time" style={{fontSize: "10px", marginTop: "5px"}} >{time}</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  id="message1"
                  ref={botmessage}
                >{hours<12? "Good Morning":"Good Evening"} Sir, how may I help you?</div>
                <div
                  style={{display:"none"}}
                  className="human-message"
                  id="message2"
                  ref={humanMessage}
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message"
                  ref={input}
                  onKeyPress={handleEnter}
                />
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane" style={{marginRight: "5px"}}></i>Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
