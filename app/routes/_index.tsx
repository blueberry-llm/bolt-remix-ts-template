import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black font-sans text-white">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <p>This is a blank remix template, start prompting to build your app</p>
    </div>
  );
}
