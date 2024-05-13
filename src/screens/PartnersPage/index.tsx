"use client";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  getPartnersById,
  deletePartnersById,
} from "@/app/api/partners/requests";
import { PartnersType } from "@/app/api/partners/types";
import { ButtonComponent } from "@/components/Button";
import { NavbarComponent } from "@/components/Navbar";
import { ToastContext } from "@/context/toast/context";
import { UserContext } from "@/context/user/contex";
import { useParams, useRouter } from "next/navigation";
import { PartinersViewComponent } from "@/components/Card/PartinersView";
import { ModalComponent } from "@/components/Modal";

export const PartnersPageScreen = () => {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { setToast } = useContext(ToastContext);
  const [dataPartners, setDataPartners] = useState<PartnersType>();
  const [openModal, setOpenModal] = useState(false);

  const requestPartners = useCallback(async () => {
    try {
      const data = await getPartnersById(String(id));
      setDataPartners(data);
    } catch (error) {
      setToast({
        isOpen: true,
        message: `Erro ao buscar parceiro com o id: ${id}`,
        type: "error",
      });
    }
  }, [id, setToast]);

  const handleDeletePartners = async () => {
    setOpenModal(false);

    try {
      await deletePartnersById(String(id));
      setToast({
        isOpen: true,
        message: `Parceiro deletado`,
        type: "success",
      });

      router.push("/listar-parceiros/1");
    } catch (error) {
      setToast({
        isOpen: true,
        message: `Erro ao deletar parceiro`,
        type: "error",
      });
    }
  };

  useEffect(() => {
    requestPartners();
  }, [requestPartners]);

  return (
    <section className="mt-8">
      <NavbarComponent userName={user.name} />
      <h1 className="text-center text-3xl font-bold mb-8">
        Página do parceiro
      </h1>

      {dataPartners && (
        <PartinersViewComponent
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
            onClick={handleDeletePartners}
          >
            Excluir
          </ButtonComponent>
        </div>
      </ModalComponent>
    </section>
  );
};
