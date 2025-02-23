import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ChakravyuhAnimation from "../components/ChakravyuhAnimation";
import { Sword, Shield, Scroll } from "lucide-react";

const Home = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  const sponsors = [
    {
      name: "Supraja Technologies",
      image: "images/st.jpg",
      description: "Leading provider of cybersecurity solutions and training.",
      type: "Knowledge Partner",
      social: "https://suprajatechnologies.com/index.php",
    },
    {
      name: "Computer Science Department",
      image: "images/gctc3.jpg",
      description:
        "Department of Computer Science,Geethanjali College of Engineering and Technology.",
      type: "Academic Partner",
      social: "https://www.gcet.edu.in/cse",
    },
    {
      name: "IEEE CSe GCET Student Branch",
      image: "images/logocomputer.jpg",
      description:
        "IEEE Computer Society Student Branch,Geethanjali College of Engineering and Technology ",
      type: "Technical Partner",
      social: "https://www.instagram.com/ieeecs_gcetsb/",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-title-reveal");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-mythological text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-chakra-pattern bg-cover bg-center opacity-10"
        style={{ filter: "sepia(100%) hue-rotate(340deg)" }}
      />

      <ChakravyuhAnimation />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Title Animation */}
          <div ref={titleRef} className="relative mb-6 perspective-1000">
            <div className="chakravyuh-title">
              <h1 className="text-6xl md:text-8xl font-bold text-saffron tracking-wider">
                {"चक्रव्यूह".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block title-char"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
              {/* Energy Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gold/50 rounded-full animate-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
              {/* Glowing Lines */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 100 20">
                    <path
                      d="M0,10 Q50,0 100,10"
                      className="stroke-gold/30 fill-none animate-glow-path"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M0,10 Q50,20 100,10"
                      className="stroke-gold/30 fill-none animate-glow-path-reverse"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gold animate-glow">
            Chakravyuh CTF
          </h2>

          <p className="text-2xl md:text-3xl mb-8 text-saffron/90 font-spectral">
            Enter the Sacred Battlefield of Digital Warriors
          </p>

          <p className="text-lg mb-12 text-gray-300 font-spectral">
            As in the great epic Mahabharata, where Abhimanyu faced the mighty
            Chakravyuh, prepare yourself for an epic three-day battle of wisdom,
            strategy, and skill.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <Link to="/register" className="btn-primary group">
              <Sword className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
              Join the Battle
            </Link>

            <Link to="/schedule" className="btn-secondary group">
              <Scroll className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-500" />
              Sacred Timeline
            </Link>
          </div>

          {/* Divine Allies (Sponsors) Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-saffron">
              Our Divine Allies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="relative group transform hover:scale-105 transition-transform duration-300"
                >
                  {/* Ancient Frame Border */}
                  <div className="absolute -inset-1">
                    <div className="w-full h-full opacity-75 blur-sm bg-gradient-to-r from-saffron via-gold to-saffron"></div>
                  </div>

                  {/* Content Container */}
                  <div className="relative bg-darkBrown/80 backdrop-blur-sm rounded-lg overflow-hidden border border-saffron/20">
                    {/* Image Container with Decorative Elements */}
                    <div className="relative h-32">
                      {/* Clickable Anchor wrapping Image and Overlay */}
                      <a
                        href={sponsor.social}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative z-10"
                      >
                        <img
                          src={sponsor.image}
                          alt={sponsor.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient inside the anchor */}
                        <div className="absolute inset-0 bg-gradient-to-t from-darkBrown via-transparent to-transparent"></div>
                      </a>

                      {/* Corner Ornaments - Lower z-index */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-saffron z-0"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-saffron z-0"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-saffron z-0"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-saffron z-0"></div>
                    </div>

                    {/* Text Content */}
                    <div className="p-4">
                      <div className="mb-1 text-gold font-medium text-sm">
                        {sponsor.type}
                      </div>
                      <h3 className="text-lg font-bold text-saffron mb-1">
                        {sponsor.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
