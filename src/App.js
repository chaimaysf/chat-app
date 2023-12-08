import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/chatFeed"
import "./app.css";

const App = () => {
  return (
    <ChatEngine
        height="100vh"
        projectID="ca5ac99b-dffc-4541-b924-2de90b407e46"
        userName="shaya"
        userSecret="1234"
        renderChatFeed={(chatAppProps)=> <ChatFeed {... chatAppProps}/>}
    />
  );  
}

export default App;