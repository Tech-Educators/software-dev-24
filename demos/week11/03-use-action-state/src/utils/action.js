"use server";

// The action/reducerAction is a function that has two parameters
// The first is the previous state, we've not using it here but we can use this to manipulate an existing state
// The second is the 'payload' that's passed to the dispatchAction
// When used as a form action, the payload is always a FormData object just like when we've done Next.js forms before
export async function handleSubmit(prev, formData) {
  const data = Object.fromEntries(formData);
  console.log(data);

  //   Some database logic would go here if I had a database

  // Return a different state with an error message if a certain condition is met
  if (data.age < 20) {
    return {
      data: { ...data },
      ok: false,
      error: {
        message: "Sorry, you're too young to sign up",
      },
    };
  }

  // Whatever the function returns becomes the new value of state
  // In this case we're returning an object containing the data and whether the data was valid or not
  return {
    data: { ...data },
    ok: true,
    error: false,
  };
}
