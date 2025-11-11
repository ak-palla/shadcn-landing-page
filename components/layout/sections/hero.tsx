"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 w-full">
      <div className="grid place-items-center gap-8 py-16 md:py-24 lg:py-32">
        <div className="text-center space-y-8">
          

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-5xl lg:text-7xl font-extrabold leading-snug">
            <h1>
              Turn Your Website Into a{" "}
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Digital Office
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-base md:text-lg lg:text-xl font-medium leading-[1.75] text-foreground/80">
            Your AI-powered site agent that guides visitors, answers questions, conversational analytics and books appointments—24/7.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow" asChild>
              <Link href="/auth/signup">
                Sign up
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="/auth/signin">
                Sign in
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src="/dashboard.png"
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
