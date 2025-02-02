"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  jobTitle: z.string().min(2, "Job title must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      companyName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send the form data to your server
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl mx-auto"
      >
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  First Name <span className="text-blue-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="First Name"
                    {...field}
                    className="border-slate-200 focus:border-blue-600 h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Last Name <span className="text-blue-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last Name"
                    {...field}
                    className="border-slate-200 focus:border-blue-600 h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Job & Company Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Job Title <span className="text-blue-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Job Title"
                    {...field}
                    className="border-slate-200 focus:border-blue-600 h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Company Name <span className="text-blue-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Company Name"
                    {...field}
                    className="border-slate-200 focus:border-blue-600 h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-blue-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="border-slate-200 focus:border-blue-600 h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Message <span className="text-blue-600">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Let us know how we can help you!"
                  {...field}
                  className="min-h-[150px] border-slate-200 focus:border-blue-600 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Privacy Policy */}
        <p className="text-sm text-slate-600">
          By submitting this form, you confirm that you agree to the processing
          of your personal data by{" "}
          <span className="font-semibold text-slate-900">AnyTech</span> as
          described in the{" "}
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            privacy policy
          </Link>
          .
        </p>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full sm:w-auto px-8 h-12 bg-[#FF7F5C] hover:bg-[#FF6B44] text-white"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
