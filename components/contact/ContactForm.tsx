"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AnimatePresence, motion } from "framer-motion";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { Sparkle } from "@/components/brand/Botanical";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      form.reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError("Something went wrong. Please use other medium to contact us");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="stamp-marigold overflow-hidden rounded-[40px] border border-ink bg-parchment">
      <div className="flex items-center justify-between border-b border-ink/15 bg-sage/60 px-6 py-5 sm:px-8">
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-ink/45">
            Project brief
          </p>
          <h3 className="mt-1.5 text-[28px] uppercase leading-none">Tell us more</h3>
        </div>
        <Sparkle className="h-6 w-6 text-ink/25" />
      </div>

      <div className="p-6 sm:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink/60">
                    FULL NAME *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Full Name" {...field} />
                  </FormControl>
                  <FormMessage className="text-[11px] font-semibold text-ink" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink/60">
                    EMAIL *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Email" {...field} />
                  </FormControl>
                  <FormMessage className="text-[11px] font-semibold text-ink" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink/60">
                    HOW CAN WE HELP?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={3}
                      placeholder="Tell us what features you're looking forward to..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[11px] font-semibold text-ink" />
                </FormItem>
              )}
            />

            <div className="relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center rounded-full border border-ink/20 bg-sage p-4 text-ink"
                  >
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    <span className="text-[13px] font-bold">Message sent successfully!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-ink h-11 w-full tracking-[-0.01em] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit inquiry"
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center justify-center gap-2 rounded-[20px] border border-ink/20 bg-cream px-3 py-2.5 text-[12px] font-semibold text-ink/65"
                >
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </motion.div>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
