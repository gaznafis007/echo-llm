import { FaRobot, FaUser } from "react-icons/fa"

export interface Message {
  id: string
  content: string
  sender: "user" | "model"
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === "model"

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}>
      <div className={`flex max-w-[80%] ${isBot ? "flex-row" : "flex-row-reverse"}`}>
        <div
          className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${isBot ? "bg-primary text-white mr-3" : "bg-gray-200 text-gray-700 ml-3"}`}
        >
          {isBot ? <FaRobot className="w-5 h-5" /> : <FaUser className="w-5 h-5" />}
        </div>
        <div className={`py-2 px-4 rounded-2xl ${isBot ? "bg-gray-100 text-gray-800" : "bg-purple-600 text-white"}`}>
          <p className="text-sm">{message.content}</p>
          <p className="text-xs mt-1 opacity-70">
            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
      </div>
    </div>
  )
}

