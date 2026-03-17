"use server";

export async function handleSubmit(prev, formData) {
  const data = Object.fromEntries(formData);
  console.log(data);

  if (data.age < 20) {
    return {
      data: { ...data },
      ok: false,
      error: {
        message: "Sorry, you're too young to sign up",
      },
    };
  }

  return {
    data: { ...data },
    ok: true,
    error: false,
  };
}
