"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  FaLightbulb,
  FaFileAlt,
  FaCode,
  FaImage,
  FaMusic,
  FaChartBar,
  FaSearch,
  FaPlus,
  FaBookmark,
  FaRegBookmark,
  FaArrowRight,
} from "react-icons/fa"

export default function TasksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Sample AI tasks
  const categories = [
    { id: "all", name: "All Tasks" },
    { id: "writing", name: "Writing" },
    { id: "coding", name: "Coding" },
    { id: "creative", name: "Creative" },
    { id: "data", name: "Data Analysis" },
  ]

  const tasks = [
    {
      id: "1",
      title: "Write a Blog Post",
      description: "Generate a well-structured blog post on any topic with proper formatting and SEO optimization.",
      category: "writing",
      icon: <FaFileAlt className="w-6 h-6" />,
      popular: true,
      saved: true,
    },
    {
      id: "2",
      title: "Code Explanation",
      description:
        "Upload code snippets and get detailed explanations of how they work, with suggestions for improvements.",
      category: "coding",
      icon: <FaCode className="w-6 h-6" />,
      popular: true,
      saved: false,
    },
    {
      id: "3",
      title: "Creative Story Generator",
      description: "Generate creative short stories based on prompts, themes, or characters you provide.",
      category: "creative",
      icon: <FaLightbulb className="w-6 h-6" />,
      popular: false,
      saved: true,
    },
    {
      id: "4",
      title: "Data Visualization Helper",
      description:
        "Get recommendations for the best ways to visualize your data and generate code for charts and graphs.",
      category: "data",
      icon: <FaChartBar className="w-6 h-6" />,
      popular: false,
      saved: false,
    },
    {
      id: "5",
      title: "Image Description Generator",
      description: "Generate detailed descriptions of images for accessibility or content creation purposes.",
      category: "creative",
      icon: <FaImage className="w-6 h-6" />,
      popular: true,
      saved: false,
    },
    {
      id: "6",
      title: "Song Lyrics Writer",
      description: "Create original song lyrics based on themes, styles, or artists you specify.",
      category: "creative",
      icon: <FaMusic className="w-6 h-6" />,
      popular: false,
      saved: false,
    },
    {
      id: "7",
      title: "Resume Builder",
      description: "Create a professional resume tailored to specific job positions or industries.",
      category: "writing",
      icon: <FaFileAlt className="w-6 h-6" />,
      popular: true,
      saved: true,
    },
    {
      id: "8",
      title: "Code Refactoring",
      description: "Improve and optimize your code for better performance and readability.",
      category: "coding",
      icon: <FaCode className="w-6 h-6" />,
      popular: false,
      saved: false,
    },
  ]

  const filteredTasks = tasks.filter(
    (task) =>
      (activeCategory === "all" || task.category === activeCategory) &&
      (task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const toggleSaved = (id: string) => {
    // In a real app, this would update state or make an API call
    console.log(`Toggle saved for task ${id}`)
  }

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="p-4 flex justify-between items-center border-b bg-white border-gray-200">
          <h1 className="text-xl font-bold text-zinc-800">AI Tasks</h1>
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

        <div className="p-4 border-b bg-white border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search AI tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-gray-600 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="bg-white border-b border-gray-200 overflow-x-auto">
          <div className="flex p-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 mx-1 rounded-lg transition-colors duration-300 whitespace-nowrap ${
                  activeCategory === category.id ? "bg-purple-600 text-white" : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            {filteredTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <FaSearch className="w-12 h-12 mb-4 text-gray-300" />
                <p className="text-lg font-medium">No tasks found</p>
                <p className="text-sm">Try adjusting your search or category filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex justify-between">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                        {task.icon}
                      </div>
                      <button
                        onClick={() => toggleSaved(task.id)}
                        className="text-gray-400 hover:text-purple-600 transition-colors duration-300"
                      >
                        {task.saved ? <FaBookmark className="text-purple-600" /> : <FaRegBookmark />}
                      </button>
                    </div>

                    <h3 className="font-semibold text-lg mb-2 text-zinc-800 group-hover:text-purple-600 transition-colors duration-300">
                      {task.title}
                      {task.popular && (
                        <span className="ml-2 text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">{task.description}</p>

                    <button className="text-purple-600 font-medium text-sm flex items-center hover:text-purple-700 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
                      Try this task
                      <FaArrowRight className="ml-1 text-xs" />
                    </button>
                  </div>
                ))}

                {/* Create Custom Task Card */}
                <div className="border border-dashed border-gray-300 rounded-xl p-6 bg-white/50 hover:bg-white hover:border-purple-300 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-purple-600">
                    <FaPlus className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-600">Create Custom Task</h3>
                  <p className="text-gray-600 text-sm">
                    Design your own AI task with custom parameters and instructions
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

