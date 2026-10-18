import { Link } from "react-router-dom";
import { CircleHelp, Pencil, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function QuestionTable({
  questions,
  showActions = false,
  onEdit,
  onDeleteClick,
}) {
  if (!questions.length) {
    return (
      <div className="rounded-xl border border-dashed border-[#CBD5D5] py-12 text-center">
        <CircleHelp className="mx-auto mb-3 text-[#6FB3B8]" size={30} />
        <p className="font-semibold">No questions found</p>
        <p className="mt-1 text-sm text-[#64748B]">
          Try another search or add a question.
        </p>
        <Link
          to="/add"
          className="mt-4 inline-block text-sm font-semibold text-[#388087]"
        >
          Add your first question
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="bg-[#F6F8F7] text-xs text-[#64748B]">
          <tr>
            {[
              "#",
              "Question Title",
              "Category",
              "Difficulty",
              "Status",
              "Last Practiced",
              ...(showActions ? ["Actions"] : []),
            ].map((heading) => (
              <th key={heading} className="px-4 py-3 font-semibold">
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {questions.map((q, index) => (
            <tr
              key={q.id}
              className="border-b border-[#E5EAEA] last:border-0 hover:bg-[#FAFCFB]"
            >
              <td className="px-4 py-3 text-[#64748B]">{index + 1}</td>
              <td className="px-4 py-3 font-medium">{q.title}</td>
              <td className="px-4 py-3 text-[#64748B]">{q.category}</td>
              <td className="px-4 py-3">
                <StatusBadge value={q.difficulty} />
              </td>
              <td className="px-4 py-3">
                <StatusBadge value={q.status} />
              </td>
              <td className="px-4 py-3 text-[#64748B]">{q.date}</td>

              {showActions && (
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit?.(q)}
                      aria-label={`Edit ${q.title}`}
                      className="rounded-lg border border-[#E5EAEA] p-2 text-[#388087] hover:bg-[#E1F1EF]"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDeleteClick?.(q.id)}
                      aria-label={`Delete ${q.title}`}
                      className="rounded-lg border border-red-200 p-2 text-red-500 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}