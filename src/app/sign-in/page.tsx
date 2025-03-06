"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import {
  FaGoogle,
  FaTwitter,
  FaGithub,
  FaArrowLeft,
  FaCheck,
} from "react-icons/fa";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

export default function SignIn() {
  // This is a client component in Next.js, so we need to use useState
  // In a real app, you would use 'use client' directive at the top
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center p-4 relative overflow-hidden animated-bg">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-8 h-8 rounded-full border-2 border-purple-200 opacity-50 floating"></div>
        <div
          className="absolute bottom-40 left-10 w-8 h-8 rounded-full border-2 border-purple-200 opacity-50 floating"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-8 h-8 rounded-full border-2 border-purple-200 opacity-50 floating"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-8 h-8 rounded-full border-2 border-purple-200 opacity-50 floating"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-wave-pattern bg-no-repeat bg-cover opacity-10"></div>
      </div>

      {/* Back button */}
      <div className="absolute top-4 left-4">
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            <FaArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
      </div>

      {/* Sign in card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 relative z-10 hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col items-center mb-6">
          <Logo size="lg" />
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-primary font-medium hover:underline relative group"
            >
              Sign up for free
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </p>
        </div>

        <div className="space-y-4">
          <Button
            variant="primary"
            fullWidth
            leftIcon={<FaGoogle className="w-5 h-5 text-green-600" />}
            className="group"
          >
            <span className="relative text-slate-800">
              Sign in with Google
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Button>

          <Button
            variant="outline"
            fullWidth
            leftIcon={<FaXTwitter className="w-5 h-5 text-slate-800" />}
            className="group hover:border-blue-400"
          >
            <span className="relative text-slate-800">
              Sign in with Twitter
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Button>

          <Button
            variant="outline"
            fullWidth
            leftIcon={<FaGithub className="w-5 h-5 text-slate-800" />}
            className="group hover:border-gray-800"
          >
            <span className="relative text-slate-800 group-hover:text-gray-800">
              Sign in with GitHub
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Button>
        </div>

        <div className="mt-6">
          <label className="flex items-center cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <div
                className={`w-5 h-5 border rounded transition-colors duration-300 ${
                  isChecked
                    ? "bg-primary border-primary"
                    : "border-gray-300 group-hover:border-primary"
                }`}
              >
                {isChecked && (
                  <FaCheck className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
              </div>
            </div>
            <span className="ml-2 text-sm text-gray-600">
              I want to receive updates about EchoGPT
            </span>
          </label>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          By proceeding, you agree to our{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of use
          </Link>
          . Read our{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
