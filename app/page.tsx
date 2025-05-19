import {
    Astro,
    BetterAuth,
    DrizzleORM,
    Expressjs,
    GitHub,
    LinkedIn,
    MongoDB,
    NestJS,
    Nextjs,
    PostgreSQL,
    Prisma,
    ReactQuery,
    Tebex,
    TRPC,
    Vite,
    XformerlyTwitter,
} from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { LinkIcon } from "lucide-react";

const WHATIUSE = [
    {
        name: "Next.js",
        icon: Nextjs,
    },
    {
        name: "Express.js",
        icon: Expressjs,
    },
    {
        name: "NestJS",
        icon: NestJS,
    },
    {
        name: "PostgreSQL",
        icon: PostgreSQL,
    },
    {
        name: "MongoDB",
        icon: MongoDB,
    },
    {
        name: "Vite",
        icon: Vite,
    },
    {
        name: "React Query",
        icon: ReactQuery,
    },
    {
        name: "Astro",
        icon: Astro,
    },
];

export default function Home() {
    return (
        <main className="min-h-screen p-4 pt-16 leading-relaxed flex flex-col items-center">
            <div className="max-w-xl gap-y-10 flex flex-col justify-between h-full w-full">
                <header>
                    <h1 className="text-xl">Ayoub Bendarsi</h1>

                    <Separator className="w-full my-2" />
                    <p className="text-sm">Full Stack Web Developer</p>
                </header>
                <section className="flex flex-col gap-y-2">
                    <div className="flex justify-between items-center">
                        <h2>About me</h2>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/ayoub-bendarsi-41740a265/" target="_blank">
                                <LinkedIn className="size-5" />
                            </a>
                            <a href="https://x.com/bendarsiayoub" target="_blank">
                                <XformerlyTwitter className="size-5" />
                            </a>
                            <a href="https://github.com/RATCHAW" target="_blank">
                                <GitHub className="size-5" />
                            </a>
                        </div>
                    </div>
                    <Separator className="w-full my-2" />
                    <p className="text-sm">
                        Hello, I&apos;m Ayoub Bendarsi, a full-stack web developer passionate about crafting tech-driven
                        solutions. I specialize in building responsive applications with React, Node.js, and TypeScript.
                        <br />
                        <br />
                        From interactive UIs to robust APIs, I enjoy solving problems with elegant code. Always
                        learning, always building — I turn ideas into scalable digital products.
                        <br />
                        <br />
                        Feel free to reach out to me ( <a href="mailto:bendarsiayoub@gmail.com">Email</a> /
                        <a
                            className="align-middle inline-block mx-1 "
                            href="https://x.com/bendarsiayoub"
                            target="_blank"
                        >
                            <XformerlyTwitter className="size-3" />
                        </a>
                        ) if you have any questions or just want to chat.
                    </p>
                </section>
                <section>
                    <h2 className="h-10">What I built</h2>
                    <div className="flex flex-col gap-4 ">
                        <div className="text-sm border rounded-2xl p-4 transition-shadow group ">
                            <div className="flex justify-between">
                                <h3 className="text-sm tracking-wide">
                                    <span className="font-bold">Ecommerce webstore</span>
                                    {"  -  "}
                                    <span className="italic">Work</span>
                                </h3>
                                <a href="https://needforscript.com/" target="_blank">
                                    <LinkIcon className="hover:rotate-45 transtion transition" />
                                </a>
                            </div>
                            <Separator className="w-full my-2" />
                            <p className="my-4 ">
                                A high-performing webstore, hundreds of transactions monthly. Integrated with Tebex for
                                secure payments and reliable scaling. Focused on performance, clean UI, and seamless
                                user experience.
                            </p>
                            <Separator className="w-full my-2" />
                            <div className="flex justify-between">
                                <h4>Built With</h4>
                                <div className="flex flex-row-reverse gap-2">
                                    <Tebex className="size-6" />
                                    <DrizzleORM className="size-6" />
                                    <BetterAuth className="size-6" />
                                    <ReactQuery className="size-6" />
                                    <Nextjs className="size-6" />
                                </div>
                            </div>
                        </div>
                        <div className="text-sm border rounded-2xl p-4 transition-shadow group ">
                            <div className="flex justify-between">
                                <h3 className="text-sm tracking-wide">
                                    <span className="font-bold">SideQuest</span>
                                    {"  -  "}
                                    <span className="italic">Side Project</span>
                                </h3>
                                <div className="flex gap-4">
                                    <a href="https://github.com/RATCHAW/side-quest" target="_blank">
                                        <GitHub className="size-6" />
                                    </a>
                                    <a href="https://side-quest-seven.vercel.app/" target="_blank">
                                        <LinkIcon className="hover:rotate-45 transtion transition" />
                                    </a>
                                </div>
                            </div>
                            <Separator className="w-full my-2" />
                            <p className="my-4 ">
                                built with the T3 Stack. It&apos;s a platform where I&apos;ve enabled users to share,
                                discover, and manage their &quot;Side Quests&quot; or project ideas. I&apos;ve
                                implemented features like user authentication, allowing users to create posts with
                                descriptions and images, bookmark interesting ideas, and view their own contributions. I
                                also added search functionality and infinite scrolling to enhance the user experience.
                                For strong SEO, I&apos;ve utilized Server-Side Rendering with RSC to ensure content is
                                pre-rendered, making it easily discoverable by search engines, while hydration maintains
                                a dynamic user experience.
                            </p>
                            <Separator className="w-full my-2" />
                            <div className="flex justify-between">
                                <h4>Built With</h4>
                                <div className="flex flex-row-reverse gap-2">
                                    <TRPC className="size-6" />
                                    <Prisma className="size-6" />
                                    <BetterAuth className="size-6" />
                                    <ReactQuery className="size-6" />
                                    <Nextjs className="size-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>What I use</h2>
                    <Separator className="w-full my-2" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4">
                        {WHATIUSE.map((item) => (
                            <div
                                key={item.name}
                                className="flex text-center flex-col items-center justify-center gap-2 text-sm border rounded-2xl p-4 transition-shadow group hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background"
                            >
                                <item.icon className="size-6" />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
