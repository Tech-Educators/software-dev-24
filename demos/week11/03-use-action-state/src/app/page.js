"use client";
import { useActionState } from "react";
import { handleSubmit } from "@/utils/action";

const initial = {
  data: {
    username: "",
    age: null,
  },
  ok: true,
  error: false,
};

export default function FormPage() {
  // useActionState takes two arguments: an action and the initial value of state
  // It returns an array of three things:
  // 1. The state variable used to reference the state, very similar to useState
  // 2. The dispatchAction which is the function we call to trigger the action
  // 3. A boolean called isPending that tells us if the action is currently ongoing
  const [state, dispatchAction, isPending] = useActionState(
    handleSubmit,
    initial,
  );

  return (
    <div>
      <p>{state.data.username}</p>
      <p>{state.data.age}</p>
      <p>{state.data.ok}</p>
      {state.error.message && (
        <p className="text-red-500">{state.error.message}</p>
      )}
      <form action={dispatchAction}>
        <label htmlFor="username">Enter a username:</label>
        <input name="username" />
        <label htmlFor="age">Enter your age:</label>
        <input type="number" name="age" />
        <button type="submit" disabled={isPending}>
          {isPending ? "Wait..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
