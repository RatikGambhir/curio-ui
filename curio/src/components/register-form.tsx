import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import type { RegisterData } from "@/types/LoginRegisterTypes";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
    const [registerEnabled, setRegisterEnabled] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false);
    const [registerData, setRegisterData] = useState<RegisterData>({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
        setRegisterData({
            ...registerData,
            [e.target.id]: e.target.value,
        });
    }

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const isValidPassword = (password: string) => {
        return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password);
    }
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create an account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
              <div className="grid gap-3">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="username"
                    required
                    defaultValue={registerData.username}
                    onBlur={handleFormChange}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="firstName"
                    name="firstName"
                    required
                    defaultValue={registerData.firstName}
                    onBlur={handleFormChange}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="lastName"
                    name="lastName"
                    required
                    defaultValue={registerData.lastName}
                    onBlur={handleFormChange}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    defaultValue={registerData.email}
                    onBlur={handleFormChange}
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" name="password" required defaultValue={registerData.password} onBlur={handleFormChange} />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                  </div>
                  <Input id="confirmPassword" type="password" name="confirmPassword" required defaultValue={confirmPassword} onBlur={(e) => {
                    setConfirmPassword(e.target.value);
                    setRegisterEnabled(e.target.value === registerData.password);
                  }} />
                </div>
                <Button type="submit" className="w-full" disabled={!registerEnabled}>
                  Register
                </Button>
              </div>
              <div className="text-center text-sm">
                Want to try it out first?{" "}
                <a href="/home" className="underline underline-offset-4">
                  Try the demo
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-white *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking register, you have confirmed that you have read our{" "}
        <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
