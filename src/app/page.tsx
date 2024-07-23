import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex max-h-screen h-screen">
      {/* TODO:OTP verification */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt="logo"
            height={200}
            width={200}
            quality={100}
            priority={true}
            className="rounded-3xl object-fill bg-black"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark xl:text-left">
              ©2024 HealthTrack
            </p>
            <Link href={"/?admin=true"} className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src={"/assets/images/onboarding-img.png"}
        alt="onboard Image"
        height={1000}
        width={1000}
        quality={80}
        priority={true}
        className="side-img max-w-[50%] "
      />
    </div>
  );
}
