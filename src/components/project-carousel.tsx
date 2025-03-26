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
      "Oracle",
      "MySQL",
      "Java",
      "React.js",
      "Linux",
      "Nginx",
      "GitHub",
    ],
    github: "",
    link: "https://countpay.com.br/",
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
    github: "https://github.com/lucasheideric-dev/FastFood-App",
    link: "https://fast-food-app-opal.vercel.app/foodfly",
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
    github: "",
    link: "https://fortmixatacado.com.br/",
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
    github: "https://github.com/lucasheideric-dev/Olle-Sports",
    link: "",
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
    github: "",
    link: "https://poupeagora.com.br/",
  },
];

export function ProjectCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-7xl mx-auto px-4"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/3 px-2"
          >
            <div className="p-1">
              <Card className="overflow-hidden h-auto">
                <CardContent className="p-0 flex flex-col h-full">
                  <div>
                    <div className="relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="p-4 flex-grow">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
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

                  <div className="w-full flex flex-wrap justify-center items-center p-4 gap-2">
                    <div className="w-full flex flex-wrap justify-center items-center p-4 gap-2">
                      <div className="w-full flex flex-wrap justify-center items-center p-4 gap-2">
                        <a
                          href={project.github ? project.github : "#"}
                          target={project.github ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (!project.github) {
                              e.preventDefault();
                              alert("Código deste projeto é reservado.");
                            }
                          }}
                        >
                          <Button
                            variant={"default"}
                            className="w-full cursor-pointer sm:w-auto"
                          >
                            <Code /> Ver Código
                          </Button>
                        </a>

                        <a
                          href={project.link ? project.link : "#"}
                          target={project.link ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (!project.link) {
                              e.preventDefault();
                              alert("Página indisponível para este projeto!");
                            }
                          }}
                        >
                          <Button
                            variant={"outline"}
                            className="w-full cursor-pointer sm:w-auto"
                          >
                            <ExternalLink /> Ver Página
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden md:flex sm:flex" />
      <CarouselNext className="hidden md:flex sm:flex" />
    </Carousel>
  );
}
