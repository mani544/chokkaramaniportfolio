import { useState, useEffect } from "react";
import { ShieldAlert, Network, Layers, Activity } from "lucide-react";

const Vigilantiq = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="vigilantiq"
      className="relative py-20 bg-gradient-to-b from-[#020617] to-black overflow-hidden"
    >
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0EA5A4]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#38BDF8]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* INTRO */}
        <div className="text-center mb-24">
          <p className="text-sm font-bold uppercase tracking-widest text-[#0EA5A4] mb-4">
            Startup Initiative
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB]">
            VIGILANTIQ
          </h2>

          <div className="flex justify-center mt-6 mb-6">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-[#0EA5A4]/20 blur-2xl opacity-60 group-hover:opacity-80 transition duration-500" />
              <img
                src="/VIGILANTIQ_LOGO.png"
                alt="Vigilantiq Logo"
                className="relative w-28 h-28 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#94A3B8]">
            An intelligent risk & anomaly detection platform designed to monitor,
            analyze, and respond to high-volume transactional systems in real time.
          </p>
        </div>

        {/* PROBLEM */}
        <div className="max-w-5xl mx-auto mb-24">
          <h3 className="text-2xl font-semibold text-[#E5E7EB] mb-4">
            The Problem We’re Solving
          </h3>
          <p className="text-[#94A3B8] leading-relaxed text-lg">
            Modern financial systems operate at massive scale, yet risk detection
            is often reactive and fragmented. Vigilantiq shifts this paradigm —
            from static monitoring to adaptive, intelligent vigilance.
          </p>
        </div>

        {/* ARCHITECTURE LAYERS */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold text-[#E5E7EB] mb-10 text-center">
            System Architecture (Conceptual)
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Ingestion Layer",
                desc: "High-throughput streaming & batch ingestion.",
                icon: <Network />,
              },
              {
                title: "Processing Core",
                desc: "Normalization, enrichment, feature pipelines.",
                icon: <Layers />,
              },
              {
                title: "Intelligence Layer",
                desc: "Anomaly detection & adaptive risk scoring.",
                icon: <Activity />,
              },
              {
                title: "Decision Layer",
                desc: "Dashboards, alerts & integrations.",
                icon: <ShieldAlert />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:translate-y-[-6px] transition-all duration-500"
              >
                <div className="mb-4 text-[#0EA5A4]">{item.icon}</div>
                <h4 className="text-lg font-semibold text-[#E5E7EB] mb-3">
                  {item.title}
                </h4>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* MONITOR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

          {[
            {
              img: "/architecture_1.png",
              label: "Architecture Overview",
            },
            {
              img: "/dashboard_1.png",
              label: "Architecture Dashboard",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center group">

              <div className="relative">

                {/* MONITOR FRAME */}
                <div className="relative bg-[#0f172a] rounded-[28px] p-6 border border-[#0EA5A4]/30 shadow-[0_60px_150px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:scale-[1.03]">

                  {/* INNER BEZEL */}
                  <div className="bg-black rounded-[22px] p-4 shadow-inner relative flex flex-col items-center">
    {/* TEXT BELOW BUTTON */}
                      <p className="mt-2 text-sm text-white font-semibold tracking-wide">
                        {item.label}
                      </p>
                    {/* SCREEN */}
                    <div className="relative bg-[#020617] rounded-[16px] overflow-hidden w-full">

                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />

                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-full h-full object-contain p-6 opacity-95"
                      />
                    </div>

                    {/* BUTTON + TEXT */}
                    <div className="mt-4 flex flex-col items-center">

                      {/* BLINKING BUTTON */}
                      <button
                        onClick={() => setActiveImage(item.img)}
                        className="relative w-5 h-5 rounded-full bg-[#0b1220] border border-white/10 shadow-inner flex items-center justify-center animate-pulseLED"
                      >
                        <div className="w-3 h-3 rounded-full bg-[#0EA5A4]" />
                      </button>



                    </div>

                  </div>
                </div>

                {/* STAND */}
                <div className="w-6 h-14 bg-[#0f172a] mx-auto rounded-b-md border-x border-[#0EA5A4]/30" />
                <div className="w-36 h-3 bg-[#0f172a] mx-auto rounded-full border border-[#0EA5A4]/30 shadow-md" />
                <div className="w-52 h-6 bg-black/40 blur-2xl mx-auto mt-2 rounded-full" />

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-6xl w-full p-6 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-6 text-white text-3xl"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>

            <img
              src={activeImage}
              alt="Expanded"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        @keyframes pulseLED {
          0% {
            box-shadow: 0 0 0px rgba(14,165,164,0.4);
          }
          50% {
            box-shadow: 0 0 14px rgba(14,165,164,0.9);
          }
          100% {
            box-shadow: 0 0 0px rgba(14,165,164,0.4);
          }
        }

        .animate-pulseLED {
          animation: pulseLED 2s ease-in-out infinite;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease forwards;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

    </section>
  );
};

export default Vigilantiq;
