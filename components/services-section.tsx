import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import ServiceCard from "@/components/service-card"

export default function ServicesSection() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-20 bg-yellow-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6 text-center sm:mb-8 lg:mb-10">
          <h2 className="text-xl font-bold tracking-tighter text-gray-900 sm:text-2xl md:text-3xl">Our Services</h2>
          <p className="mx-auto mt-3 max-w-3xl text-xs text-gray-600 sm:text-sm md:text-base">
            Comprehensive Healthcare Solutions for Your Well-being in Gorakhpur
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6">
          <ServiceCard
                       title="Ayushman office"
            description="Ayusman Office for Hospital Ummay – Key Functions
                          Patient Registration & Documentation
                          Managing patient enrollment under the Ayushman Bharat scheme.
                          Verifying eligibility and documentation for beneficiaries.
                          Coordination with Government Authorities
                          Ensuring compliance with National Health Authority (NHA) guidelines.
                          Maintaining updated records and certifications required by the government.
                          Cashless Healthcare Services"
            image="/ayushman.JPG"
          />
          <ServiceCard
                       title="Lab"
            description="Diagnostic Services Offered
                          Routine blood tests (CBC, ESR, etc.)
                          Urine and stool analysis
                          Biochemistry tests (glucose, cholesterol, liver & kidney function)
                          Microbiology (cultures, sensitivity, STI testing)
                          Serology (HIV, HBsAg, dengue, malaria, etc.)
                          Hormone assays (thyroid, reproductive hormones)
                          Coagulation profile
                          Blood banking & cross-matching (if applicable)
                          Lab Equipment & Technology"
                           image="/lab.JPG"
          />
          <ServiceCard
                       title="Private Room"
                       description="Our private hospital rooms offer a comfortable, quiet, and personalized environment for patients. Each room is equipped with modern amenities, including an attached bathroom, air conditioning, television, and a visitor chair. Designed for privacy and healing, our private rooms ensure quality care, safety, and a homely atmosphere during recovery."
                       image="/privateRoom.jpg"
          />
          <ServiceCard
                       title="ICU Ward"
            description="Our ICU ward is equipped with advanced life-support systems and a dedicated team of specialists, providing round-the-clock critical care for patients in need of intensive monitoring and treatment."
            image="/genral.JPG"
          />
          <ServiceCard
                       title="Medical Store"
            description="Core Function
                          Procurement, storage, and dispensing of medicines and medical supplies.
                          Ensures timely availability of drugs as per prescription or hospital protocol.
                          Inventory Management
                          Maintains stock records using manual or digital systems (e.g., HMS integration).
                          Regular stock audits to prevent shortages or expiry of medicines.
                          Monitors fast-moving and critical care drugs."
             image="/medical.JPG"
          />
          <ServiceCard
                       title="Reception"
            description="Our reception desk is the first point of contact for all patients and visitors. Friendly and efficient, our reception team is always ready to assist with appointments, directions, and general inquiries. We strive to create a welcoming and supportive environment for everyone who walks through our doors."
            image="/recaption.JPG"
          />
          <ServiceCard
                       title="Operation threater"
            description="Purpose & Function
                          Equipped for performing surgical procedures ranging from minor to complex.
                          Ensures a sterile and controlled environment for safe surgeries.
                          Infrastructure & Layout
                          Multiple OTs based on hospital size (general surgery, orthopedic, neuro, cardio, etc.).
                          Zoned layout: scrub area, anesthesia room, operating room, instrument room, recovery area."
          image="/ot.JPG"
          />
          <ServiceCard
           
            title="HDU ward"
            description="Purpose & Function
                          Provides intermediate care between ICU and general wards.
                          For patients needing close monitoring and nursing care but not full ICU support.
                          Patient Type
                          Post-operative patients requiring observation.
                          Patients recovering from critical illness or weaning off ventilators.
                          Patients with unstable medical conditions that need frequent monitoring.
                          Staffing & Expertise
                          "
          image="/icu.JPG"
          />
        </div>

        <div className="mt-6 text-center sm:mt-8">
          {/* <Button variant="link" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base">
            Explore All Services <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
          </Button> */}
        </div>
      </div>
    </section>
  )
}
