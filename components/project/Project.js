import React from "react";

function Project() {
  return (
    <section className="bg-black relative min-h-screen flex items-center justify-center">
      <div
        id="project"
      >
        <h1 className="text-3xl text-white font-bold underline">
          Projects Page
        </h1>
      </div>
      <div className="absolute bottom-0 right-0 z-10">
        <img src="/bg.png" alt="" />
      </div>
    </section>
  );
}
export default Project;
