import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Sparkles, CheckCircle } from "lucide-react";
import { quizQuestions, careerInfo } from "../data/quizQuestions";

const CareerQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState(null);

  const totalQuestions = quizQuestions.length;
  const question = quizQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  const handleAnswer = (value) => {
    setAnswers({
      ...answers,
      [question.id]: value,
    });

    if (isLastQuestion) {
      calculateResults();
    } else {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    }
  };

  const calculateResults = () => {
    const careerScores = {
      web_dev: 0,
      mobile_dev: 0,
      data_sci: 0,
      ai_eng: 0,
      cyber_sec: 0,
    };

    quizQuestions.forEach((q) => {
      const userAnswer = answers[q.id];
      if (userAnswer && q.scores[userAnswer]) {
        const scoresForCareer = q.scores[userAnswer];
        Object.keys(careerScores).forEach((career) => {
          careerScores[career] += scoresForCareer[career] || 0;
        });
      }
    });

    const maxScore = 24;
    const normalizedScores = {};
    Object.keys(careerScores).forEach((career) => {
      normalizedScores[career] = Math.round(
        (careerScores[career] / maxScore) * 100
      );
    });

    setScores(normalizedScores);
    setShowResults(true);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
    setScores(null);
  };

  if (showResults && scores) {
    const sortedCareers = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

    const primaryCareer = sortedCareers[0];
    const secondaryCareers = sortedCareers.slice(1);

    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4">
            <Sparkles className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Your Career Matches!
          </h1>
          <p className="text-gray-600">
            Based on your responses, here are the best career paths for you
          </p>
        </div>

        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded">
                  BEST MATCH
                </span>
                <span className="text-sm opacity-90">
                  {scores[primaryCareer[0]]}% Match
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">
                  {careerInfo[primaryCareer[0]].icon}
                </span>
                <h2 className="text-3xl font-bold">
                  {careerInfo[primaryCareer[0]].title}
                </h2>
              </div>
              <p className="text-blue-100 mb-6">
                {careerInfo[primaryCareer[0]].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">✅ Pros</h3>
                  <ul className="space-y-1 text-sm text-blue-100">
                    {careerInfo[primaryCareer[0]].pros
                      .slice(0, 3)
                      .map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">⚠️ Cons</h3>
                  <ul className="space-y-1 text-sm text-blue-100">
                    {careerInfo[primaryCareer[0]].cons
                      .slice(0, 3)
                      .map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() =>
                    navigate(`/careers/${careerInfo[primaryCareer[0]].id}`)
                  }
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  View Career Path
                </button>
                <button
                  onClick={() =>
                    navigate(`/learn/${careerInfo[primaryCareer[0]].id}`)
                  }
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 transition-all"
                >
                  Start Learning →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Other Great Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryCareers.map(([careerId, score]) => (
              <div
                key={careerId}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
                onClick={() => navigate(`/careers/${careerInfo[careerId].id}`)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{careerInfo[careerId].icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {careerInfo[careerId].title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-1.5 w-32">
                        <div
                          className="bg-purple-500 h-1.5 rounded-full"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">
                        {score}% match
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {careerInfo[careerId].description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleRetake}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => navigate("/careers/all")}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
          >
            Browse All Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
          <span>
            {Math.round(((currentQuestion + 1) / totalQuestions) * 100)}%
            Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{
              width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {question.question}
          </h2>
          <p className="text-gray-500">{question.description}</p>
        </div>

        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                answers[question.id] === option.value
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  {answers[question.id] === option.value ? (
                    <CheckCircle className="text-blue-500" size={24} />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">
                    {option.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {option.description}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
            currentQuestion === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <ChevronLeft size={18} /> Previous
        </button>
        <div className="text-sm text-gray-400">
          {answers[question.id]
            ? "✓ Answer saved"
            : "Select an option to continue"}
        </div>
      </div>
    </div>
  );
};

export default CareerQuiz;
