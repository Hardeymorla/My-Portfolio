import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-3xl font-bold text-center mb-10">
        Let’s Work Together
      </h3>
      <div className="max-w-lg mx-auto">
        <form
          action="https://formspree.io/f/mqaybbnb" 
          method="POST"
          className="flex flex-col gap-4"
        >
          <Input
            type="text"
            name="name"
            placeholder="Name"
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <Textarea
            name="message"
            placeholder="Message"
            required
          />

          <Button type="submit" >
            Send
          </Button>
        </form>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.linkedin.com/in/ibrahim-raheem-84939918a/">LinkedIn</a>
          <a href="https://github.com/Hardeymorla">Github</a>
          <a href="https://x.com/AdemoRaheem?t=DNOXnwfFgrKoUfsZVjribA&s=09">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
