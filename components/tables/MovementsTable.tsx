"use client";

import { useEffect, useState } from "react";

interface Item {
  name: string;
  stock: number;
}

interface Printer {
  name: string;
  model: string;
}

interface Movement {
  id: string;
  name: string;
  printer: Printer;
  item: Item;
  quantity: number;
  created_at: string;
}

export default function MovementsTable() {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovements = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/v1/movements");
        if (!response.ok) {
          throw new Error("Failed to fetch movements");
        }
        const data: Movement[] = await response.json();
        setMovements(data);
      } catch (error) {
        setError("Erro ao buscar os movimentos");
      }
    };

    fetchMovements();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (movements.length === 0) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="mx-auto my-16 max-w-screen-xl px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Movimentos
          </h3>
          <p className="mt-2 text-gray-600">
            Lista de todos os movimentos cadastrados.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Adicionar impressora
          </a>
        </div>
      </div>
      <div className="relative mt-12 h-max overflow-auto">
        <table className="w-full table-auto text-left text-sm">
          <thead className="border-b font-medium text-gray-600">
            <tr>
              <th className="py-3 pr-6">Impressora</th>
              <th className="py-3 pr-6">Item</th>
              <th className="py-3 pr-6">Quantidade</th>
              <th className="py-3 pr-6">Data</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-600">
            {movements.map((movement) => (
              <tr key={movement.id}>
                <td className="whitespace-nowrap py-4 pr-6">
                  {movement.printer.name}
                </td>
                <td className="whitespace-nowrap py-4 pr-6">
                  {movement.item.name}
                </td>
                <td className="whitespace-nowrap py-4 pr-6">
                  {movement.quantity}
                </td>
                <td className="whitespace-nowrap py-4 pr-6">
                  {movement.created_at}
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
