import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://techmayantara.co.id/logoTma-biggerLogo.svg"
          width={180}
          height={38}
          priority alt={""}        />
        
        
        <section className="mx-auto flex max-w-4xl flex-col gap-12 px-6">
        <article className="text-center">
          <h1 className="text-4xl font-bold">Andika Bayus</h1>
          <p className="text-lg">Web Developer</p>
        </article>
        <article id="about">
          <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
          <p>
            Hallo, &apos;Perkenalkan saya Andika bekerja di sebuah perusahan PT Tech mayantara Asia yang beralamatkan di sumarecon bandung.
          </p>
        </article>
        <article id="projects">
          <h2 className="mb-4 text-2xl font-semibold">Projects</h2>
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-lg bg-gray-600 p-6 text-gray-300">
              <h3 className="mb-2 text-xl font-semibold">Project 1</h3>
              <p className="text-gray-300">
                API hits
              </p>

              {/* <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                  <div className={`${dark ? styles.iconTwitterWhite : styles.iconTwitter} mr-3`} />
              </a> */}

               <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://techmayantara.co.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://techmayantara.co.id/logoTma-biggerLogo.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          PT Tech Mayantara Asia
        </a>
        </article>
          </section>
        </article>

        <article id="projects">
          <h2 className="mb-4 text-2xl font-semibold">Projects</h2>
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-lg bg-gray-600 p-6 text-gray-300">
              <h3 className="mb-2 text-xl font-semibold">Project 1</h3>
              <p className="text-gray-300">
                API hits
              </p>

              {/* <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                  <div className={`${dark ? styles.iconTwitterWhite : styles.iconTwitter} mr-3`} />
              </a> */}

               <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://techmayantara.co.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://techmayantara.co.id/logoTma-biggerLogo.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          PT Tech Mayantara Asia
        </a>
        </article>
          </section>
        </article>
        <article id="contact">
          <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
          <p>
            Feel free to reach out to me at{" "}
            <a
              href="andikabayus@tma.web.id"
              className="text-blue-700 hover:underline"
            >
              andikabayus@tma.web.id
            </a>
            .
          </p>
        </article>
      </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
         
          
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://techmayantara.co.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://techmayantara.co.id/logoTma-biggerLogo.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          PT Tech Mayantara Asia
        </a>
       
      </footer>
    </div>
  );
}
