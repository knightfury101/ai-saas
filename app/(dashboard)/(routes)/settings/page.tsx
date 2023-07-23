import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

const SettingsPage = async () => {

    const isPro = await checkSubscription();

    return (
        <div>
            <Heading title="Settings" description="Control Your Account With Ease." icon={Settings} iconColor="text-gray-700" bgColor="bg-gray-700/10" />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    {isPro ? "You Are Currently Enjoying Premium Features." : "You Are Currently Using Free Services."}
                </div>
                <SubscriptionButton isPro={isPro} />
            </div>
        </div>
    )
}

export default SettingsPage;