import { SenderChat } from "./SenderChat";
import { ReceiverChat } from "./ReceiverChat";
import { BsPaperclip } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { io } from "socket.io-client";
import { useEffect, useState, useRef } from "react";

export const ChatDisplay = () => {
  const [socket, setSocket] = useState(null);
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const user = localStorage.getItem("username");
  const endOfMessages = useRef(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    newSocket.on("chat", (chats) => {
      setChats(chats);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const addMessage = () => {
    if (message.trim() === "") {
      return;
    }

    const newChat = {
      message: message,
      user: user,
    };

    const updatedChats = [...chats, newChat];
    setChats(updatedChats);
    sendSocket(updatedChats);
    setMessage("");
  };

  const sendSocket = (chat) => {
    if (socket) {
      socket.emit("chat", chat);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addMessage();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    endOfMessages.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col h-[75dvh] px-4 gap-4 overflow-x-hidden overflow-y-auto mb-10">
        {chats.map((chat, index) => {
          if (chat.user === user) {
            return (
              <SenderChat key={index} message={chat.message} username={"you"} />
            );
          } else {
            return (
              <ReceiverChat
                key={index}
                message={chat.message}
                username={chat.user}
              />
            );
          }
        })}
        <div ref={endOfMessages} /> 
      </div>
      <div className="flex space-x-4 items-center justify-center">
        <div className="border rounded-2xl w-[600px] flex items-center">
          <span className="px-3">
            <BsPaperclip />
          </span>
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onKeyDown={handleKeyPress}
            className="flex-1 h-10 border-none outline-none"
            type="text"
            placeholder="Type your message ..."
          />
        </div>
        <div className="">
          <button
            onClick={addMessage}
            className="border w-10 h-10 flex items-center justify-center rounded-2xl cursor-pointer"
          >
            <FaRegPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
};
