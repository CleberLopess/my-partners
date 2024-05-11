"use client";
import {
  deleteCompanieById,
  getCompaniesById,
} from "@/app/api/companies/request";
import { CompaniesProps } from "@/app/api/companies/types";
import { ButtonComponent } from "@/components/Button";
import CompaniesViewComponent from "@/components/Card/CompaniesView";
import ModalComponent from "@/components/Modal";
import { NavbarComponent } from "@/components/Navbar";
import { ToastContext } from "@/context/toast/context";
import { UserContext } from "@/context/user/contex";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useContext, useEffect, useState } from "react";

const CompaniesPageScreen = () => {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { setToast } = useContext(ToastContext);
  const [dataComapanie, setDataComapanie] = useState<CompaniesProps>();
  const [openModal, setOpenModal] = useState(false);

  const requestCompanie = useCallback(async () => {
    try {
      const data = await getCompaniesById(String(id));
      setDataComapanie(data);
    } catch (error) {
      setToast({
        isOpen: true,
        message: `Erro ao buscar parceiro com o id: ${id}`,
        type: "error",
      });
    }
  }, [id, setToast]);

  const handleDeleteCompanie = async () => {
    setOpenModal(false);

    try {
      await deleteCompanieById(String(id));
      setToast({
        isOpen: true,
        message: `Parceiro deletado`,
        type: "success",
      });

      router.push("/listar-companhias/1");
    } catch (error) {
      setToast({
        isOpen: true,
        message: `Erro ao deletar parceiro`,
        type: "error",
      });
    }
  };

  useEffect(() => {
    requestCompanie();
  }, [requestCompanie]);

  return (
    <section className="mt-8">
      <NavbarComponent userName={user.name} />
      <h1 className="text-center text-3xl font-bold mb-8">
        Página da Companhia
      </h1>

      {dataComapanie && (
        <CompaniesViewComponent
          collaboratorsCount={dataComapanie.collaboratorsCount}
          companyName={dataComapanie.companyName}
          createdAt={dataComapanie.createdAt}
          isActive={dataComapanie.isActive}
          lastSubmit={dataComapanie.lastSubmit}
          id={dataComapanie.id}
          handleClickDelete={() => setOpenModal(true)}
          handleClickEdit={() =>
            router.push(`/companhia/editar/${dataComapanie.id}`)
          }
        />
      )}

      <ModalComponent
        handleCloseModal={() => setOpenModal(false)}
        isOpen={openModal}
      >
        Você tem certeza que deseja excluir este parceiro?
        <div className="flex gap-2 mt-4">
          <ButtonComponent onClick={() => setOpenModal(false)}>
            Cancelar
          </ButtonComponent>
          <ButtonComponent
            className="bg-red-500 hover:bg-red-600"
            onClick={handleDeleteCompanie}
          >
            Excluir
          </ButtonComponent>
        </div>
      </ModalComponent>
    </section>
  );
};

export default CompaniesPageScreen;
