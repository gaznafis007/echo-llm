import { Sidebar } from "@/components/sidebar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaRocket, FaBrain, FaRobot, FaLightbulb, FaCheck, FaStar, FaShoppingCart, FaArrowRight } from "react-icons/fa"

export default function StorePage() {
  // Sample store items
  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Basic access to EchoGPT with limited features",
      features: [
        "Up to 20 messages per day",
        "Basic AI capabilities",
        "Standard response time",
        "Web-based access only",
      ],
      recommended: false,
      buttonText: "Current Plan",
      buttonVariant: "outline",
      disabled: true,
    },
    {
      id: "plus",
      name: "Plus",
      price: "$10",
      period: "per month",
      description: "Enhanced access with more features and capabilities",
      features: [
        "Unlimited messages",
        "Advanced AI capabilities",
        "Priority response time",
        "Mobile app access",
        "File uploads up to 100MB",
      ],
      recommended: true,
      buttonText: "Upgrade Now",
      buttonVariant: "primary",
      disabled: false,
    },
    {
      id: "pro",
      name: "Pro",
      price: "$30",
      period: "per month",
      description: "Full access to all features for professional use",
      features: [
        "Everything in Plus",
        "Custom AI model training",
        "API access",
        "Team collaboration features",
        "Advanced analytics",
        "Dedicated support",
      ],
      recommended: false,
      buttonText: "Upgrade to Pro",
      buttonVariant: "outline",
      disabled: false,
    },
  ]

  const addons = [
    {
      id: "tokens",
      name: "Extra Tokens",
      price: "$5",
      description: "Add 5,000 additional tokens to your account",
      icon: <FaRocket className="w-6 h-6" />,
    },
    {
      id: "storage",
      name: "Additional Storage",
      price: "$3",
      description: "Add 10GB of storage for file uploads and history",
      icon: <FaBrain className="w-6 h-6" />,
    },
    {
      id: "models",
      name: "Premium Models",
      price: "$15",
      description: "Access to specialized AI models for specific tasks",
      icon: <FaRobot className="w-6 h-6" />,
    },
    {
      id: "plugins",
      name: "Plugin Bundle",
      price: "$8",
      description: "Access to premium plugins and integrations",
      icon: <FaLightbulb className="w-6 h-6" />,
    },
  ]

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="p-4 flex justify-between items-center border-b bg-white border-gray-200">
          <h1 className="text-xl font-bold text-purple-600">EchoGPT Store</h1>
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

        <div className="flex-1 overflow-auto p-4 md:p-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
                Upgrade Your EchoGPT Experience
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the plan that&apos;s right for you and unlock the full potential of EchoGPT with advanced features and
                capabilities.
              </p>
            </div>

            {/* Subscription Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`border rounded-xl p-6 bg-white transition-all duration-300 hover:shadow-lg relative ${plan.recommended ? "border-purple-500 shadow-md" : "border-gray-200"}`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 text-zinc-800">{plan.name}</h3>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl font-bold text-zinc-800">{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.buttonVariant as any}
                    fullWidth
                    disabled={plan.disabled}
                    className={`mt-auto ${plan.buttonVariant === "primary" ? "bg-purple-600 text-white hover:bg-purple-700" : "border border-gray-200 hover:bg-gray-50"}`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Add-ons & Extras</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {addons.map((addon) => (
                  <div
                    key={addon.id}
                    className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                      {addon.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-purple-600 transition-colors duration-300 text-zinc-800">
                      {addon.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{addon.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg text-zinc-800">{addon.price}</span>
                      <button className="p-2 rounded-full hover:bg-purple-100 text-purple-600 transition-colors duration-300">
                        <FaShoppingCart />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-gradient-to-r from-purple-600 to-violet-500 rounded-xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold mb-2">Enterprise Solutions</h2>
                  <p className="opacity-90 max-w-xl">
                    Need a custom solution for your organization? Our enterprise plans offer dedicated support, custom
                    integrations, and advanced security features.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 transition-colors duration-300 flex items-center gap-2"
                >
                  <span>Contact Sales</span>
                  <FaArrowRight />
                </Button>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-8 text-gray-600">What Our Users Say</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-6 h-6" />
                  ))}
                </div>
                <p className="w-full text-gray-600 mt-2">
                  &quot;EchoGPT Plus has completely transformed how I work. The advanced features are worth every penny!&quot;
                </p>
                <p className="text-sm font-medium mt-2 text-gray-600">— Sarah K., Content Creator</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

