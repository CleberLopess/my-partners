"use client";
import { getPartnersById } from "@/app/api/partners/get/route";
import { PartnersType } from "@/app/api/partners/types";
import { ButtonComponent } from "@/components/Button";
import CardView from "@/components/Card/View";
import ModalComponent from "@/components/Modal";
import { NavbarComponent } from "@/components/Navbar";
import { UserContext } from "@/context/user/contex";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useContext, useEffect, useState } from "react";

const PartnersPageScreen = () => {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [dataPartners, setDataPartners] = useState<PartnersType>();
  const [openModal, setOpenModal] = useState(false);

  const requestPartners = useCallback(async () => {
    const data = await getPartnersById(String(id));
    setDataPartners(data);
  }, [id]);

  useEffect(() => {
    requestPartners();
  }, [requestPartners]);

  return (
    <section className="mt-8">
      <NavbarComponent userName={user.name} />
      <h1 className="text-center text-3xl font-bold">Página do parceiro</h1>

      {dataPartners && (
        <CardView
          clients={dataPartners.clients}
          projects={dataPartners.projects}
          name={dataPartners.name}
          description={dataPartners.description}
          id={dataPartners.id!}
          linkDocs={dataPartners.urlDoc}
          linkGithub={dataPartners.repositoryGit}
          createdAt={dataPartners.createdAt}
          handleClickDelete={() => setOpenModal(true)}
          handleClickEdit={() =>
            router.push(`/parceiro/editar/${dataPartners.id}`)
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
            onClick={() => {}}
          >
            Excluir
          </ButtonComponent>
        </div>
      </ModalComponent>
    </section>
  );
};

export default PartnersPageScreen;
