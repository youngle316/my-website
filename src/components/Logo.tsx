import Image from 'next/image';

function Logo() {
  return (
    <Image
      className="rounded-md"
      alt="logo"
      src="/assets/logo.jpg"
      width={48}
      height={48}
    />
  );
}

export default Logo;
