import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput, type ContactResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useContactMutation() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Validate data against the shared schema before sending
      // This ensures type safety and catches basic errors early
      const validated = api.contact.submit.input.parse(data);

      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message || "Validation failed");
        }
        if (res.status === 500) {
          const error = api.contact.submit.responses[500].parse(await res.json());
          throw new Error(error.message || "Internal server error");
        }
        throw new Error("Failed to submit inquiry");
      }

      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });
}
