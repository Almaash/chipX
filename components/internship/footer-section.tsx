export function FooterSection() {
  return (
    <footer className="bg-[#0b1f3a]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 text-white md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">ChipX</div>
            <p className="mt-2 text-sm text-slate-300">
              Practical, mentor-led semiconductor education. Built for real careers.
            </p>
          </div>
          <FooterCol title="Programs" links={["Career Track", "Internship", "Labs", "Workshops"]} />
          <FooterCol title="Resources" links={["Syllabus", "FAQ", "Blog", "Support"]} />
          <FooterCol title="Company" links={["About", "Careers", "Contact", "Privacy"]} />
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-300">
          © {new Date().getFullYear()} ChipX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold text-white">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {links.map((l) => (
          <li key={l}>
            <a className="hover:text-white" href="#">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
