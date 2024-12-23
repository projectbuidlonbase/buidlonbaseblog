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
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <item.icon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const contactInfo = [
  {
    title: "Email",
    details: "hello@modernblog.com",
    icon: Mail,
  },
  {
    title: "Live Chat",
    details: "Available Monday to Friday, 9am - 5pm EST",
    icon: MessageSquare,
  },
  {
    title: "Office",
    details: "123 Blog Street, Digital City, 12345",
    icon: MapPin,
  },
];