"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Client = {
  id: string;
  name: string;
  initials: string;
  industry: string;
  logo?: string;
};

export function ClientsGrid() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    let active = true;

    fetch("/api/clients")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load clients");
        }
        return res.json();
      })
      .then((data: { clients: Client[] }) => {
        if (active) setClients(data.clients);
      })
      .catch((error) => {
        console.error("Unable to load clients:", error);
      });

    return () => {
      active = false;
    };
  }, []);

  // Duplicate the logos to create a seamless infinite carousel.
  const marqueeClients = [...clients, ...clients];

  return (
    <section id="clients" className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#082f49] sm:text-5xl">
            Our Clients
          </h2>

          <div className="mx-auto mt-4 h-[5px] w-[75px] rounded-full bg-[#f5790c]" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6687a3] sm:text-xl sm:leading-9">
            Every project in our portfolio represents a business that trusted us
            to grow online.
          </p>
        </div>
      </div>

      {/* Continuously Moving Client Logos */}
      <div className="relative mt-12 space-y-8 md:mt-16 md:space-y-10">
        {clients.length > 0 ? (
          <>
            {/* First Row: Moves Left */}
            <div className="client-marquee">
              <div className="client-marquee-track client-marquee-left">
                {marqueeClients.map((client, index) => (
                  <div
                    key={`left-${client.id}-${index}`}
                    className="flex h-[95px] w-[165px] shrink-0 items-center justify-center px-3 sm:w-[195px]"
                  >
                    {client.logo ? (
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={180}
                        height={90}
                        className="h-[75px] w-full object-contain"
                        unoptimized
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-3xl font-extrabold tracking-tight text-[#0871ae]">
                          {client.initials}
                        </span>
                        <span className="mt-1 max-w-full text-center text-xs font-semibold text-slate-600">
                          {client.name}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row: Moves Right */}
            <div className="client-marquee">
              <div className="client-marquee-track client-marquee-right">
                {[...marqueeClients].reverse().map((client, index) => (
                  <div
                    key={`right-${client.id}-${index}`}
                    className="flex h-[95px] w-[165px] shrink-0 items-center justify-center px-3 sm:w-[195px]"
                  >
                    {client.logo ? (
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={180}
                        height={90}
                        className="h-[75px] w-full object-contain"
                        unoptimized
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-3xl font-extrabold tracking-tight text-[#0871ae]">
                          {client.initials}
                        </span>
                        <span className="mt-1 max-w-full text-center text-xs font-semibold text-slate-600">
                          {client.name}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-48 items-center justify-center">
            <p className="text-sm text-slate-500">Loading client logos...</p>
          </div>
        )}
      </div>
    </section>
  );
}
