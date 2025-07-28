"use client"
import Image from "next/image";
import { useEffect, useState } from "react";




export default function Home() {

    const [joke,setJoke] = useState<{id:number,punchline:string,setup:string,type:string} | null >(null) 

  useEffect(() => {
    async function fetchCountries() {
          try {
              const response = await fetch('https://official-joke-api.appspot.com/random_joke');
              const data = await response.json();
              setJoke(data);
          } catch (error) {
              console.error('Error fetching countries data:', error);
          }
      }

    fetchCountries();
  }, []);


  return (
    
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    
        <section className="mx-auto flex max-w-4xl flex-col gap-12 px-6">
        <article id="projects">
          <h2 className="mb-4 text-2xl font-semibold">Hit API</h2>
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-lg bg-gray-600 p-6 text-gray-300">
              <h3 className="mb-2 text-xl font-semibold">Project 1</h3>
              
              <p className="text-gray-300">
                {joke?.setup}   
              </p>
              <p className="text-gray-300">
                {joke?.punchline}   
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
          
        </a>
        </article>
          </section>
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
