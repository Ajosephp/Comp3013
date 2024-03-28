import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "./actions";
import { ErrorBox } from "@/components/ErrorBox";

export default function LoginPage({ searchParams }: any) {
  return (
    <div className="flex items-center min-h-screen p-6 border-2 border-gray-200">
      <div className="w-full max-w-sm space-y-4 mx-auto">
        <form action={login} key={Math.random() * 100}>
          {searchParams.error ? <ErrorBox msg={searchParams.error} /> : null}
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              name="username"
              id="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              id="password"
              placeholder="Password"
              required
              type="password"
            />
          </div>
          <Button className="w-full bg-blue-500 text-white">Login</Button>
        </form>
      </div>
    </div>
  );
}
