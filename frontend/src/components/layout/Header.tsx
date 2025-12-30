import { Link } from "react-router-dom";
import { Bot } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="container flex justify-between items-center mx-auto px-6 py-4">
        <Link
          to="/"
          className="flex gap-3 items-center hover:opacity-80 transition-opacity"
        >
          <Bot className="text-blue-400" size={32} />
          <span className="text-xl font-bold text-white">
            AI Mock Interview
          </span>
        </Link>

        <Button className="bg-blue-600 hover:bg-blue-700 font-semibold text-white">
          Đăng nhập
        </Button>
      </div>
    </header>
  );
}
