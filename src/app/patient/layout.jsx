import { SidebarProvider } from "@/context/SidebarContext";
import PatientSidebar from "@/components/patientUI/PatientSidebar";
import PatientWrapper from "@/components/patientUI/PatientWrapper";
import { getSession } from "@/utils/getSessions";
import { redirect } from "next/navigation";
import SessionProviderInitial from "@/context/SessionProvider";

export default async function PatientLayout({ children }) {
  const session = await getSession();
  if (session.isLogin == false || session.role != "patient") {
    redirect("/local");
  }
  return (
    <SessionProviderInitial session={{...session}}>
      <SidebarProvider>
        <PatientSidebar session={{ ...session }} />
        <PatientWrapper>{children}</PatientWrapper>
      </SidebarProvider>
    </SessionProviderInitial>
  );
}
