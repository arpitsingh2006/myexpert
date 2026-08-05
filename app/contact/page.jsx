import BannerSection from "@/app/components/common/BannerSection";
import ContactInfoSection from "@/app/components/common/ContactInfoSection";
import CTASection from "@/app/components/common/CTASection";
import ContactFormSection from "./ContactFormSection";




export default function ContactPage() {
  return (
    <>
        <BannerSection
            title="Let's Plan Your Perfect Journey"
            description="Connect with the travel specialists at MyXpertTrion for personalized trip planning, expert destination advice, and seamless travel arrangements. From dream vacations to business travel, we're here to make every journey unforgettable."
            image="/images/contact.jpg"
            buttonText="Start Your Travel Consultation"
            buttonUrl="/contact"
            showShareButton={true}
        />
        <ContactInfoSection
            officeTitle="Head Office"
            officeAddress="MyXpertTrion Travel Hub, Jaipur, Rajasthan, India"

            phone1="+91 9876543210"
            phone2="+91 9876543211"

            email="hello@myxperttrion.com"

            workingHours="Monday - Sunday"
            supportText="09:00 AM - 09:00 PM"
        />
        <ContactFormSection/>
        <CTASection/>
        
        
   
        
    </>
  );
}