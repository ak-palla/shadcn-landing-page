import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer id="footer" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="mb-8">
          <Link href="/" className="flex font-bold items-center">
            <Image
              src="/icons/favicon.svg"
              alt="JibberLab Logo"
              width={36}
              height={36}
              className="mr-2"
            />
            <h3 className="text-2xl">JibberLab</h3>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Product</h3>
            <div>
              <Link href="#features" className="opacity-60 hover:opacity-100">
                Features
              </Link>
            </div>

            <div>
              <Link href="#benefits" className="opacity-60 hover:opacity-100">
                Benefits
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ's
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Use Cases</h3>
            <div>
              <Link href="#use-cases" className="opacity-60 hover:opacity-100">
                Consultants
              </Link>
            </div>

            <div>
              <Link href="#use-cases" className="opacity-60 hover:opacity-100">
                Professional Services
              </Link>
            </div>

            <div>
              <Link href="#use-cases" className="opacity-60 hover:opacity-100">
                Service Providers
              </Link>
            </div>

            <div>
              <Link href="#use-cases" className="opacity-60 hover:opacity-100">
                Agencies
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                About
              </Link>
            </div>

            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Privacy Policy
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                LinkedIn
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Youtube
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="opacity-60">
            &copy; 2025 JIBBERLAB. All rights reserved.
          </h3>
        </section>
      </div>
    </footer>
  );
};
