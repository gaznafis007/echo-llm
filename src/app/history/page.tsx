"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaSearch, FaTrash, FaEllipsisH, FaCalendarAlt, FaDownload, FaFilter, FaStar, FaRegStar } from "react-icons/fa"

export default function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Sample chat history data
  const chatHistory = [
    {
      id: "1",
      title: "Resume Writing Tips",
      preview: "I need help writing a resume for a software engineering position...",
      date: "2 hours ago",
      starred: true,
    },
    {
      id: "2",
      title: "Creative Writing Prompts",
      preview: "Can you give me some creative writing prompts for a science fiction story?",
      date: "Yesterday",
      starred: false,
    },
    {
      id: "3",
      title: "Python Code Debugging",
      preview: "I have an issue with my Python code. It keeps giving me an IndexError...",
      date: "2 days ago",
      starred: true,
    },
    {
      id: "4",
      title: "Travel Recommendations",
      preview: "I'm planning a trip to Japan. What are some must-visit places?",
      date: "1 week ago",
      starred: false,
    },
    {
      id: "5",
      title: "Meal Planning Ideas",
      preview: "Can you help me create a weekly meal plan for a vegetarian diet?",
      date: "2 weeks ago",
      starred: false,
    },
    {
      id: "6",
      title: "Workout Routine",
      preview: "I need a home workout routine that doesn't require equipment...",
      date: "3 weeks ago",
      starred: false,
    },
  ]

  const filteredHistory = chatHistory.filter(
    (chat) =>
      chat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.preview.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="p-4 flex justify-between items-center border-b bg-white border-gray-200">
          <h1 className="text-xl font-bold text-slate-800">Chat History</h1>
          <Link href="/sign-in">
            <Button
              variant="primary"
              size="md"
              className="relative overflow-hidden group bg-purple-600 text-white hover:bg-purple-700"
            >
              <span className="relative z-10">Sign In</span>
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </Link>
        </header>

        <div className="p-4 border-b bg-gray-100 border-gray-200 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border text-gray-600 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex gap-2">
            <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
              <FaFilter className="text-gray-600" />
              <span className="hidden sm:inline text-slate-800">Filter</span>
            </button>
            <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
              <FaCalendarAlt className="text-gray-600" />
              <span className="hidden sm:inline text-slate-800">Date</span>
            </button>
            <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
              <FaDownload className="text-gray-600" />
              <span className="hidden sm:inline text-slate-800">Export</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 bg-gradient-to-br from-gray-50 to-white">
          {filteredHistory.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <FaSearch className="w-12 h-12 mb-4 text-gray-300" />
              <p className="text-lg font-medium">No conversations found</p>
              <p className="text-sm">Try adjusting your search terms</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredHistory.map((chat) => (
                <div
                  key={chat.id}
                  className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-lg text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                      {chat.title}
                    </h3>
                    <div className="flex gap-2">
                      <button className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                        {chat.starred ? <FaStar className="text-yellow-500" /> : <FaRegStar />}
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                        <FaEllipsisH />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{chat.preview}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{chat.date}</span>
                    <button className="p-1 hover:text-red-500 transition-colors duration-300">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

