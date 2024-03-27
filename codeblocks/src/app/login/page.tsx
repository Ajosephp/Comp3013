import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "./actions";
import { ErrorBox } from "@/components/ErrorBox";

export default function LoginPage({ searchParams }: any) {
  const errorAlert = searchParams?.error ? (
    <ErrorBox msg="Invalid Login Credentials" />
  ) : null;
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form key={Math.random() * 100} action={login}>
        {errorAlert}
        <div className="w-full max-w-sm space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign in to your account</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Dont have an account? &nbsp;
              <Link className="underline" href="#">
                Sign up
              </Link>
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              name="username"
              id="username"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input name="password" id="password" required type="password" />
          </div>
          <Button className="w-full bg-blue-600">Sign In</Button>
          <div className="space-y-2 text-center">
            <Link className="underline" href="#">
              Forgot your password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
