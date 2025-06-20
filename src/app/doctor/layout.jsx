import { SidebarProvider } from '@/context/SidebarContext';
import DoctorSidebar from '@/components/doctorUI/DoctorSidebar';
import DoctorWrapper from '@/components/doctorUI/DoctorWrapper';
import { getSession } from '@/utils/getSessions';
import { redirect } from 'next/navigation';

export default async function DoctorLayout({ children }) {
   const session = await getSession()
    //   if (session.isLogin == false || session.role != 'doctor') {
    //       redirect("/local")
    //   }
    return (
        <SidebarProvider>
            <DoctorSidebar />
            <DoctorWrapper>{children}</DoctorWrapper>
        </SidebarProvider>
    );
}
