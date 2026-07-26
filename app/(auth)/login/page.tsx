"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Playfair_Display } from "next/font/google"
import { useAuth } from "@/hooks/use-auth"
import { login as mockLogin } from "@/lib/mock-api/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Box } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function LoginPage() {
  const [email, setEmail] = useState("alex@mekorita.dev")
  const [password, setPassword] = useState("password123")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const user = await mockLogin(email, password)
      login(user)
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Link href="/" className="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 p-1">
              <img src="/logoPng.png" alt="Mekorita" className="h-full w-full object-contain" />
            </div>
            <span className="text-3xl font-bold tracking-tight text-[#1a2b2b]">Mekorita</span>
          </Link>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Welcome back. Please enter your details.
            </p>
          </div>

          <div className="mt-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block bg-muted">
        <div 
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: 'url("/bg.png")' }}
        >
          {/* Removed the blur overlay per user request */}
          <div className="relative z-10 text-center p-8">
            <h2 className={`${playfair.className} text-5xl font-bold text-[#111c1c] mb-4 drop-shadow-md`}>
              Build the future of software.
            </h2>
            <p className="text-lg text-[#1a2b2b]/80 max-w-lg mx-auto drop-shadow-sm font-medium">
              Join thousands of engineers building scalable, reliable, and beautiful products on Mekorita.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
