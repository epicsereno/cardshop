"use client";

import { useMemo, useState } from "react";

export function useCart() {
  const [items, setItems] = useState<string[]>([]);

  return useMemo(
    () => ({
      items,
      addItem: (id: string) => setItems((current) => [...current, id]),
      clear: () => setItems([]),
    }),
    [items],
  );
}
