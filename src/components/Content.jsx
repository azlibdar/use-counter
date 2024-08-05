import { useCounter } from "react-customs";

function Content() {
  const [count, { increment, decrement, reset }] = useCounter(0, { step: 2, min: -10, max: 10 });
  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="w-full my-6 flex flex-col">
          <h1 className="w-full text-center text-xl font-semibold text-zinc-100">Count: {count}</h1>
          <div className="w-full mt-8 flex flex-col items-center justify-center gap-2 md:flex-row">
            <button
              onClick={increment}
              className="py-2.5 px-5 rounded-lg bg-emerald-400 text-black font-semibold transition hover:opacity-90 active:translate-y-[1px]"
            >
              Increment
            </button>
            <button
              onClick={decrement}
              className="py-2.5 px-5 rounded-lg bg-rose-400 text-black font-semibold transition hover:opacity-90 active:translate-y-[1px]"
            >
              Decrement
            </button>
            <button
              onClick={reset}
              className="py-2.5 px-5 rounded-lg bg-zinc-800 text-white font-normal transition hover:opacity-90 active:translate-y-[1px]"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
