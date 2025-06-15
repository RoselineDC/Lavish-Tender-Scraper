import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Lavish Tender Scraper</h1>
      <p className="mt-4 text-lg">Your one-stop solution for tender scraping.</p>
      <Image
        src="/logo.png"
        alt="Lavish Tender Scraper Logo"
        width={150}
        height={150}
        className="mt-8"
      />
    </main>
   
  );
}
