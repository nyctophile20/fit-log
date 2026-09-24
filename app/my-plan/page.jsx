"use client";

import Link from "next/link";
import { useState } from "react";
import { usePlan } from "@/components/PlanProvider";
import PlanItem from "@/components/PlanItems";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState("today");

  const {
    todayPlan,
    saved,
    totalMinutes,
    totalCalories,
  } = usePlan();

  const items =
    activeTab === "today"
      ? todayPlan
      : saved;

  return (
    <main className="plan-page">
      <section className="plan-header">
        <p className="eyebrow">YOUR WORKOUT</p>

        <h1>MY PLAN</h1>

        <p>
          Cap of five lifts for today. Finish them,
          then load more.
        </p>

        <div className="plan-stats">
          <div>
            <span>Exercises</span>
            <strong>{todayPlan.length}</strong>
          </div>

          <div>
            <span>Minutes</span>
            <strong>{totalMinutes}</strong>
          </div>

          <div>
            <span>Calories</span>
            <strong>{totalCalories}</strong>
          </div>
        </div>

        <div className="plan-controls">
          <div className="tabs">
            <button
              className={
                activeTab === "today"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("today")
              }
            >
              Today's Plan
            </button>

            <button
              className={
                activeTab === "saved"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("saved")
              }
            >
              Saved
            </button>
          </div>

          <span className="sort">
            Sort By&nbsp; <b>Duration</b>
          </span>
        </div>

        {items.length === 0 ? (
          <div className="empty-plan">
            <h2>NOTHING HERE YET</h2>

            <p>
              Browse the library and add a lift
              to get moving.
            </p>

            <Link href="/">
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="plan-list">
            {items.map((exercise) => (
              <PlanItem
                key={exercise.id}
                exercise={exercise}
                isToday={
                  activeTab === "today"
                }
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}