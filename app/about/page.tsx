import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We're passionate about sharing knowledge and building a community of
            learners and creators.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Community Driven",
    description:
      "Join a thriving community of developers sharing knowledge and experiences.",
    icon: Users,
  },
  {
    title: "Quality Content",
    description:
      "Carefully curated articles and tutorials to help you learn and grow.",
    icon: BookOpen,
  },
  {
    title: "Expert Contributors",
    description:
      "Learn from industry experts with years of real-world experience.",
    icon: Award,
  },
];

const team = [
  {
    name: "John Doe",
    role: "Founder & Editor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Jane Smith",
    role: "Lead Writer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Mike Johnson",
    role: "Technical Editor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];