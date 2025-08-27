import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CourseCardProps {
  title: string
  duration: string
  description: string
  features: string[]
  price?: string
}

export default function CourseCard({ title, duration, description, features, price }: CourseCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-serif text-xl">{title}</CardTitle>
        <CardDescription className="text-secondary font-semibold">{duration}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        {price && (
          <div className="pt-4 border-t">
            <p className="text-2xl font-bold text-secondary">{price}</p>
          </div>
        )}
        <Button className="w-full bg-secondary hover:bg-secondary/90">Learn More</Button>
      </CardContent>
    </Card>
  )
}
