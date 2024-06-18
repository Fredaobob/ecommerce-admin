"use client";


import { useEffect } from "react";

import { UseStoreModal } from "@/hooks/use-store-modal";


const SetupPage = () => {
  const onOpen = UseStoreModal((state) => state.onOpen);
  const isOpen = UseStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      Root Page
    </div>
  );
}


export default SetupPage;