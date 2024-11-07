
import { Chip } from "@nextui-org/chip";
import { MagicCard } from '@/components/ui/magic-card';
import TypingAnimation from "@/components/ui/typing-animation";
import { BarChart3, Shield, Wallet, LineChart ,Bot ,Proportions } from "lucide-react"
import Meteors from "@/components/ui/meteors";

export default function Best_Tools() {
  return (
    <div className="min-h-screen text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-4">
         <Chip>Best Tools</Chip>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-2xl lg:text-4xl">
              Everything you need in<br />one platform
            </h1>
            <p className="text-lg text-white max-w-2xl">
              We have built the best in class tools to manage the complete lifecycle of your crypto investments.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap bg-magic-card overflow-hidden"
            gradientColor={"#262626"}
            >
            <Meteors number={30} /> 
            <br></br>
            <br></br>
            <br></br>
            <BarChart3 className="w-8 h-8 md:w-12 md:h-12 text-purple-x"/>  
            <br></br>  
            <TypingAnimation
            className=" text-white text-2xl font-bold"
            text="Real Time Analytics"
            />
            <p className="text-white">Accurate & timely market Data</p>
            <br></br>
            <br></br>
            <br></br>
        
          </MagicCard>

          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap bg-magic-card"
            gradientColor={"#262626"}
            >
            <Meteors number={10} />    
            <br></br>
            <br></br>
            <br></br>
            <LineChart className="w-8 h-8 md:w-12 md:h-12 text-purple-x"/>  
            <br></br>  
            <TypingAnimation
            className=" text-white text-2xl font-bold"
            text="In-Depth Charting"
            />
            <p className="text-white">advanced analytics & charting tools</p>
            <br></br>
            <br></br>
            <br></br>
        
          </MagicCard>


          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap bg-magic-card"
            gradientColor={"#262626"}
            >
            <Meteors number={22} />    
            <br></br>
            <br></br>
            <br></br>
            <Shield className="w-8 h-8 md:w-12 md:h-12 text-purple-x"/>  
            <br></br>  
            <TypingAnimation
            className=" text-white text-2xl font-bold"
            text="Security Features"
            />
            <p className="text-white">Cold Storage & Encryption</p>
            <br></br>
            <br></br>
            <br></br>
        
          </MagicCard>

          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap bg-magic-card"
            gradientColor={"#262626"}
            >
            <Meteors number={15} />     
            <br></br>
            <br></br>
            <br></br>
            <Wallet className="w-8 h-8 md:w-12 md:h-12 text-purple-x"/>  
            <br></br>  
            <TypingAnimation
            className=" text-white text-2xl font-bold"
            text="Insights & Reports"
            />
            <p className="text-white">market reports & investment</p>
            <br></br>
            <br></br>
            <br></br>
        
          </MagicCard>


          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap bg-magic-card"
            gradientColor={"#262626"}
            >
            <Meteors number={15} />         
            <br></br>
            <br></br>
            <br></br>
            <Bot className="w-8 h-8 md:w-12 md:h-12 text-purple-x"/>  
            <br></br>  
            <TypingAnimation
            className=" text-white text-2xl font-bold"
            text="Real Time Analytics"
            />
            <p className="text-white"> Instant Investment Decisions</p>
            <br></br>
            <br></br>
            <br></br>
        
          </MagicCard>


          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap bg-magic-card"
            gradientColor={"#262626"}
            >
            <Meteors number={25} />     
            <br></br>
            <br></br>
            <br></br>
            <Proportions className="w-8 h-8 md:w-12 md:h-12 text-purple-x"/>  
            <br></br>  
            <TypingAnimation
            className=" text-white text-2xl font-bold"
            text="Presonilzed Reports"
            />
            <p className="text-white">price movements & market trends</p>
            <br></br>
            <br></br>
            <br></br>
        
          </MagicCard>




         



          

         

        </div>
      </div>
    </div>
  )
}