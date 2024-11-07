'use client';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

// Define the expected props type for the component
interface NewsCardProps {
  category: string;
  headline: string;
  source: string;
  image: string;
  url: string;
}

export default function NewsCard({
  category,
  headline,
  source,
  image,
  url,
}: NewsCardProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will be true once the component has mounted on the client side
  }, []);

  const handleClick = () => {
    // Open the URL in a new tab
    window.open(url, '_blank');
  };

  // Only render the component on the client side to avoid server-side rendering issues
  if (!isClient) return null;

  // Slice the headline to 40 characters (including spaces)
  const truncatedHeadline = headline.slice(0, 40);

  return (
    <Card
      onClick={handleClick}
      className="py-4"
      style={{
        width: '300px', // Fixed width
        height: 'auto', // Allow height to be flexible based on content
        display: 'flex',
        flexDirection: 'column', // Stack content vertically
        justifyContent: 'space-between', // Distribute space evenly
      }}
    >
      <CardHeader className="w-full pb-0 pt-2 flex-col items-start">
        <p
          className="text-tiny uppercase font-bold text-ellipsis"
          style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {truncatedHeadline}
        </p>
        <small className="text-default-500">{source}</small>
        <h4 className="font-bold text-large">{category}</h4>
      </CardHeader>
      <CardBody className="overflow-hidden py-0">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
          height={150} // Fixed height for the image
          style={{
            objectFit: 'cover', // Ensure the image covers the space without distortion
            borderRadius: '10px', // Optional: for rounded corners
            marginBottom: '10px', // Add small space below the image to prevent tightness
          }}
        />
      </CardBody>
    </Card>
  );
}
