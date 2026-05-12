"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import { authService } from "@/modules/auth/services/auth.service";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    // check password match
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    try {
      const res = await authService.register({
        name,
        email,
        password,
      });

      localStorage.setItem("user_login", res.accessToken);

      router.push("/admin"); //Gắn tạm
    } catch (error) {
      console.error("REGISTER ERROR:", error);
      alert("Đăng ký thất bại!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">

      <Card className="w-full max-w-md md:max-w-lg lg:max-w-xl shadow-xl rounded-2xl">

        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">
            Đăng ký
          </CardTitle>
          <p className="text-sm text-gray-500">
            Tạo tài khoản mới
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label>Tên người dùng</Label>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
            />
          </div>

          {/* PASSWORD */}
          <div className="space-y-2">
            <Label>Mật khẩu</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="space-y-2">
            <Label>Xác nhận mật khẩu</Label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {/* BUTTON */}
          <Button className="w-full mt-2" onClick={handleRegister}>
            Đăng ký
          </Button>

          {/* LOGIN LINK */}
          <div className="text-center text-sm text-gray-600 mt-4">
            Đã có tài khoản?{" "}
            <Link
              href="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Đăng nhập
            </Link>
          </div>

        </CardContent>
      </Card>

    </div>
  );
}