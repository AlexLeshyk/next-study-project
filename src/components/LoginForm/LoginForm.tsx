"use client";

import { ArrowRightIcon, KeyIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components//ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(50),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-3 mt-5 block text-xs font-medium text-gray-900">
                  Email
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="enter e-mail"
                      {...field}
                      className={`peer block w-full rounded-md border border-gray-200 py-[9px] 
                      pl-10 text-sm outline-2 placeholder:text-gray-500`}
                    />
                    <MailIcon
                      className={`pointer-events-none absolute left-3 top-1/2 h-[22px] w-[22px]
                  -translate-y-1/2 text-gray-500 peer-focus:text-gray-900`}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="mb-3 mt-5 block text-xs font-medium text-gray-900">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={`peer block w-full rounded-md border border-gray-200 
                      py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
                      placeholder="enter password"
                      {...field}
                    />
                    <KeyIcon
                      className={`pointer-events-none absolute left-3 top-1/2 h-[22px] w-[22px]
                  -translate-y-1/2 text-gray-500 peer-focus:text-gray-900`}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4 w-full" type="submit">
            Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
          <div className="flex h-8 items-end space-x-1"></div>
        </div>
      </form>
    </Form>
  );
};
