import { Shield, Award, Clock, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Сертифицирован",
      subtitle: "1С:Франчайзи"
    },
    {
      icon: Award,
      title: "Лидер рынка",
      subtitle: "10 лет опыта"
    },
    {
      icon: Clock,
      title: "Гарантия",
      subtitle: "99.9% uptime"
    },
    {
      icon: Users,
      title: "Доверяют",
      subtitle: "5000+ клиентов"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12">
      {badges.map((badge, index) => {
        const IconComponent = badge.icon;
        return (
          <div 
            key={index}
            className="flex items-center gap-3 px-4 py-3 bg-card/60 backdrop-blur-sm rounded-lg border border-primary/10 shadow-trust hover:shadow-medium transition-all duration-300"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">{badge.title}</div>
              <div className="text-xs text-muted-foreground">{badge.subtitle}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;