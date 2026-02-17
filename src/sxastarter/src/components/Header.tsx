import Link from 'next/link';
import Image from 'next/image';
interface SitecoreImageValue {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

interface ComponentProps {
  fields: {
    data?: {
      item?: {
        logo?: {
          jsonValue?: {
            value?: SitecoreImageValue;
          };
        };
      };
    };
  };
}
export const Default = ({ fields }: ComponentProps) => {
  console.log('>>>>', fields);
  const logo = fields?.data?.item?.logo?.jsonValue?.value;
  console.log('>>>>', logo);
  if (!logo?.src) {
    return null; // Prevent rendering if logo is missing
  }
  return (
    <header className="header">
      <div className="container">
        {/* Left Section - Logos */}
        <div className="header__logo-section">
          <Link href="/" className="header__logo">
            <Image src={logo.src} alt="Sourceved Technologies" width={400} height={40} />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <Link href="/company" className="header__link">
            Company
          </Link>
          <Link href="/products-services" className="header__link">
            Product & Services
          </Link>
          <Link href="/case-studies" className="header__link">
            Case studies
          </Link>
        </nav>

        {/* CTA */}
        <div className="header__cta">
          <Link href="/contact" className="header__button">
            Let’s Talk
            <span className="header__arrow">➤</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
