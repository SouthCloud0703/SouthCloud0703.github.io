"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, ExternalLink, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  // Faster scroll function with immediate start
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

      // Use a faster animation with less easing
      window.scrollTo({
        top: y,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-heading font-bold text-xl">
            <Link href="/" className="gradient-text">
              Portfolio
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer transition-all-300 hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="cursor-pointer transition-all-300 hover:text-primary"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer transition-all-300 hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contributor")}
              className="cursor-pointer transition-all-300 hover:text-primary"
            >
              Contributor
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="cursor-pointer transition-all-300 hover:text-primary"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer transition-all-300 hover:text-primary"
            >
              Contact
            </button>
          </nav>
          <Button size="sm" className="transition-all-300 hover:scale-105" onClick={() => scrollToSection("contact")}>
            Get in Touch
          </Button>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="font-heading text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="gradient-text">Yutaro</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Experience in business development and full-stack development leveraging AI
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl"></div>
              <div className="relative w-64 h-64 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NyAeS0CP_400x400.jpg-me4j4brUI5J3QKfjHf5TJUqEKlbWn9.jpeg"
                  alt="Yutaro"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 scroll-mt-20">
          <h2 className="font-heading text-3xl font-bold mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                Majored in econometrics at university. Entered the crypto industry through bot development in Python.
                Later participated in numerous hackathons, gaining experience in both business and development. Engaged
                with blockchain across a wide range of areas, from supporting Web3 adoption in major Japanese
                corporations to developing crypto-native products.
              </p>
              <h3 className="text-xl font-semibold">Career Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Continuously challenge new things by following curiosity. Stagnation is regression. Also, always strive
                to create positive-sum outcomes whenever possible.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Experience Timeline</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <h4 className="font-medium text-lg">co-founder/CEO at Windfall</h4>
                  <p className="text-sm text-muted-foreground mt-1">2024 - Present</p>
                  <p className="text-muted-foreground mt-2">
                    Project launch, fundraising, business development, UI/UX design, project management
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <h4 className="font-medium text-lg">Analyst at Accenture</h4>
                  <p className="text-sm text-muted-foreground mt-1">2023 - 2024</p>
                  <p className="text-muted-foreground mt-2">
                    Technical research and development in the blockchain space, particularly around wallet key
                    management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 scroll-mt-20">
          <h2 className="font-heading text-3xl font-bold mb-12 gradient-text">Skills & Expertise</h2>
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Business</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="BizDev" />
                <SkillBadge name="Project Management" />
                <SkillBadge name="Fundraising" />
                <SkillBadge name="UI/UX Design" />
                <SkillBadge name="Product Strategy" />
                <SkillBadge name="Market Research" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="React" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="JavaScript" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Next.js" />
                <SkillBadge name="Python" />
                <SkillBadge name="GraphQL" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="V0" />
                <SkillBadge name="Replit" />
                <SkillBadge name="Cursor" />
                <SkillBadge name="Windsurf" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 scroll-mt-20">
          <h2 className="font-heading text-3xl font-bold mb-12 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Windfall"
              description="LST-based Gaming on Solana. Win the game, Own the Yield."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BAnjcJdZCT4ZyfJAJ0oQYzlvCKqXBi.png"
              tags={[
                "BizDev",
                "Project Management",
                "Fundraising",
                "UI/UX Design",
                "Product Strategy",
                "Market Research",
              ]}
              projectUrl="https://lp.windfall.games/"
              docsUrl="https://windfall.gitbook.io/windfall/"
              xUrl="https://x.com/windfall_verse"
            />
          </div>
        </section>

        {/* Contributor Section */}
        <section id="contributor" className="py-20 scroll-mt-20">
          <h2 className="font-heading text-3xl font-bold mb-12 gradient-text">Contributor</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-border/50 bg-card/50 backdrop-blur transition-all-300 hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle>The Vault</CardTitle>
                <CardDescription>Board Member</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Contributing to the governance and strategic direction of The Vault as a board member.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="icon" asChild className="transition-all-300 hover:scale-105" title="Follow on X">
                  <a href="https://x.com/thevaultfinance" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
            <Card className="border border-border/50 bg-card/50 backdrop-blur transition-all-300 hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle>Superteam Japan</CardTitle>
                <CardDescription>Member</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Active member of Superteam Japan, collaborating on projects and initiatives within the ecosystem.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="icon" asChild className="transition-all-300 hover:scale-105" title="Follow on X">
                  <a href="https://x.com/SuperteamJapan" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 scroll-mt-20">
          <h2 className="font-heading text-3xl font-bold mb-12 gradient-text">Achievements & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <AchievementCard
              title="Radar Hackathon Game Section 3rd Place"
              date="November 2024"
              description="Windfall secured 3rd place in the Game Section at Radar Hackathon, showcasing innovative LST-based gaming on Solana."
              xUrl="https://x.com/windfall_verse/status/1856362241492431282"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-20">
          <h2 className="font-heading text-3xl font-bold mb-12 gradient-text">Get In Touch</h2>
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed mb-8">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to
              discuss a project or just say hello!
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all-300">
                  <Mail className="h-5 w-5" />
                </div>
                <a href="mailto:yunagumo@cmpslab.co.jp" className="group-hover:text-primary transition-all-300">
                  yunagumo@cmpslab.co.jp
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all-300">
                  <Linkedin className="h-5 w-5" />
                </div>
                <a
                  href="https://www.linkedin.com/in/yutaro-nagumo-09517831b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-primary transition-all-300"
                >
                  linkedin.com/in/yutaro-nagumo
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all-300">
                  <Twitter className="h-5 w-5" />
                </div>
                <a
                  href="https://x.com/SouthCloud0703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-primary transition-all-300"
                >
                  @SouthCloud0703
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all-300">
                  <Github className="h-5 w-5" />
                </div>
                <a
                  href="https://github.com/SouthCloud0703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-primary transition-all-300"
                >
                  github.com/SouthCloud0703
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Yutaro. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="https://github.com/SouthCloud0703"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-all-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yutaro-nagumo-09517831b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-all-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/SouthCloud0703"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-all-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:yunagumo@cmpslab.co.jp"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-all-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-in-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  projectUrl,
  docsUrl,
  xUrl,
}: {
  title: string
  description: string
  image: string
  tags: string[]
  projectUrl?: string
  docsUrl?: string
  xUrl?: string
}) {
  return (
    <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur transition-all-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="font-heading">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-all-300">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        {projectUrl ? (
          <Button size="icon" asChild className="transition-all-300 hover:scale-105" title="Visit Project">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button
            size="icon"
            variant="outline"
            className="transition-all-300 opacity-50 cursor-not-allowed"
            title="Project Coming Soon"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        )}
        {docsUrl ? (
          <Button size="icon" asChild className="transition-all-300 hover:scale-105" title="View Documentation">
            <a href={docsUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button
            size="icon"
            variant="outline"
            className="transition-all-300 opacity-50 cursor-not-allowed"
            title="Documentation Coming Soon"
          >
            <FileText className="h-4 w-4" />
          </Button>
        )}
        {xUrl ? (
          <Button size="icon" asChild className="transition-all-300 hover:scale-105" title="Follow on X">
            <a href={xUrl} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button
            size="icon"
            variant="outline"
            className="transition-all-300 opacity-50 cursor-not-allowed"
            title="X Coming Soon"
          >
            <Twitter className="h-4 w-4" />
          </Button>
        )}
        <Button
          size="icon"
          variant="outline"
          className="transition-all-300 opacity-50 cursor-not-allowed"
          title="GitHub Coming Soon"
        >
          <Github className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

function SkillBadge({ name }: { name: string }) {
  return (
    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-primary/20 text-sm font-medium transition-all-300 hover:scale-105">
      {name}
    </div>
  )
}

function AchievementCard({
  title,
  date,
  description,
  xUrl,
}: {
  title: string
  date: string
  description: string
  xUrl?: string
}) {
  return (
    <Card className="border border-border/50 bg-card/50 backdrop-blur transition-all-300 hover:border-primary/50 hover:shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        {xUrl ? (
          <Button size="icon" asChild className="transition-all-300 hover:scale-105" title="View Announcement">
            <a href={xUrl} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button
            size="icon"
            variant="outline"
            className="transition-all-300 opacity-50 cursor-not-allowed"
            title="Announcement Coming Soon"
          >
            <Twitter className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

