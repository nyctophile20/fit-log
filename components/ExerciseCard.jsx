import Link from "next/link";

export default function ExerciseCard({ exercise }) {
  return (
    <Link
      href={`/exercises/${exercise.id}`}
      className="exercise-card"
    >
      <div className="card-image">
        <img
          src={exercise.image}
          alt={exercise.title}
        />
      </div>

      <div className="card-content">
        <div className="badges">
          <span>{exercise.category}</span>
          <span>{exercise.difficulty}</span>
        </div>

        <h3>{exercise.title}</h3>

        <p className="card-muscle">
          {exercise.muscle}
        </p>

        <div className="card-meta">
          <span>◷ {exercise.duration} min</span>
          <span>🔥 {exercise.calories} kcal</span>
          <span>★ {exercise.rating}</span>
        </div>
      </div>
    </Link>
  );
}