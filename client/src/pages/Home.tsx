import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Sun, MapPin, Mail, ArrowRight } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import image from '../assets/image.png'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-foreground">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-6">
        
        

        <div className="container relative z-10 mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary leading-[1.1]">
              Find clarity and peace within.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg leading-relaxed">
              Specializing in anxiety, trauma, burnout, and overthinking. A grounded, evidence-based approach to help you feel safe and understood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                  Schedule a Consultation
                </Button>
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} offset={-100}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-lg">
                  Learn More
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading subtitle="Areas of Focus" title="How I Can Help" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Anxiety & Panic" 
              description="Find relief from constant worry, intrusive thoughts, and panic attacks. Together we'll build tools to ground your nervous system and reclaim your peace of mind."
              icon={Brain}
              delay={0}
            />
            <ServiceCard 
              title="Trauma & EMDR" 
              description="Heal from past experiences that still feel present today. Using evidence-based EMDR and somatic approaches, we process trauma safely at your own pace."
              icon={Heart}
              delay={0.1}
            />
            <ServiceCard 
              title="Burnout Support" 
              description="For high-achieving professionals feeling overwhelmed, exhausted, and stuck in perfectionism. Learn to set boundaries and restore your energy."
              icon={Sun}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                {/* Professional woman portrait */}
                <img 
                  src={image}
                  alt="Dr. Maya Reynolds"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                <p className="font-serif italic text-primary text-lg">"Therapy is a collaborative journey back to yourself."</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-medium tracking-widest text-sm uppercase block mb-3">About Me</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Dr. Maya Reynolds, PsyD
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I am a Licensed Clinical Psychologist based in Santa Monica with over a decade of experience helping individuals navigate life's toughest transitions.
                </p>
                <p>
                  My approach is warm, collaborative, and grounded. I don't believe in a "one size fits all" therapy. Instead, I integrate CBT, EMDR, and mindfulness-based techniques tailored to your unique needs, helping you feel safe, seen, and understood.
                </p>
                <p>
                  Whether you are struggling with high-functioning anxiety or healing from deep-rooted trauma, my goal is to provide a space where you can unburden yourself and find a path forward.
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-primary font-medium">
                <MapPin className="w-5 h-5" />
                <span>Santa Monica, CA & Telehealth across California</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section id="approach" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading subtitle="My Philosophy" title="A Safe Space to Heal" />
          
          <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-8 md:p-16">
             {/* Calm office interior background */}
            <div className="absolute inset-0 z-0">
               <img 
                  src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2000&auto=format&fit=crop"
                  alt="Therapy office"
                  className="w-full h-full object-cover opacity-10 mix-blend-overlay"
               />
               <div className="absolute inset-0 bg-primary/90" />
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold">Trauma-Informed & Evidence-Based</h3>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">
                  I prioritize safety and pacing. We work with your nervous system, not against it. My practice is grounded in neuroscience and attachment theory, ensuring that our work together is not just supportive, but transformative.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Nervous System Regulation",
                  "Mindfulness Integration",
                  "Somatic Awareness",
                  "Cognitive Restructuring",
                  "Attachment Healing"
                ].map((item, i) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE SECTION */}
      <section id="office" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/images/office-1.jpg" 
                      alt="Waiting area with warm lighting" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 -translate-y-8">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/images/office-2.jpg" 
                      alt="Private consulting room" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <SectionHeading subtitle="Our Office" title="A Calm Space for Healing" align="left" />
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My office is designed to be a sanctuary from the outside world—a place where you can feel safe to pause, breathe, and just be.
                </p>
                <p>
                  From the moment you step in, every detail is curated to support your comfort and privacy. With warm lighting, soft textures, and a quiet atmosphere, this is a space where you can let your guard down and focus on your healing.
                </p>
                <p>
                  Located in the heart of Santa Monica, the office offers a private and accessible setting for our work together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading subtitle="Common Questions" title="FAQ" />
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Who do you work with?", a: "I work primarily with adults and high-achieving professionals navigating anxiety, trauma, and burnout. My clients are often looking for depth and practical tools." },
              { q: "Do you offer trauma therapy?", a: "Yes, I specialize in trauma-informed care. I am trained in EMDR (Eye Movement Desensitization and Reprocessing), which is highly effective for processing traumatic memories." },
              { q: "Do you provide telehealth?", a: "Yes, I offer secure video sessions for clients located anywhere in California. Telehealth allows for flexibility and comfort from your own space." },
              { q: "What are your fees?", a: "Please reach out for my current fee structure. I can provide a superbill for you to submit to your insurance for out-of-network reimbursement." },
              { q: "What is your therapy style?", a: "My style is warm, interactive, and grounded. I am not a 'blank slate' therapist; I actively engage with you, offer feedback, and help you connect the dots." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-lg px-4 data-[state=open]:bg-secondary/20 transition-colors">
                <AccordionTrigger className="text-lg font-medium text-primary hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-8">
              <SectionHeading subtitle="Contact Me" title="Start Your Journey" align="left" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Finding the right therapist is the first step toward healing. Reach out to schedule a free 15-minute consultation to see if we are a good fit.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">Email Me</h4>
                    <p className="text-muted-foreground">hello@drmayareynolds.com</p>
                    <p className="text-sm text-muted-foreground mt-1">I typically respond within 24-48 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">Office Location</h4>
                    <p className="text-muted-foreground">123th Street 45 W</p>
                    <p className="text-muted-foreground">Santa Monica, CA 90401</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 md:pt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif font-bold mb-2">Dr. Maya Reynolds, PsyD</h3>
            <p className="text-primary-foreground/70 text-sm">Licensed Clinical Psychologist (PSY 12345)</p>
          </div>
          
          <div className="text-center md:text-right text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.</p>
            <p className="mt-1">Designed with care in Santa Monica, CA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
