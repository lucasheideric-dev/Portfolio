import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Countpay Gestão Financeira Pessoal",
    description:
      "O Countpay é um sistema de gestão financeira pessoal desenvolvido para ajudar os usuários a controlar suas finanças de maneira prática e eficiente.",
    image: "countpay-projeto.png",
    tags: [
      "CakePHP",
      "jQuery",
      "Bootstrap",
      "Oracle Cloud",
      "MySQL",
      "Java",
      "React.js",
      "Linux",
      "Nginx",
      "GitHub",
    ],
  },
  {
    title: "Cardápio Mobile",
    description:
      "O Cardápio Digital é uma aplicação desenvolvida com Next.js, TailwindCSS, TypeScript, Prisma e Shadcn, inspirada no modelo de cardápio do McDonald's.",
    image: "cardapio-projeto.png",
    tags: [
      "Next.js",
      "React.js",
      "PostgreSQL",
      "TailwindCSS",
      "Prisma",
      "TypeScript",
      "Vercel",
      "GitHub",
    ],
  },
  {
    title: "Fortmix Atacado",
    description:
      "Um catálogo online, com opção de enviar pedidos ou tirar dúvidas pelo WhatsApp, atendendo a todo o Brasil.",
    image: "fortmix-projeto.png",
    tags: [
      "CakePHP",
      "jQuery",
      "JavaScript",
      "Bootstrap",
      "Oracle Cloud",
      "MySQL",
      "Linux",
      "Nginx",
      "GitHub",
    ],
  },
  {
    title: "Ollé Sports",
    description:
      "Jornal Esportivo criado a partir de estudos, com o intuito de fornecer as notícias mais recentes e atualizadas do mundo do futebol.",
    image: "ollesports-projeto.png",
    tags: [
      "CakePHP",
      "Bootstrap",
      "Oracle Cloud",
      "jQuery",
      "JavaScript",
      "Linux",
      "Nginx",
      "GitHub",
    ],
  },
  {
    title: "Poupe Agora",
    description:
      "Blog sobre finanças, desenvolvido para fins de estudo, utilizando WordPress e Inteligência Artificial para criação de conteúdo.",
    image: "poupeagora-projeto.png",
    tags: [
      "PHP",
      "WordPress",
      "MySQL",
      "Linux",
      "Oracle Cloud",
      "jQuery",
      "GitHub",
    ],
  },
];

export function ProjectCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden h-[500px]">
                {" "}
                {/* Ajuste a altura conforme necessário */}
                <CardContent className="p-0 h-full flex flex-col">
                  <a href="#" target="_blank">
                    <div className="relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </a>

                  <div className="mt-2.5 p-6 pb-0 flex-grow">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center p-4 gap-2">
                    <Button variant={"default"}>
                      <Code /> Ver Código
                    </Button>
                    <Button variant={"outline"}>
                      <ExternalLink /> Ver Página
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
