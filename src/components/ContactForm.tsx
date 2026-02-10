import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const ContactForm = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-light text-center text-foreground mb-12">
          Connect with Stephanie Ornani for Exclusive Guidance in Santa Barbara and Montecito Real Estate.
        </h2>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="Name"
              className="bg-transparent border-0 border-b border-foreground rounded-none focus:ring-0 px-0"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-transparent border-0 border-b border-foreground rounded-none focus:ring-0 px-0"
            />
          </div>

          <div className="flex items-start gap-3 pt-4">
            <Checkbox
              id="agree"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              className="mt-1"
            />
            <label htmlFor="agree" className="text-sm text-muted-foreground leading-relaxed">
              I agree to be contacted by Ani Estate Group via call, email, and
              text for real estate services. To opt out, you can reply 'stop' at
              any time or reply 'help' for assistance. You can also click the
              unsubscribe link in the emails. Message and data rates may apply.
              Message frequency may vary.{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background tracking-wider px-12"
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
