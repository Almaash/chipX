import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    CalendarDays,
    MapPin,
    Timer,
    BookOpen,
    MonitorSmartphone,
    ShieldCheck,
    SquareStack,
    Clock,
} from "lucide-react"

export function ProgramDiagram() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-10">
            <div className="grid gap-8 md:grid-cols-2 items-center">
                {/* LEFT DIAGRAM */}
                <div className="flex justify-center mr-10" >
                    <div className="relative  flex items-center justify-center">
                        {/* Central Node with Image */}
                            <img
                                src="/images/internship_pageImage2.png" // <-- replace with your image path
                                alt="Program"
                                className="object-contain w-[80%] h-full"
                            />

                    </div>
                </div>

                {/* RIGHT DETAILS CARD */}
                <Card className="border border-[#e5e7eb] shadow-lg rounded-xl">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-base font-semibold text-slate-800">
                            Key Program Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <DetailRow icon={CalendarDays} label="Start Date" value="October 7" />
                        <DetailRow icon={Timer} label="Duration" value="12 Weeks" />
                        <DetailRow icon={MapPin} label="Mode" value="Hybrid (Online + Labs)" />
                        <DetailRow
                            icon={BookOpen}
                            label="Prerequisites"
                            value="Basic EE/CS or equivalent"
                        />

                        <div className="pt-2">
                            <a
                                href="#apply"
                                className="inline-block rounded-md bg-[#2f6fed] px-4 py-2 text-sm font-medium text-white hover:bg-[#265dcc]"
                            >
                                Learn More
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

function DetailRow({
    icon: Icon,
    label,
    value,
}: {
    icon: React.ElementType
    label: string
    value: string
}) {
    return (
        <div className="flex items-center gap-3 rounded-md border border-[#e5e7eb] bg-white px-3 py-2">
            <Icon className="h-4 w-4 text-[#2f6fed]" />
            <span className="text-sm text-slate-600">{label}:</span>
            <span className="ml-auto text-sm font-semibold text-slate-900">{value}</span>
        </div>
    )
}


