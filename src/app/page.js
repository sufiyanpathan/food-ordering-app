import AboutUs from "@/components/layout/AboutUs";
import ContactUs from "@/components/layout/ContactUs";
import CustomFooter from "@/components/layout/CustomFooter";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <AboutUs />
      <ContactUs />
      <CustomFooter />
    </>
  );
}
