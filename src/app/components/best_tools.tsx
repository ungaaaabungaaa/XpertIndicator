
import { Chip } from "@nextui-org/chip";
import { MagicCard } from '@/components/ui/magic-card';
import TypingAnimation from "@/components/ui/typing-animation";
import { BarChart3, Shield, Wallet, LineChart ,Bot ,Proportions } from "lucide-react"
import Meteors from "@/components/ui/meteors";
import { Simple_Bento } from '../components/simplebento';

export default function Best_Tools() {
  return (
    <div className="min-h-screen text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-4">
         <Chip>AI Indicator</Chip>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-2xl lg:text-4xl">
              Everything you need in<br />one Indicator
            </h1>
            <p className="text-lg text-white max-w-2xl">
              We have built the best in class tools to manage the complete lifecycle For Your Trading.
            </p>
          </div>
        </div>

        <Simple_Bento></Simple_Bento>
      </div>
    </div>
  )
}