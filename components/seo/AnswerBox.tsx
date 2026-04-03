interface AnswerBoxProps {
  answer: string;
  source?: string;
}

export default function AnswerBox({ answer, source }: AnswerBoxProps) {
  return (
    <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 sm:p-6 mb-8">
      <p className="text-dark font-medium text-base sm:text-lg leading-relaxed">
        {answer}
      </p>
      {source && (
        <p className="text-xs text-gray-400 mt-2">Source : {source}</p>
      )}
    </div>
  );
}
