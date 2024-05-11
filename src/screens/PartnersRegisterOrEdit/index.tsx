"use client";
import { getPartnersById } from "@/app/api/partners/get/route";
import { postPartners } from "@/app/api/partners/post/route";
import { pustPartnersById } from "@/app/api/partners/put/route";
import { PartnersType } from "@/app/api/partners/types";
import { ButtonComponent } from "@/components/Button";
import { InputComponent } from "@/components/Input";
import ModalComponent from "@/components/Modal";
import { NavbarComponent } from "@/components/Navbar";
import { UserContext } from "@/context/user/contex";
import { ToastContext } from "@/context/toast/context";
import { stringToArray } from "@/helpers/stringToArray";
import { useParams } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";

export const PartnersRegisterOrEditScreen = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { setToast } = useContext(ToastContext);
  const [namePartnert, setNamePartner] = useState("");
  const [descriptionPartner, setDescriptionPartner] = useState("");
  const [clientsPartner, setClientsPartner] = useState("");
  const [projectsPartner, setProjectsPartner] = useState("");
  const [linkGithubPartner, setLinkGithubPartner] = useState("");
  const [linkDocsPartner, setLinkDocsPartner] = useState("");
  const [activePartner, setActivePartner] = useState(true);
  const [disableButton, setDisableButton] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const requestPartners = useCallback(async () => {
    if (id) {
      try {
        const data = await getPartnersById(String(id));
        setNamePartner(data.name);
        setDescriptionPartner(data.description);
        setClientsPartner(data.clients.join(","));
        setProjectsPartner(data.projects.join(","));
        setLinkGithubPartner(data.repositoryGit);
        setLinkDocsPartner(data.urlDoc);
        setActivePartner(data.isActive);
      } catch (error) {
        console.log("erro");

        setToast({
          isOpen: true,
          message: `Erro ao buscar parceiro com o id: ${id}`,
          type: "error",
        });
      }
    }
  }, [id, setToast]);

  useEffect(() => {
    requestPartners();
  }, [requestPartners]);

  useEffect(() => {
    if (
      namePartnert &&
      descriptionPartner &&
      clientsPartner &&
      projectsPartner &&
      linkGithubPartner &&
      linkDocsPartner
    ) {
      setDisableButton(false);
      return;
    }
    setDisableButton(true);
  }, [
    clientsPartner,
    descriptionPartner,
    linkDocsPartner,
    linkGithubPartner,
    namePartnert,
    projectsPartner,
  ]);

  const updatePartners = useCallback(
    async (registerPartners: PartnersType) => {
      const dataPutPartners = {
        ...registerPartners,
        id: String(id),
      };

      try {
        await pustPartnersById(dataPutPartners);
        setToast({
          isOpen: true,
          message: "Parceiro atualizado com sucesso",
          type: "success",
        });
      } catch (error) {
        setToast({
          isOpen: true,
          message: "Erro ao atualizar parceiro",
          type: "error",
        });
      }
    },
    [id, setToast]
  );

  const submitPartners = useCallback(
    async (registerPartners: PartnersType) => {
      try {
        await postPartners(registerPartners);

        setToast({
          isOpen: true,
          message: "Parceiro criado com sucesso",
          type: "success",
        });

        handleClear();
      } catch (error) {
        setToast({
          isOpen: true,
          message: "Erro ao criar parceiro",
          type: "error",
        });
      }
    },
    [setToast]
  );

  const handleSubmit = useCallback(async () => {
    const registerPartners: PartnersType = {
      name: namePartnert,
      description: descriptionPartner,
      clients: stringToArray(clientsPartner),
      projects: stringToArray(projectsPartner),
      repositoryGit: linkGithubPartner,
      urlDoc: linkDocsPartner,
      isActive: activePartner,
      createdAt: new Date().toISOString(),
    };

    if (id) {
      updatePartners(registerPartners);
      return;
    }

    submitPartners(registerPartners);
  }, [
    activePartner,
    clientsPartner,
    descriptionPartner,
    id,
    linkDocsPartner,
    linkGithubPartner,
    namePartnert,
    projectsPartner,
    submitPartners,
    updatePartners,
  ]);

  const handleClear = () => {
    setNamePartner("");
    setDescriptionPartner("");
    setClientsPartner("");
    setProjectsPartner("");
    setLinkGithubPartner("");
    setLinkDocsPartner("");
    setActivePartner(true);
  };

  return (
    <section className="mt-8">
      <NavbarComponent userName={user.name} />
      <div className="flex flex-col gap-4 px-4">
        <h2 className="text-2xl font-bold text-center">Registrar Parceiros</h2>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          <InputComponent
            label="Nome do parceiro"
            name="name"
            type="text"
            placeholder="Nome do parceiro"
            onChange={(ev) => setNamePartner(ev.target.value)}
            value={namePartnert}
          />
          <InputComponent
            label="Descrição do parceiro"
            name="description"
            type="text"
            placeholder="Descrição do parceiro"
            onChange={(ev) => setDescriptionPartner(ev.target.value)}
            value={descriptionPartner}
          />
          <InputComponent
            label="Clientes desse parceiro (separar por ,)"
            name="clients"
            type="text"
            placeholder="Clientes desse parceiro"
            onChange={(ev) => setClientsPartner(ev.target.value)}
            value={clientsPartner}
          />
          <InputComponent
            label="Projetos desse parceiro (separar por ,)"
            name="projects"
            type="text"
            placeholder="Projetos desse parceiro"
            onChange={(ev) => setProjectsPartner(ev.target.value)}
            value={projectsPartner}
          />
          <InputComponent
            label="Link Github do parceiro"
            name="linkGithub"
            type="text"
            placeholder="Link Github do parceiro"
            onChange={(ev) => setLinkGithubPartner(ev.target.value)}
            value={linkGithubPartner}
          />
          <InputComponent
            label="Link Docs do parceiro"
            name="linkDocs"
            type="text"
            placeholder="Link Docs do parceiro"
            onChange={(ev) => setLinkDocsPartner(ev.target.value)}
            value={linkDocsPartner}
          />
          <InputComponent
            label="Parceiro ativo?"
            name="active"
            type="checkbox"
            onChange={(ev) => setActivePartner(ev.target.checked)}
          />
        </div>
        <div className="flex gap-4">
          <ButtonComponent
            className="bg-red-500 hover:bg-red-700"
            onClick={handleClear}
          >
            Cancelar
          </ButtonComponent>
          <ButtonComponent
            onClick={() => setOpenModal(true)}
            disabled={disableButton}
          >
            Salvar
          </ButtonComponent>
        </div>
      </div>
      <ModalComponent
        handleCloseModal={() => setOpenModal(false)}
        isOpen={openModal}
      >
        Você tem certeza que deseja
        {id ? " Atualizar Parceiro" : " Cadastrar Parceiro"}
        <div className="flex gap-2 mt-4">
          <ButtonComponent onClick={() => setOpenModal(false)}>
            Cancelar
          </ButtonComponent>
          <ButtonComponent onClick={handleSubmit}>Salvar</ButtonComponent>
        </div>
      </ModalComponent>
    </section>
  );
};
