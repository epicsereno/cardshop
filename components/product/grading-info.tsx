import type { Grading } from "@/types/product";

export function GradingInfo({ grading }: { grading: Grading }) {
  return (
    <dl className="grid gap-3 rounded-lg border border-line bg-white p-5 text-sm">
      <div className="flex justify-between gap-4">
        <dt className="text-stone-600">Company</dt>
        <dd className="font-semibold">{grading.company}</dd>
      </div>
      <div className="flex justify-between gap-4">
        <dt className="text-stone-600">Grade</dt>
        <dd className="font-semibold">{grading.grade}</dd>
      </div>
      <div className="flex justify-between gap-4">
        <dt className="text-stone-600">Certificate</dt>
        <dd className="font-semibold">{grading.certNumber}</dd>
      </div>
    </dl>
  );
}
