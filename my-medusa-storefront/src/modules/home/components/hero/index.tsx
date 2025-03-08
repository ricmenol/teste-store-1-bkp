import { Github } from "@medusajs/icons"
import { Button, Container, Heading } from "@medusajs/ui"
import Image from "next/image"
const heroImage = "https://ricmenol-starter.nyc3.cdn.digitaloceanspaces.com/blog_tendenciasdejoias.jpg"

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
      </div>
      </div>
  )
}

export default Hero
