import { SidebarProvider } from '@/context/SidebarContext';
import DoctorSidebar from '@/components/doctorUI/DoctorSidebar';
import DoctorWrapper from '@/components/doctorUI/DoctorWrapper';

export default function DoctorLayout({ children }) {
    return (
        <SidebarProvider>
            <DoctorSidebar />
            <DoctorWrapper>{children}</DoctorWrapper>
        </SidebarProvider>
    );
}
