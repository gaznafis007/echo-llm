"use client"

import type React from "react"

import { useState } from "react"
import { FaRegPaperPlane, FaMicrophone, FaRegSmile, FaPaperclip } from "react-icons/fa"

interface ChatInputProps {
  onSendMessage: (message: string) => void
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message)
      setMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center border rounded-full bg-white p-2 shadow-sm hover:shadow-md transition-shadow duration-300">
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors duration-300">
          <FaRegSmile className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-400 text-gray-600 hover:text-primary transition-colors duration-300">
          <FaPaperclip className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question..."
          className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-gray-600"
        />
        {message ? (
          <button
            onClick={handleSendMessage}
            className="p-2 rounded-full bg-primary text-gray-600 hover:bg-primary/90 transition-colors duration-300 animate-pulse"
          >
            <FaRegPaperPlane className="w-5 h-5" />
          </button>
        ) : (
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors duration-300">
            <FaMicrophone className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  )
}

