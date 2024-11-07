import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <>
      <div className="relative bg-transparent border-none">
        <HeroVideoDialog
          className="dark:hidden block bg-transparent m-0 p-0 border-none"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block bg-transparent m-0 p-0 border-none"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </>
  );
}
