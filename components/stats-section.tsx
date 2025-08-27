interface StatsSectionProps {
  stats: Array<{
    number: string
    label: string
  }>
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-serif text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
