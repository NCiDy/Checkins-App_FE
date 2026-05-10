"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import { authService } from "@/modules/auth/services/auth.service";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await authService.login({
      email,
      password,
    });

    console.log("KẾT QUẢ LOGIN:", res);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      
      {/* CARD LOGIN */}
      <Card className="w-full max-w-md md:max-w-lg lg:max-w-xl shadow-xl rounded-2xl">
        
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">
            Đăng nhập
          </CardTitle>
          <p className="text-sm text-gray-500">
            Đăng nhập bằng email và mật khẩu
          </p>
        </CardHeader>

        <CardContent className="space-y-4">

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

          {/* BUTTON */}
          <Button className="w-full mt-2" onClick={handleLogin}>
            Đăng nhập
          </Button>

          {/* REGISTER */}
          <div className="text-center text-sm text-gray-600 mt-4">
            Chưa có tài khoản?{" "}
            <Link
              href="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Đăng ký
            </Link>
          </div>

        </CardContent>
      </Card>

    </div>
  );
}