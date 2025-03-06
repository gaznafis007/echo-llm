"use client"

import { useState, useRef, useEffect } from "react"
import { ChatInput } from "./chat-input"
import { ChatMessage, type Message } from "./chat-message"
import { FaRobot, FaChevronDown, FaRegClock, FaEllipsisH } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"
import { sendMessage } from "@/libs/funcs"

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate bot response after a short delay
    setTimeout(async () => {
      const botResponse = await getBotResponse(content)
      const botMessage: Message = {
        id: uuidv4(),
        content: botResponse,
        sender: "model",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  // Simple bot response logic
  const getBotResponse = async (message: string): Promise<string> => {
    const lowerMessage = message.toLowerCase()
    const response = await sendMessage(lowerMessage)
    return response
  }

  return (
    <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-[400px] text-slate-800">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-purple-600 mr-2 animate-pulse">
          <FaRobot className="w-5 h-5" />
        </div>
        <span className="font-medium">EchoGPT</span>
        <FaChevronDown className="w-4 h-4 ml-2" />
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>Send a message to start chatting</p>
          </div>
        ) : (
          messages.map((message) => <ChatMessage key={message.id} message={message} />)
        )}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} />

      <div className="flex justify-end mt-4">
        <button className="p-2 rounded-full hover:bg-gray-100 mr-2 text-gray-600 hover:text-primary transition-colors duration-300">
          <FaRegClock className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors duration-300">
          <FaEllipsisH className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

