"use client";

import Link from "next/link";
import { usePlan } from "./PlanProvider";

export default function PlanItem({
  exercise,
  isToday,
}) {
  const { toggleDone } = usePlan();

  return (
    <div
      className={`plan-item ${
        exercise.completed
          ? "completed"
          : ""
      }`}
    >
      <img
        src={exercise.image}
        alt={exercise.title}
      />

      <div className="plan-item-info">
        <h3>{exercise.title}</h3>

        <p>{exercise.muscle}</p>

        <div>
          <span>
            ◷ {exercise.duration} min
          </span>

          <span>
            🔥 {exercise.calories} kcal
          </span>

          <span>
            ★ {exercise.rating}
          </span>
        </div>
      </div>

      <div className="plan-item-actions">
        <Link
          href={`/exercises/${exercise.id}`}
          className="view-button"
        >
          View Details
        </Link>

        {isToday && (
          <button
            className="done-button"
            onClick={() =>
              toggleDone(exercise.id)
            }
          >
            {exercise.completed
              ? "Completed"
              : "Mark as Done"}
          </button>
        )}
      </div>
    </div>
  );
}