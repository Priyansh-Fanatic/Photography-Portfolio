"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// ── EmailJS config ─────────────────────────────────────────────────────────
// These come from https://dashboard.emailjs.com
// Service:  Email Services → pick your Gmail/Outlook service → copy Service ID
// Template: Email Templates → your template → copy Template ID
// Public Key: Account → API Keys → Public Key
const EMAILJS_SERVICE_ID  = "service_kj1664r"
const EMAILJS_TEMPLATE_ID = "template_akklidh"
const EMAILJS_PUBLIC_KEY  = "oogOxo_fBIKdjnvQB"
// ──────────────────────────────────────────────────────────────────────────

const formSchema = z.object({
  name:    z.string().min(2,  { message: "Name must be at least 2 characters."      }),
  email:   z.string().email({ message: "Please enter a valid email address."        }),
  subject: z.string().min(5,  { message: "Subject must be at least 5 characters."   }),
  message: z.string().min(10, { message: "Message must be at least 10 characters."  }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted,  setIsSubmitted]  = useState(false)
  const [error,        setError]        = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    setError(null)

    const templateParams = {
      from_name:  values.name,
      from_email: values.email,
      reply_to:   values.email,
      subject:    values.subject,
      message:    values.message,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      )
      setIsSubmitted(true)
      form.reset()
    } catch (err: any) {
      console.error("EmailJS error:", err)
      // Friendly error message
      if (err?.status === 400 || err?.text?.includes("service")) {
        setError("Email service not configured yet. Please email me directly at officialpriyansh25@gmail.com")
      } else {
        setError("Failed to send message. Please try again or email officialpriyansh25@gmail.com")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  /* ── Success state ── */
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-14 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-orange/15 flex items-center justify-center animate-bounce-once">
          <CheckCircle2 className="h-8 w-8 text-brand-orange" />
        </div>
        <div>
          <h3 className="text-2xl font-black mb-2">Message Sent! 🎉</h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            Thanks for reaching out! I&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="rounded-full px-6 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  /* ── Form ── */
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="rounded-xl border-border bg-background h-12 focus:border-brand-orange focus:ring-brand-orange/20"
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
                <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="your@email.com"
                    type="email"
                    className="rounded-xl border-border bg-background h-12 focus:border-brand-orange focus:ring-brand-orange/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Photography · Design · Video · Collab"
                  className="rounded-xl border-border bg-background h-12 focus:border-brand-orange focus:ring-brand-orange/20"
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
              <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project..."
                  className="min-h-[140px] resize-none rounded-xl border-border bg-background focus:border-brand-orange focus:ring-brand-orange/20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Error banner */}
        {error && (
          <div className="flex items-start gap-3 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3">
            <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-brand-orange hover:bg-brand-orange-dark text-white border-0 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send Message <Send className="h-4 w-4" />
            </span>
          )}
        </Button>

      </form>
    </Form>
  )
}
