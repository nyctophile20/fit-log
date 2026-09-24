import { notFound } from "next/navigation";
import { exercises } from "@/data/exercises";
import ExerciseActions from "@/components/ExerciseActions";

export default async function ExerciseDetails({ params }) {
  const { id } = await params;

  const exercise = exercises.find(
    (item) => item.id === id
  );

  if (!exercise) {
    notFound();
  }

  return (
    <main className="details-page">
      <div className="details-image">
        <img
          src={exercise.image}
          alt={exercise.title}
        />
      </div>

      <div className="details-content">
        <h1>{exercise.title}</h1>

        <p className="details-description">
          {exercise.description}
        </p>

        <div className="badges details-badges">
          <span>{exercise.category}</span>
          <span>{exercise.muscle}</span>
        </div>

        <div className="stats-box">
          <div>
            <span>Equipment</span>
            <strong>{exercise.equipment}</strong>
          </div>

          <div>
            <span>Difficulty</span>
            <strong>{exercise.difficulty}</strong>
          </div>

          <div>
            <span>Sets</span>
            <strong>{exercise.sets}</strong>
          </div>

          <div>
            <span>Reps</span>
            <strong>{exercise.reps}</strong>
          </div>

          <div>
            <span>Duration</span>
            <strong>{exercise.duration} min</strong>
          </div>

          <div>
            <span>Calories</span>
            <strong>{exercise.calories} kcal</strong>
          </div>

          <div>
            <span>Rating</span>
            <strong>{exercise.rating}</strong>
          </div>
        </div>

        <div className="instructions">
          <h2>Instructions</h2>

          <ol>
            {exercise.instructions.map(
              (instruction, index) => (
                <li key={index}>
                  {instruction}
                </li>
              )
            )}
          </ol>
        </div>

        <ExerciseActions exercise={exercise} />
      </div>
    </main>
  );
}