import { Github } from "@medusajs/icons"
import { Button, Container, Heading } from "@medusajs/ui"
import Image from "next/image"
import heroImage from "/src/app/opengraph-image.jpg"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
              <Image
                src={heroImage}
                priority={true}
                className="absolute inset-0 rounded-rounded"
                alt={`Product image index1`}
                fill
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                style={{
                  objectFit: "cover",
                }}
              />

{/*
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Início do Negócio de Ecommerce
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Powered by Medusa and Next.js
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            View on GitHub
            <Github />
          </Button>
       </a>
       */}
      </div>
    </div>
  )
}

export default Hero
