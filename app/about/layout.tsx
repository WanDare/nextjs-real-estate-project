import Footer from "@/components/Footer"
import { Navbar } from "@/components/navbar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </section>
  );
}
