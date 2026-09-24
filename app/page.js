import { exercises } from "@/data/exercises";
import ExerciseCard from "@/components/ExerciseCard";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="hero-label">THE LIBRARY</p>

          <h1>
            Train with FitLog.
            <br />
            Every set matters.
          </h1>

          <p>
            Explore exercises and build a workout
            that works for you.
          </p><br/>
          <button className="btn"> Get Started</button>
        </div>
        <div className="hero-image">

          <img height="400px" width="auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV72EKDu1Zln7eXA0JUvtsDNkAZLyvQ47aiv2ABPKgZA&s=10"
            alt="FitLog Hero"
          />
        </div>
      </section>

      <section className="library-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WORKOUT LIBRARY</p>
            <h2>Exercises</h2>
          </div>

          <span>{exercises.length} exercises</span>
        </div>

        <div className="exercise-grid">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
            />
          ))}
        </div>
      </section>
    </main>
  );
}