import { Component } from "@/components/ui/etheral-shadow";

const Hero = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Component
      color="rgba(128, 128, 128, 1)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
         />
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                zIndex: 10
            }}
        >
          <section role="banner">
            <h1 className="md:text-7xl text-6xl lg:text-8xl font-bold text-center text-foreground relative z-20">
                GOUTHAM SRINATH
            </h1>
            <p className="text-2xl mt-4">Full Stack Developer</p>
            <div className="mt-8 space-x-4">
                <a href="#" className="bg-white text-black px-6 py-2 rounded-lg">View My Work</a>
                <a href="#" className="bg-gray-800 px-6 py-2 rounded-lg">Contact Me</a>
            </div>
          </section>
        </div>
    </div>
  );
};

export default Hero;
