import hkImage from "@/assets/hk.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Brain,Book } from "lucide-react";

const roles = [
  { value: "frontend", label: "Frontend Developer" },
  { value: "backend", label: "Backend Developer" },
  { value: "fullstack", label: "Full Stack Developer" },
  { value: "devops", label: "DevOps Engineer" },
  { value: "mobile", label: "Mobile Developer" },
];

const levels = [
  { value: "intern", label: "Thực tập sinh" },
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Mid-Level" },
  { value: "senior", label: "Senior" },
  { value: "lead", label: "Lead" },
];

export function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="text-white space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Luyện tập phỏng vấn <br />
            <span className="text-blue-400">với AI</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Nền tảng phỏng vấn thử với trí tuệ nhân tạo giúp bạn tự tin hơn.
            Nhận phản hồi chi tiết theo thời gian thực và nâng cao kỹ năng phỏng
            vấn của bạn.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">
                    <Brain />
                </span>
              </div>
              <div>
                <p className="text-sm text-slate-400">Phản hồi</p>
                <p className="font-semibold">Thời gian thực</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">
                    <Book />
                </span>
              </div>
              <div>
                <p className="text-sm text-slate-400">Luyện tập</p>
                <p className="font-semibold">Không giới hạn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <Card className="bg-slate-800 border-slate-700 shadow-2xl">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl text-white">
              Bắt đầu phỏng vấn
            </CardTitle>
            <p className="text-slate-400 text-sm">
              Chọn vị trí và kinh nghiệm của bạn
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="role" className="text-slate-300">
                Vị trí ứng tuyển
              </Label>
              <Select>
                <SelectTrigger
                  id="role"
                  className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
                >
                  <SelectValue placeholder="Chọn vị trí của bạn" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  {roles.map((role) => (
                    <SelectItem
                      key={role.value}
                      value={role.value}
                      className="text-white focus:bg-slate-600 focus:text-white"
                    >
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="level" className="text-slate-300">
                Cấp độ kinh nghiệm
              </Label>
              <Select>
                <SelectTrigger
                  id="level"
                  className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
                >
                  <SelectValue placeholder="Chọn cấp độ của bạn" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  {levels.map((level) => (
                    <SelectItem
                      key={level.value}
                      value={level.value}
                      className="text-white focus:bg-slate-600 focus:text-white"
                    >
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg">
              🚀 Bắt đầu phỏng vấn ngay
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
