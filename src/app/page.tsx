'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToProducts = () => {
    router.push('/products');
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to Next JS Course 2024</h1>
      <Link href={'/products'}>Navigate to products page</Link>
      <Link href={'/Accounts'}>Navigate to accounts page</Link>

      <h2 className="font-bold mt-3 text-lg">Alternative way of navigating using useRouter</h2>
      <button onClick={navigateToProducts}>Navigate to products page using use router</button>
    </main>
  );
}
