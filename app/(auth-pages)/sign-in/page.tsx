import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex flex-col md:flex-row bg-[#f7f2ed]">
      {/* Mobile Header */}
      <div className="flex md:hidden bg-[#1d1d1d] py-4 px-6 justify-center items-center rounded-b-2xl">
        <span className="text-white text-xl font-bold">finance</span>
      </div>

      {/* Sidebar illustration for desktop only */}
      <div className="hidden md:flex w-1/2 bg-[#1d1d1d] items-center justify-center rounded-r-3xl">
        <Image
          src="/Sidebar.svg"
          alt="Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Login form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <form className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6">Login</h1>

          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </Label>
              <Input
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </Label>
              <div className="relative">
                <Input
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your password"
                />
                {/* Static eye icon for now */}
                <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <SubmitButton
              pendingText="Signing In..."
              formAction={signInAction}
              className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-black/90 transition"
            >
              Login
            </SubmitButton>

            <FormMessage message={searchParams} />
          </div>

          <p className="mt-6 text-sm text-center text-gray-500">
            Need to create an account?{" "}
            <Link href="/sign-up" className="font-medium text-black underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
