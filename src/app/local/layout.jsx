import Footer from '@/components/publicUi/Footer';
import PublicNavbar from '@/components/publicUI/PublicNavbar';

export default function LocalLayout({ children }) {
  return (
    <div className="min-h-screen">
      <PublicNavbar />
      <div className="pt-16">
        {children}
      </div>
      <Footer/>
    </div>
  );
}
