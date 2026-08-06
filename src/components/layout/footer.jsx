import facebookIcon from "@/../public/img/socialmedia/facebook.svg";
import twitterIcon from "@/../public/img/socialmedia/twitter.svg";
import youtubeIcon from "@/../public/img/socialmedia/youtube.svg";
import Image from "next/image";
import Link from "next/link";

/**
 * Renders the site footer with organization information, navigation, and social links.
 * @returns {React.JSX.Element} The application footer.
 */
export default function Footer() {
  return (
    <footer>
      <div className="footer-top-content p2-regular">
        <section>
          <h2 className="sub-heading-main mb-8">Get Involved.</h2>
          <p>
            Open Fresno is a tax-deductible civic-tech community dedicated to using technology and
            open data for positive civic change in Fresno. Open Fresno is fiscally sponsored by{" "}
            <Link href="https://rootaccess.org/">Root Access</Link>.
          </p>
        </section>
        <section className="grid auto-rows-min gap-y-8 md:pl-8">
          <p>
            Join us for our weekly meetings on{" "}
            <Link
              className="footer-link--underline"
              href="https://www.meetup.com/openfresno/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Meetup."
            >
              meetup
            </Link>
            .
          </p>
          <p>
            See our{" "}
            <Link href="/projects" className="footer-link--underline">
              projects
            </Link>
            .
          </p>
          <p>
            For any questions, visit our{" "}
            <Link href="/faq" className="footer-link--underline">
              FAQs
            </Link>
            .
          </p>
        </section>
        <section className="footer-socials">
          <Link
            href="https://www.facebook.com/openfresno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={facebookIcon}
              alt="facebook"
              width={46}
              height={46}
              className="object-cover"
            />
          </Link>
          <Link href="https://twitter.com/openfresno" target="_blank" rel="noopener noreferrer">
            <Image src={twitterIcon} alt="X" width={46} height={46} className="object-cover" />
          </Link>
          <Link
            href="https://www.youtube.com/@openfresno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={youtubeIcon}
              alt="Youtube"
              width={46}
              height={46}
              className="object-cover"
            />
          </Link>
        </section>
      </div>
      <div className="border-t border-(--neutral-300)">
        <div className="footer-bottom-content">
          <div className="caption-footer">Open Fresno</div>
          <div className="caption-regular-uppercase space-x-10">
            <Link href="/get-started">Get started</Link>
            <Link href="/about/#team">Our team</Link>
            <Link href="/code-of-conduct">Code of conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
