"use client";

import { usePlan } from "./PlanProvider";

export default function ExerciseActions({ exercise }) {
  const {
    addToToday,
    saveExercise,
    removeFromToday,
    removeSaved,
    isInPlan,
    isSaved,
  } = usePlan();

  const added = isInPlan(exercise.id);
  const saved = isSaved(exercise.id);

  return (
    <div className="details-actions">
      <button
        className="primary-button"
        onClick={() => {
          if (added) {
            removeFromToday(exercise.id);
          } else {
            addToToday(exercise);
          }
        }}
      >
        {added
          ? "✓ Added to today's plan"
          : "＋ Add to today's plan"}
      </button>

      <button
        className="secondary-button"
        onClick={() => {
          if (saved) {
            removeSaved(exercise.id);
          } else {
            saveExercise(exercise);
          }
        }}
      >
        {saved ? "✓ Saved" : "♡ Save for later"}
      </button>
    </div>
  );
}