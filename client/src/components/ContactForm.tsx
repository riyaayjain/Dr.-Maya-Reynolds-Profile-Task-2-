import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { z } from "zod";

/* -----------------------------
   Local frontend-only schema
-------------------------------- */
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(5, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormData) {
    // Frontend-only behavior (no backend)
    console.log("Contact form submitted:", data);
    form.reset();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-border/40"
    >
      <h3 className="text-2xl font-serif font-bold text-primary mb-6">
        Send a Message
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="bg-background/50 border-border focus:ring-primary/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border focus:ring-primary/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">
                  How can I help?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Briefly describe what brings you to therapy..."
                    className="min-h-[120px] bg-background/50 border-border focus:ring-primary/20 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Get in Touch
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
