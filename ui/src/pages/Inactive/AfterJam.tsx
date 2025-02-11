import React from "react";

export const AfterJam: React.FC = () => {

  return (
    <div className="container max-w-screen-xxl h-[100vh]">
      <div style={{
        width: "100%",
        margin: 0,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}>
        <img
          className="block"
          style={{margin: "0 auto"}}
          src="/logos/gdl_logo.png"
          width={400}
          alt={"GDL Game Jam Team Finder"}
        />

        <h1 className="text-3xl my-4 text-center font-bold px-2">Thanks for using the Team Finder!</h1>

        <p className="mb-2 text-center px-2">The GDL Game Jam has now ended, and the Team Finder is no longer active.</p>
        <p className="mb-2 text-center px-2">Thanks so much for using the Team Finder, and we really hope you found a good team and enjoyed the game jam!</p>
        <p className="mb-2 text-center px-2">The next jam will be announced soon so stay tuned!</p>
      </div>
    </div>
  );
}