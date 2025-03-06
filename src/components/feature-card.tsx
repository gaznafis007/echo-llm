import type { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-slate-800">
      {icon && (
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-purple-600 transition-colors duration-300">
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

