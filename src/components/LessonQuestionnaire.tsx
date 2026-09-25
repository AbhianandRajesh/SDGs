import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Award,
  Lock,
  Unlock,
  AlertTriangle
} from 'lucide-react';
import { Lesson, QuizQuestion } from '../data/lessonsData';

interface LessonQuestionnaireProps {
  lesson: Lesson;
  currentPoints: number;
  hasPassed: boolean;
  onPassLesson: (score: number, bonus: number) => void;
  onNextLesson: () => void;
  hasNextLesson: boolean;
}

export const LessonQuestionnaire: React.FC<LessonQuestionnaireProps> = ({
  lesson,
  currentPoints,
  hasPassed,
  onPassLesson,
  onNextLesson,
  hasNextLesson
}) => {
  const questions: QuizQuestion[] = lesson.quiz;

  // Selected options: { [questionId]: optionIndex }
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState<boolean>(hasPassed);
  const [score, setScore] = useState<number>(0);
  const [bonusEarned, setBonusEarned] = useState<number>(0);
  const [showExplanations, setShowExplanations] = useState<boolean>(false);

  const handleSelect = (questionId: number, optionIdx: number) => {
    if (submitted) return; // locked once submitted
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const isAllAnswered = questions.every((q) => selectedAnswers[q.id] !== undefined);

  const handleSubmit = () => {
    let earned = 0;
    let correctCount = 0;

    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        earned += q.points; // 4 points each -> max 20 points
        correctCount += 1;
      }
    });

    const percentage = (earned / 20) * 100; // e.g., 60%, 80%, 100%
    // 80% and above gets an extra 5 bonus points!
    const bonus = percentage >= 80 ? 5 : 0;

    setScore(earned);
    setBonusEarned(bonus);
    setSubmitted(true);
    setShowExplanations(true);

    // Gating rule: 75% mark or above to pass and unlock next lesson (>= 15 / 20 pts, i.e., 4 or 5 correct)
    if (percentage >= 75) {
      onPassLesson(earned, bonus);
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setShowExplanations(false);
    setScore(0);
    setBonusEarned(0);
  };

  const percentage = (score / 20) * 100;
  const isPassed = percentage >= 75;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg my-12">
      
      {/* Questionnaire Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FCE]/10 text-xs font-bold text-[#087FCE] mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Mastery Questionnaire • 20 Points</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#075985]">
            {lesson.badge} Questionnaire
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Answer all 5 questions. Scoring <strong className="text-slate-800">75% or higher</strong> is required to unlock the next lesson. Scores of <strong className="text-[#16A34A]">80%+ earn +5 bonus points</strong>!
          </p>
        </div>

        {/* Score Badge */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="text-right">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Quiz Value
            </span>
            <span className="font-mono text-lg font-black text-slate-900">
              5 Questions • 20 Pts
            </span>
          </div>
        </div>
      </div>

      {/* 5 Interactive Questions */}
      <div className="py-6 space-y-8">
        {questions.map((q, qIndex) => {
          const userAnswer = selectedAnswers[q.id];
          const isAnswered = userAnswer !== undefined;
          const isCorrect = userAnswer === q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                submitted
                  ? isCorrect
                    ? 'bg-emerald-50/50 border-emerald-300'
                    : 'bg-rose-50/50 border-rose-300'
                  : 'bg-slate-50/60 border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {/* Question text */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-[#087FCE] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-sm">
                    {qIndex + 1}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {q.question}
                  </h4>
                </div>
                <span className="text-[11px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md shrink-0">
                  {q.points} Pts
                </span>
              </div>

              {/* 4 Options */}
              <div className="space-y-2.5 pl-0 sm:pl-10">
                {q.options.map((opt, optIdx) => {
                  const isSelected = userAnswer === optIdx;
                  let optStyle = 'border-slate-200 bg-white hover:border-[#087FCE]/50 text-slate-700';

                  if (submitted) {
                    if (optIdx === q.correctAnswer) {
                      optStyle = 'border-emerald-500 bg-emerald-100/70 text-emerald-950 font-bold';
                    } else if (isSelected && !isCorrect) {
                      optStyle = 'border-rose-400 bg-rose-100/70 text-rose-950';
                    } else {
                      optStyle = 'border-slate-200 bg-white text-slate-400 opacity-60';
                    }
                  } else if (isSelected) {
                    optStyle = 'border-[#087FCE] bg-[#087FCE]/10 text-[#075985] font-semibold ring-2 ring-[#087FCE]/20';
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={submitted}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && optIdx === q.correctAnswer && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                      )}
                      {submitted && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation box after submission */}
              {showExplanations && (
                <div className="mt-4 pt-3 border-t border-slate-200/80 pl-0 sm:pl-10">
                  <div className="flex items-start gap-2 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-slate-200/60">
                    <HelpCircle className="w-4 h-4 text-[#087FCE] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Explanation: </strong>
                      {q.explanation}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Questionnaire Footer & Result Banner */}
      <div className="pt-6 border-t border-slate-100">
        {!submitted ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              {Object.keys(selectedAnswers).length} of {questions.length} questions answered
            </div>

            <button
              disabled={!isAllAnswered}
              onClick={handleSubmit}
              className={`px-8 py-3.5 rounded-xl text-sm font-bold text-white transition-all flex items-center justify-center gap-2 shadow-md ${
                isAllAnswered
                  ? 'bg-[#16A34A] hover:bg-emerald-700 active:scale-95'
                  : 'bg-slate-300 cursor-not-allowed opacity-60'
              }`}
            >
              <span>Submit Questionnaire (20 Pts)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Score Summary Box */}
            <div
              className={`p-6 rounded-2xl border ${
                isPassed
                  ? 'bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-white border-emerald-300'
                  : 'bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-white border-amber-300'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    {isPassed ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                        <Unlock className="w-3.5 h-3.5" />
                        PASSED ({percentage}%) • Next Lesson Unlocked!
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                        <Lock className="w-3.5 h-3.5" />
                        SCORE: {percentage}% • 75% Required to Pass
                      </span>
                    )}

                    {bonusEarned > 0 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-black animate-pulse">
                        <Sparkles className="w-3.5 h-3.5" />
                        +5 BONUS POINTS (80%+ Mark)
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                    You Earned {score} of 20 Points {bonusEarned > 0 ? `(+${bonusEarned} Bonus = ${score + bonusEarned} Pts)` : ''}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {isPassed
                      ? 'Outstanding work! You have successfully mastered this module and unlocked the next lesson.'
                      : 'You scored below the 75% threshold. Review the explanations above and retake the quiz to unlock the next lesson!'}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleRetake}
                    className="px-4 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
                  </button>

                  {isPassed && hasNextLesson && (
                    <button
                      onClick={onNextLesson}
                      className="px-6 py-3 rounded-xl bg-[#087FCE] hover:bg-[#075985] text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2"
                    >
                      <span>Proceed to Next Lesson</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
