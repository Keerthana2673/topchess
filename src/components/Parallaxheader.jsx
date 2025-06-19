import { Link } from 'react-router-dom';

const ParallaxHeader = ({
  title,
  breadcrumbs = [],
  backgroundImage = '/images/header-about.jpg'
}) => {
  return (
    <div className="relative h-[80vh] min-h-[400px] max-h-[600px] overflow-hidden">
      {/* Background Image with blur and dark overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: 'fixed',
            filter: 'blur(2px) brightness(0.6)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Breadcrumbs */}
        <nav className="mb-4 text-white text-sm font-medium tracking-wide">
          <Link to="/" className="hover:text-[#8ac249] transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="mx-2 text-white/50">
              /
              {index === breadcrumbs.length - 1 ? (
                <span className="ml-2 text-[#8ac249]">{crumb.title}</span>
              ) : (
                <Link
                  to={crumb.path}
                  className="ml-2 hover:text-[#8ac249] transition-colors"
                >
                  {crumb.title}
                </Link>
              )}
            </span>
          ))}
        </nav>

        {/* Main Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-[56px] font-bold leading-tight">
          {title}
        </h1>
      </div>

      {/* Shape Divider */}
      <section className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            fill="#ffffff"
          />
        </svg>
      </section>
    </div>
  );
};

export default ParallaxHeader;