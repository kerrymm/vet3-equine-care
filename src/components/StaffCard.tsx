import { Card, CardContent } from "@/components/ui/card";

interface StaffCardProps {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

const StaffCard = ({ name, role, image, bio }: StaffCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-muted relative overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <div className="text-6xl font-bold text-muted-foreground">{name.charAt(0)}</div>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-accent font-medium mb-3">{role}</p>
        {bio && <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>}
      </CardContent>
    </Card>
  );
};

export default StaffCard;
