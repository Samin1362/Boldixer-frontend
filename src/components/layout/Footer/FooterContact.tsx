import { footer } from "@/content/footer";
import { phoneHref, site } from "@/content/site";

/**
 * Contact column. Takes the slot the old "Blog Insights" column held — same
 * 30px/700 heading and 0.1em tracking as the other footer headings.
 *
 * Before this, the phone and email appeared only in the header topbar, which
 * scrolls away and is hidden entirely below `lg`. The footer is where people
 * look for a number.
 *
 * `site.address` is null until the client supplies one; the block is skipped
 * rather than rendering an empty line.
 *
 * The two email lines drop the 0.1em tracking the rest of the footer uses and
 * sit a step smaller. At 18px + tracking the addresses are wider than the
 * ~320px column and were breaking mid-word.
 */
export function FooterContact() {
  const { title, enquiriesLabel, managerLabel } = footer.columns.contact;

  return (
    <div>
      <h2 className="text-h3 tracking-[0.1em] text-white">{title}</h2>

      <dl className="mt-8 space-y-6 lg:mt-12">
        <div>
          <dt className="text-line text-sm font-bold tracking-[0.1em] uppercase">
            Phone
          </dt>
          <dd className="mt-1">
            <a
              href={phoneHref}
              className="hover:text-gold-bright text-lg font-medium tracking-[0.1em] text-white transition-colors"
            >
              {site.phone}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-line text-sm font-bold tracking-[0.1em] uppercase">
            {enquiriesLabel}
          </dt>
          <dd className="mt-1">
            <a
              href={`mailto:${site.email}`}
              className="hover:text-gold-bright text-base font-medium break-words text-white transition-colors"
            >
              {site.email}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-line text-sm font-bold tracking-[0.1em] uppercase">
            {managerLabel}
          </dt>
          <dd className="mt-1">
            <a
              href={`mailto:${site.emailManager}`}
              className="hover:text-gold-bright text-base font-medium break-words text-white transition-colors"
            >
              {site.emailManager}
            </a>
          </dd>
        </div>

        {site.address && (
          <div>
            <dt className="text-line text-sm font-bold tracking-[0.1em] uppercase">
              Address
            </dt>
            <dd className="mt-1 text-lg leading-relaxed font-medium tracking-[0.1em] text-white">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
              <br />
              {site.address.country}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
