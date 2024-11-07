import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Chip } from "@nextui-org/chip";

export default function FAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <div className="w-100 p-6 flex items-center justify-center flex-col">
        <Chip>FAQ</Chip>
        <br />
        <h1 className="text-white text-2xl font-semibold text-center">
          Frequently Asked Questions?
        </h1>
        <p className="text-white text-center">
          We&apos;ve compiled a list of the most frequently asked questions to
          help you understand its features and benefits.
        </p>
        <br />

        <Accordion className="w-full text-white md:w-4/5" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is XpertIndicator, &amp; how does it work?</AccordionTrigger>
            <AccordionContent>
              XpertIndicator is a powerful trading tool designed for use with TradingView. It analyzes market data using advanced algorithms and provides real-time signals to help traders identify profitable trading opportunities. By interpreting complex market trends, our indicators empower traders to make informed decisions and enhance their trading strategies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Who can benefit from using XpertIndicator?</AccordionTrigger>
            <AccordionContent>
              XpertIndicator is ideal for traders of all levels, from beginners to experienced professionals. Whether you are looking to refine your trading strategy, identify new opportunities, or improve your overall trading performance, our indicators provide valuable insights that can help you achieve your trading goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do I need prior trading experience to use XpertIndicator?</AccordionTrigger>
            <AccordionContent>
              No prior trading experience is necessary to use XpertIndicator. Our user-friendly interface and comprehensive tutorials make it easy for beginners to understand and apply the indicators effectively. Additionally, experienced traders can utilize our advanced features to enhance their trading strategies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I use XpertIndicator on multiple devices?</AccordionTrigger>
            <AccordionContent>
              Yes, XpertIndicator is fully compatible with TradingView, allowing you to access it on any device with internet connectivity. Whether you prefer to trade on a desktop, laptop, or mobile device, our indicators provide seamless functionality and real-time updates to support your trading needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How do I get support if I have questions?</AccordionTrigger>
            <AccordionContent>
              Our dedicated support team is here to assist you with any questions or issues you may encounter. You can reach out to us through our &quot;Contact Us&quot; page, and we will respond promptly to ensure you have the best experience using XpertIndicator.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How can I get in touch with your support team?</AccordionTrigger>
            <AccordionContent>
              You can contact our support team by filling out the form on our &quot;Contact Us&quot; page. Please provide your name, email address, and a brief message outlining your query, and we will get back to you as soon as possible. Your satisfaction is our top priority!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
