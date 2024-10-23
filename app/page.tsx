"use client"
import { TestFormWithFormik } from "./components/TestForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-4">
      <h2>This is a Formik POC</h2>
      <TestFormWithFormik
        name={"testing"}
        email={"testing@email.com"}
      />
    </main>
  );
}

