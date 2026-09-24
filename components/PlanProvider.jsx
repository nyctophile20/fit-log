"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext(null);

export function PlanProvider({ children }) {
  const [todayPlan, setTodayPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-today-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setTodayPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(
        "fitlog-today-plan",
        JSON.stringify(todayPlan)
      );
    }
  }, [todayPlan, hydrated]);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(
        "fitlog-saved",
        JSON.stringify(saved)
      );
    }
  }, [saved, hydrated]);

  function addToToday(exercise) {
    setTodayPlan((current) => {
      if (current.some((item) => item.id === exercise.id)) {
        return current;
      }

      return [
        ...current,
        {
          ...exercise,
          completed: false,
        },
      ];
    });
  }

  function removeFromToday(id) {
    setTodayPlan((current) =>
      current.filter((item) => item.id !== id)
    );
  }

  function toggleDone(id) {
    setTodayPlan((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  function saveExercise(exercise) {
    setSaved((current) => {
      if (current.some((item) => item.id === exercise.id)) {
        return current;
      }

      return [...current, exercise];
    });
  }

  function removeSaved(id) {
    setSaved((current) =>
      current.filter((item) => item.id !== id)
    );
  }

  function isInPlan(id) {
    return todayPlan.some((item) => item.id === id);
  }

  function isSaved(id) {
    return saved.some((item) => item.id === id);
  }

  const totalMinutes = todayPlan.reduce(
    (total, item) => total + item.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (total, item) => total + item.calories,
    0
  );

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        saved,
        addToToday,
        removeFromToday,
        toggleDone,
        saveExercise,
        removeSaved,
        isInPlan,
        isSaved,
        totalMinutes,
        totalCalories,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}