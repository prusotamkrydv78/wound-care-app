import Footer from '@/components/publicUi/Footer'; 
import PublicNavbar from '@/components/publicUi/PublicNavbar';
import { getSession } from '@/utils/getSessions';

export default async function LocalLayout({ children }) {
  const session = await getSession() ||{}
  
  return (
    <div className="min-h-screen">
      <PublicNavbar  session={{...session}}  />
      <div className="pt-16">
        {children}
      </div>
      <Footer/>
    </div>
  );
}
