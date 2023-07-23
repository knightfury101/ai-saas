"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
    {
        name: "Sam Altman",
        avatar: "S",
        title: "CEO of OpenAI",
        description: "This software by Aditya Singh Rajput transformed our marketing strategy, boosting productivity and efficiency. Highly recommended!"
    },
    {
        name: "Brian Chesky",
        avatar: "B",
        title: "CEO of Airbnb",
        description: "AI-powered chatbots improved customer support, raising satisfaction rates."
    },
    {
        name: "Tim Cook",
        avatar: "T",
        title: "CEO of Apple",
        description: "This software saved me hours of work, creating stunning visuals and high-quality content."
    },
    {
        name: "Reed Hastings",
        avatar: "R",
        title: "CEO of Netflix",
        description: "This service by Aditya Singh Rajput accelerated software development, delivering projects ahead of schedule."
    },
]

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {testimonials.map((item) => (
                <Card key={item.description} className="bg-[#192339] border-none text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-2">
                            <div>
                                <p className="text-lg">{item.name}</p>
                                <p className="text-zinc-400 text-sm">{item.title}</p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-0">
                            {item.description}
                        </CardContent>
                    </CardHeader>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default LandingContent
