import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import Header from "./components/Header";
import SkeletonUserCard from "./components/SkeletonUserCard";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=20`
      );
      setData(prev => [...prev, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUsers();
      setInitialLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (page !== 1) {
      fetchUsers();
    }
  }, [page, fetchUsers]);

  const loaderRef = useInfiniteScroll(() => {
    if (!loading) setPage(prev => prev + 1);
  }, loading);

  return (
    <div className="App">
      <Header title={"UserList"} />

      <div className="row d-flex justify-content-center mt-4">
        {initialLoading &&
          Array.from({ length: 6 }).map((_, i) => (
            <SkeletonUserCard key={`initial-${i}`} />
          ))}

        {!initialLoading &&
          data.map((item, index) => <UserList key={index} item={item} />)}

        {loading &&
          !initialLoading &&
          Array.from({ length: 3 }).map((_, i) => (
            <SkeletonUserCard key={`load-${i}`} />
          ))}
      </div>

      <div ref={loaderRef} style={{ height: "30px" }} />
    </div>
  );
}
