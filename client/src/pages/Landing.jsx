import React from "react";
import Card from "../components/ui/Card.jsx";
import {
  Target,
  ArrowRight,
  Compass,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <nav className="w-screen h-20 flex items-center justify-between border-b-1 border-gray-200">
        <div className="flex text-blue-600 font-bold text-[28px] items-center justify-center w-2/12 gap-2">
          <Compass size={36} />
          Vision Go
        </div>
        <div className="flex items-center justify-center gap-4 w-3/12">
          <Link
            to="/auth/login"
            className="font-medium px-8 py-2 active:border active:rounded-xl hover:cursor-pointer"
          >
            Log In
          </Link>
          <Link
            to="/auth/signup"
            className="font-medium px-6 py-2 rounded-full bg-blue-600 text-white hover:cursor-pointer"
          >
            Get Started
          </Link>
        </div>
      </nav>
      <main className="w-screen flex flex-col">
        <div className="flex flex-col items-center justify-center gap-8 h-[500px]">
          <div className="flex flex-col items-center justify-center text-7xl font-bold">
            <span>Find Your Path.</span>
            <span className="text-blue-600">Build Your Future.</span>
          </div>
          <div className="w-6/12 text-2xl text-center text-gray-500">
            AI-powered career guidance, personalized roadmaps, and skill
            tracking to help you navigate from student to professional.
          </div>
          <Link
            to="/auth/signup"
            className="flex items-center justify-center gap-4 text-white bg-blue-600 px-10 py-3 text-2xl font-semibold rounded-full hover:cursor-pointer shadow-lg border-1 border-white hover:shadow-xl transition ease-in"
          >
            Start Your Journey
            <span>
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
        <div className="h-[500px] bg-gray-100 flex items-center justify-center gap-16">
          <Card
            icon={<Target size={50} />}
            heading={"Smart Assessment"}
            definition={
              "Discover careers that match your unique personality, interests, and strengths."
            }
          />
          <Card
            icon={<Compass size={50} />}
            heading={"Career Roadmaps"}
            definition={
              "Step-by-step guides showing exactly what skills to learn and resources to use."
            }
          />
          <Card
            icon={<ChartNoAxesColumnIncreasing size={50} />}
            heading={"Progress Tracking"}
            definition={
              "Visualize your growth and stay motivated as you check off milestones."
            }
          />
        </div>
      </main>
    </>
  );
};

export default Landing;
