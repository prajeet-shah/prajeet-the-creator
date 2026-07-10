"use client";

import { createContext, useContext, useEffect, useState } from "react";

const StreamContext = createContext({});

export const useStream = () => useContext(StreamContext);

export const StreamProvider = ({ children }) => {
  const [stream, setStreamState] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedStream = localStorage.getItem("compexStream");
      if (savedStream) setStreamState(savedStream);

      const savedAttempts = localStorage.getItem("compexAttempts");
      if (savedAttempts) setAttempts(JSON.parse(savedAttempts));
    } catch (error) {
      console.error("Failed to load COMPEX local data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const setStream = (newStream) => {
    setStreamState(newStream);
    try {
      localStorage.setItem("compexStream", newStream);
    } catch (error) {
      console.error("Failed to save stream:", error);
    }
  };

  const addAttempt = (record) => {
    setAttempts((prev) => {
      const updated = [...prev, record];
      try {
        localStorage.setItem("compexAttempts", JSON.stringify(updated));
      } catch (error) {
        console.error("Failed to save attempt:", error);
      }
      return updated;
    });
  };

  const getAttempt = (attemptId) => attempts.find((a) => a.attemptId === attemptId);

  return (
    <StreamContext.Provider value={{ stream, setStream, attempts, addAttempt, getAttempt, loading }}>
      {!loading ? children : (
        <div className="min-h-screen flex items-center justify-center bg-dark-950">
          <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
        </div>
      )}
    </StreamContext.Provider>
  );
};