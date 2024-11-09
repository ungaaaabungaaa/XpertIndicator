import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Button } from "@nextui-org/button";

export default function Checkout_Card() {
  return (
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60">XpertIndicator</p>
        <h4 className="text-white/90 font-medium text-xl">Simplfy Your Trading</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://i.imgur.com/bVFNBru.webp"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Get Started Now</p>
            <p className="text-tiny text-white/60">20% OFF</p>
          </div>
        </div>
        <Button radius="full" size="sm">Trade & Win</Button>
      </CardFooter>
    </Card>

  );
}





