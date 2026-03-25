import Card from "../components/ui/Card";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-md w-full shadow-xl border-t-4 border-red-500">
        <div className="pt-6 text-center">
          <div className="flex justify-center items-center gap-2 text-red-500 text-2xl font-bold">
            <AlertCircle className="w-8 h-8" />
            404 Page Not Found
          </div>

          <p className="mt-4 mb-8 text-gray-500">Page does not exist.</p>

          <Link to="/">
            <button>Return Home</button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
