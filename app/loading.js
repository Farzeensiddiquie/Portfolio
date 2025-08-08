export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#080F1F] via-[#0E2235] to-[#083241] text-white">

      {/* --- NAVBAR --- */}
      <header className="flex justify-center items-center px-4 md:px-0 py-6">
        <div className="flex items-center justify-between w-full max-w-6xl">

          {/* Logo on the left */}
          <div className="h-10 w-10 bg-gray-700 rounded-full" />

          {/* Nav center links in rounded container */}
          <div className="flex items-center gap-10 px-6 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
            {["Home", "About", "Projects", "Contact"].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-4 w-16 bg-gray-600 rounded" />
                {i === 0 && <div className="w-6 h-1 mt-1 bg-white rounded-full" />} {/* underline on Home */}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-16 animate-pulse">

        {/* LEFT TEXT */}
        <div className="space-y-5 w-full md:w-1/2">
          <div className="h-4 w-24 bg-gray-700 rounded" /> {/* "Hi, I am" */}
          <div className="h-10 w-64 bg-gray-600 rounded" /> {/* Name */}
          <div className="h-4 w-40 bg-gray-700 rounded" /> {/* "I am here to" */}
          <div className="h-5 w-72 bg-gray-600 rounded" /> {/* Build your Mobile Apps */}

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <div className="h-12 w-36 bg-gray-700 rounded-md" /> {/* Download CV */}
            <div className="h-12 w-36 border border-gray-600 rounded-md" /> {/* Contact Me */}
          </div>
        </div>

        {/* RIGHT IMAGE PLACEHOLDER */}
        <div className="w-[300px] h-[300px] bg-gray-700 rounded-full" />
      </main>
    </div>
  );
}
