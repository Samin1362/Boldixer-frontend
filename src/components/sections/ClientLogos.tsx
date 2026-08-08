import Image from "next/image";
import { Container, Reveal } from "@/components/ui";
import { clients } from "@/content/clients";

/**
 * Client logo strip below About. Figma: 4 marks on a single row at
 * x=60/413/729/1045 of the 1440 canvas, already greyscale in the source files.
 */
export function ClientLogos() {
  return (
    <section aria-label="Our clients" className="pb-section lg:pb-section-lg">
      <Container>
        <ul className="flex flex-wrap items-center justify-between gap-x-10 gap-y-10">
          {clients.map((client, i) => (
            <li
              key={client.name}
              className="flex grow basis-[40%] justify-center sm:basis-auto"
            >
              <Reveal delay={i * 80}>
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="h-auto w-auto opacity-70 transition-opacity duration-200 hover:opacity-100"
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
