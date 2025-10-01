import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyHeader from "@/components/PrivacyHeader";
import PrivacyContent from "@/components/PrivacyContent";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PrivacyHeader />
      <PrivacyContent />
      <Footer />
    </div>
  );
};

export default Privacy;
