import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-[#2a1a0c] via-[#4f2f0f] to-[#201509] text-white font-sans">
      {/* Background dot-grid pattern */}
      <div
        className="absolute inset-0 w-full h-full bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[16px_16px]"
        aria-hidden="true"
      />
      {/* Fades the dot-grid at the edges */}
      <div
        className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,transparent_0%,#2a1a0c_80%)]"
        aria-hidden="true"
      />

      {/* Content wrapper - centers content vertically and horizontally */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-8">
        <div className="w-full max-w-lg text-center">
          {/* Main Headline */}
          <h1 className="mb-6 font-serif text-4xl font-bold text-amber-300 sm:text-5xl md:text-6xl">
            Solar-Powered Charging Station
          </h1>

          {/* Body Text */}
          <p className="mb-10 text-lg text-neutral-200 sm:text-xl">
            The solar-powered charging station provides free device charging and
            Wi-Fi access, promoting sustainability, connectivity, and academic
            productivity.
          </p>

          {/* Call-to-Action Button */}
          <a
            href="/dashboard" // Assuming this links to a dashboard route
            className="mb-16 inline-block rounded-lg bg-linear-to-b from-amber-400 to-amber-600 px-10 py-4 text-lg font-bold text-neutral-900 shadow-lg transition-all duration-300 ease-in-out hover:from-amber-500 hover:to-amber-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Go to Dashboard
          </a>

          {/* Footer Note Box */}
          <div className="rounded-lg bg-black/30 p-4 backdrop-blur-sm">
            <p className="text-sm text-neutral-300">
              This application is part of the thesis project 'Integrating
              Renewable Energy Solutions in PUP-CEA: Solar-Powered Charging
              Station Offering Connectivity', developed by 4th Year Computer
              Engineering students of the Polytechnic University of the
              Philippines.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
