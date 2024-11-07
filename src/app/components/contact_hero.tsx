import {Input} from "@nextui-org/input";
import {Textarea} from "@nextui-org/input";
import { Chip } from "@nextui-org/chip";
import {Button} from "@nextui-org/button";

export default function Contact_Hero() {
    return (
      <>
      <div className="w-full flex flex-col items-center justify-center">
        
        <div className="p-6  lg:p-24 w-full">
          <div className="w-full flex flex-col items-center text-center p-6 lg:p-24 bg-contact-hero-background-x rounded-3xl">
            <Chip>Contact</Chip>
            <br />
            <h1 className="text-white text-2xl font-semibold">
            How can we help you?
            </h1>
            <p className="text-white">Choose a category below to email the support team so we can get back to you as quickly as possible.</p>
            <br></br>
            <div className="w-full rounded-3xl">
          
              
            <div className="w-full flex flex-col lg:flex-row rounded-3xl">
              <div className="w-full lg:w-1/2 h-full p-4 lg:p-21 text-start rounded-3xl">
                <br></br>
                <br></br>
                <Input isClearable isRequired  className='w-full' type="text" label="What’s your name?" />
                <br></br>
                <Input isClearable isRequired  className='w-full' type="email" label="Email" />
                <br></br>
                <Textarea isRequired
                  label="Discribe your questions here.."
                  className="w-full"
                />
                <br></br>
                <Button size="lg" radius="md" variant="faded" className='w-full bg-signup-button pt-2 pb-2'>Submit</Button>
                <br></br>
                <br></br>


              </div>
              <div className="w-full lg:w-1/2 h-full p-4 lg:p-21 text-start rounded-3xl">
                <br></br>
                <br></br>
                <h1 className="text-white text-2xl">Prefer email?</h1>
                <p className="text-purple-x ">Support@Xpertindicator.com</p>
                <p className="text-purple-x ">Contact@Xpertindicator.com</p>
                <br></br>
                <h1 className="text-white text-2xl">Prefer Phone?</h1>
                <p className="text-white">Call Us @ <span className="text-purple-x">+91 9945405643</span></p>
                <p className="text-white">Monday - Friday : 9 Am - 10:30 Pm IST</p>
                <br></br>
                <br></br>
              </div>
            </div>

            </div>
          </div>  
        </div>

          
          
        
      </div>
    </>
    );
  }