import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { FeatureCard } from "@/components/feature-card"

import Link from "next/link"
import {
  FaLightbulb,
  FaFileAlt,
  FaTrophy,
  FaHashtag,
  FaRegClock,
  FaEllipsisH,
  FaRobot,
  FaChevronDown,
} from "react-icons/fa"
import { ChatInput } from "@/components/chat-input"

export default function Home() {
  const features = [
    {
      title: "Unlock Your Creative Flow",
      description:
        "Receive custom prompts that reflect your writing style, helping you push past creative blocks and spark new ideas for your projects.",
      icon: <FaLightbulb className="w-6 h-6" />,
    },
    {
      title: "Build a Resume That Shines",
      description:
        "Craft a resume tailored to highlight your experience and match the job you want, designed to grab the attention of potential employers.",
      icon: <FaFileAlt className="w-6 h-6" />,
    },
    {
      title: "Set a Challenge That Transforms You",
      description:
        "Create a personalized challenge based on your goals and habits, designed to push you out of your comfort zone and help you grow.",
      icon: <FaTrophy className="w-6 h-6" />,
    },
    {
      title: "Write Irresistible Social Content",
      description:
        "Generate catchy, clever captions for your photos or videos, perfect for increasing engagement and sparking conversations.",
      icon: <FaHashtag className="w-6 h-6" />,
    },
  ]

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="p-4 flex justify-end border-b bg-white">
          <Link href="/sign-in">
            <Button variant="primary" size="md" className="relative overflow-hidden group bg-purple-600 text-white">
              <span className="relative z-10">Sign In</span>
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </Link>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4 floating">
                  <FaRobot className="w-10 h-10" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
                Hello There! 👋 How can I assist you today?
              </h1>
              <p className="text-gray-600 text-lg">
                Your personal AI assistant is ready to help—ask me anything, anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
              ))}
            </div>

            <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-2 pulse">
                  <FaRobot className="w-5 h-5" />
                </div>
                <span className="font-medium">EchoGPT</span>
                <FaChevronDown className="w-4 h-4 ml-2" />
              </div>

              <ChatInput />

              <div className="flex justify-end mt-4">
                <button className="p-2 rounded-full hover:bg-gray-100 mr-2 text-gray-600 hover:text-primary transition-colors duration-300">
                  <FaRegClock className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-colors duration-300">
                  <FaEllipsisH className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

