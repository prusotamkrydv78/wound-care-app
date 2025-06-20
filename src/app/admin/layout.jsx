import AdminSidebar from '@/components/adminUI/AdminSidebar';
import AdminWrapper from '@/components/adminUI/AdminWrapper';
import { getSession } from '@/utils/getSessions';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }) {
  const session = await getSession();
  // Authentication check
  // if (session.isLogin == false || session.role != 'admin') {
  //     redirect("/auth/login")
  // }

  return (
    <AdminWrapper>
      <AdminSidebar />
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="p-6">
            {children}
          </div>
        </div>
      </main>
    </AdminWrapper>
  );
}
