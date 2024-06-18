"use client";

import { UseStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = UseStoreModal();

  return (
  <Modal
    title="Create Store"
    description="Add a new store to manage products and categories"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
  >
    Future Create Store Form
  </Modal>
  );
};