import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function RegisterPage({
  params: { userId },
}: SearchParamProps) {
  const user = await getUser(userId);
  return (
    <div className="flex max-h-screen h-screen">
      <section className="remove-scrollbar container ">
        <div className="sub-container max-w-[860px] flex flex-col  py-10">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt="logo"
            height={200}
            width={200}
            quality={100}
            priority={true}
            className="rounded-3xl object-fill bg-black"
          />
          <RegisterForm user={user} />

          <p className="copyright py-12">©2024 HealthTrack</p>
        </div>
      </section>
      <Image
        src={"/assets/images/register-img.png"}
        alt="onboard Image"
        height={1000}
        width={1000}
        quality={80}
        priority={true}
        className="side-img max-w-[390px] "
      />
    </div>
  );
}
