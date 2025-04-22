// import EventToast from "@/components/event-toast";
import { HeroSection } from "@/components/landing/hero";

export default function Home() {
    return (
        <main className="bg-white dark:bg-black/5 overflow-x-hidden">
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
                <HeroSection />
            </div>
            {/* <EventToast /> */}
        </main>
    );
}
