import Link from "next/link"
import { FaRobot } from "react-icons/fa"

interface LogoProps {
  size?: "sm" | "md" | "lg"
}

export function Logo({ size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  }

  const iconSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <Link href="/" className={`flex items-center ${sizeClasses[size]} font-bold text-primary group`}>
      <div className="w-10 h-10 mr-2 rounded-lg bg-primary flex items-center justify-center text-white transition-all duration-300 group-hover:rotate-6">
        <FaRobot className={`${iconSizes[size]}`} />
      </div>
      <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">EchoGPT</span>
    </Link>
  )
}

