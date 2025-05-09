"use client";

import { increase, value } from "@/redux/slices/counter.slice";
import { selectNotes } from "@/redux/slices/todo.slice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const data = useSelector(selectNotes);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <p>Counter: {data}</p> */}
        <button onClick={() => dispatch(increase())}>Increase</button>
        {Object.values(data).map((item) => {
          return <p>{item.title}</p>;
        })}
      </main>
    </div>
  );
}
