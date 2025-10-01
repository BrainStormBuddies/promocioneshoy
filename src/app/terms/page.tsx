import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsHeader from "@/components/TermsHeader";
import TermsContent from "@/components/TermsContent";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TermsHeader />
      <TermsContent />
      <Footer />
    </div>
  );
};

export default Terms;
