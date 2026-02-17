import Link from 'next/link';
import Image from 'next/image';

export const Default = (props:any) => {
  console.log('=====', props);
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">
          {/* Left: Logo + Addresses */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="logo mb-4">
              <Image
                src="/images/sourceved-logo.svg"
                alt="Sourceved Technologies"
                width={160}
                height={40}
              />
            </div>

            <div className="address mb-3">
              <h4>INDIA</h4>
              <p>
                919-922 Zion Z1, Nr. Avalon Hotel, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat
                380054.
              </p>
            </div>

            <div className="address">
              <h4>USA</h4>
              <p>27475 Ferry Rd, Suite 145, Warrenville, IL 60555</p>
            </div>
          </div>

          {/* Company */}
          <div className="col-12 col-sm-6 col-lg-2">
            <div className="col">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link href="/life-at-sourceved">Life At Sourceved</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="col">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="/services/sitecore">Sitecore</Link>
                </li>
                <li>
                  <Link href="/services/microsoft">Microsoft</Link>
                </li>
                <li>
                  <Link href="/services/ai">AI Development</Link>
                </li>
                <li>
                  <Link href="/services/optimizely">Optimizely</Link>
                </li>
                <li>
                  <Link href="/services/aem">Adobe Experience Manager</Link>
                </li>
                <li>
                  <Link href="/services/liferay">Liferay</Link>
                </li>
                <li>
                  <Link href="/services/kentico">Kentico</Link>
                </li>
                <li>
                  <Link href="/services/drupal">Drupal</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="col">
              <h4>Have Questions?</h4>
              <ul className="contact">
                <li>Skype</li>
                <li>
                  <a href="mailto:info@sourceved.com">info@sourceved.com</a>
                </li>
                <li>
                  <a href="mailto:career@sourceved.com">career@sourceved.com</a>
                </li>
                <li>
                  <a href="tel:+919875073041">+91 987-507-3041 (INDIA)</a>
                </li>
                <li>
                  <a href="tel:+15126667904">+1 (512) 666-7904 (USA)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom">
        <div className="container">
          <div className="row align-items-center gy-3">
            <div className="col-12 col-md-8">
              <p>
                © 2015 - 2026 | <span>Sourceved Technologies Pvt. Ltd., India</span> | Reserved
              </p>
            </div>

            <div className="col-12 col-md-4 text-md-end">
              <div className="socials d-inline-flex gap-3">
                <a href="#">
                  <i className="icon-linkedin" />
                </a>
                <a href="#">
                  <i className="icon-instagram" />
                </a>
                <a href="#">
                  <i className="icon-facebook" />
                </a>
                <a href="#">
                  <i className="icon-x" />
                </a>
                <a href="#">
                  <i className="icon-skype" />
                </a>
                <a href="#">
                  <i className="icon-mail" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
