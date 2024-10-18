"use client";

import { useEffect, useState } from "react";

interface Toner {
  id: string;
  name: string;
  stock: string;
  status: string;
  printer_count: string;
  unit_price: string;
}

export default function TonersTable() {
  const [toners, setToners] = useState<Toner[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchToners = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/v1/supplies/toners",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch toners");
        }
        const data: Toner[] = await response.json();
        setToners(data);
      } catch (error) {
        setError("Erro ao buscar os toners");
      }
    };

    fetchToners();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (toners.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="mx-auto my-16 max-w-screen-xl px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Toners
          </h3>
          <p className="mt-2 text-gray-600">
            Lista de todos os toners cadastrados.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Adicionar toner
          </a>
        </div>
      </div>
      <div className="relative mt-12 h-max overflow-auto">
        <table className="w-full table-auto text-left text-sm">
          <thead className="border-b font-medium text-gray-600">
            <tr>
              <th className="py-3 pr-6">Nome</th>
              <th className="py-3 pr-6">Quantidade</th>
              <th className="py-3 pr-6">Status</th>
              <th className="py-3 pr-6">Usado em X impressoras</th>
              <th className="py-3 pr-6">Preço Unitário</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-600">
            {toners.map((toner) => (
              <tr key={toner.id}>
                <td className="whitespace-nowrap py-4 pr-6">{toner.name}</td>
                <td className="whitespace-nowrap py-4 pr-6">{toner.stock}</td>
                <td className="whitespace-nowrap py-4 pr-6">
                  <span
                    className={`rounded-full px-3 py-2 text-xs font-semibold ${
                      toner.status === "Bom"
                        ? "bg-green-50 text-green-600"
                        : toner.status === "Suficiente"
                          ? "bg-blue-50 text-blue-600"
                          : toner.status === "Acabando"
                            ? "bg-orange-50 text-orange-600"
                            : toner.status === "Esgotado"
                              ? "bg-red-50 text-red-600"
                              : "bg-gray-50 text-gray-600"
                    }`}
                  >
                    {toner.status}
                  </span>
                </td>
                <td className="whitespace-nowrap py-4 pr-6">
                  {toner.printer_count}
                </td>
                <td className="whitespace-nowrap py-4 pr-6">
                  {toner.unit_price}
                </td>
                <td className="whitespace-nowrap text-right">
                  <a
                    href="#"
                    className="rounded-lg border px-3 py-1.5 text-gray-600 duration-150 hover:bg-gray-50 hover:text-gray-500"
                  >
                    Gerenciar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
