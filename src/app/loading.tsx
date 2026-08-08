import Image from "next/image";

/**
 * Route-level fallback for navigations between pages.
 *
 * Distinct from `Preloader`, which is the first-paint intro. This one only ever
 * shows while a *new* route streams in, so it is quieter: no wordmark, no
 * curtain over the whole chrome, just a held beat in the content area.
 */
export default function Loading() {
  return (
    <div className="grid min-h-[60vh] flex-1 place-items-center">
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/images/brand/tabela-robusta-mark.png"
          alt=""
          width={565}
          height={254}
          sizes="120px"
          className="h-auto w-[120px]"
        />
        <span className="block h-0.5 w-32 overflow-hidden bg-line">
          <span className="animate-sweep bg-gold block h-full w-1/4" />
        </span>
        <span className="sr-only" role="status">
          Loading
        </span>
      </div>
    </div>
  );
}
