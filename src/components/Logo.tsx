import Image from 'next/image';

function Logo() {
  return (
    <Image
      className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
      alt="logo"
      src="/assets/logo.jpg"
      width={48}
      height={48}
    />
  );
}

export default Logo;
