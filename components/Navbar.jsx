"use client";

import Link from "next/link";
import { usePlan } from "./PlanProvider";

export default function Navbar() {
  const { todayPlan, saved } = usePlan();

  return (
    <header className="navbar">
      <Link href="/" className="logo">
        FITLOG
      </Link>

      <nav className="nav-center">
        <Link href="/">
          Workouts
        </Link>

        <Link href="/my-plan" className="nav-plan">
          My Plan
        </Link>
      </nav>

      <div className="nav-right">
        <Link href="/my-plan">
          Plan
          <span className="nav-number">
            {todayPlan.length}
          </span>
        </Link>

        <Link href="/my-plan">
          Saved
          <span className="nav-number">
            {saved.length}
          </span>
        </Link>
      </div>
    </header>
  );
}