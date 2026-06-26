import QuizPageClient from "./QuizPageClient";

export const metadata = {
  title: "Accessibility Quiz - Accessibility Demo",
  description:
    "Quiz yourself on common accessibility problems using the inaccessible example page.",
};

export default function QuizPage() {
  return <QuizPageClient />;
}
