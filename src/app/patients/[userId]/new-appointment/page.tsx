import AppointmentForm from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function NewAppointmentPage({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <div className="flex max-h-screen h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[760px] flex-1 justify-between gap-6 ">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt="logo"
            height={200}
            width={200}
            quality={100}
            priority={true}
            className="rounded-3xl object-fill bg-black"
          />
          <AppointmentForm
            type={"create"}
            userId={userId}
            patientId={patient.$id}
          />
          <p className="copyright py-12">©2024 HealthTrack</p>
        </div>
      </section>
      <Image
        src={"/assets/images/appointment-img.png"}
        alt="appointment Image"
        height={1000}
        width={1000}
        quality={80}
        priority={true}
        className="side-img max-w-[390px] "
      />
    </div>
  );
}
