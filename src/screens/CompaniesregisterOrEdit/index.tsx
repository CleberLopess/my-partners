"use client";
import {
  getCompaniesById,
  postCompanie,
  pustCompanieById,
} from "@/app/api/companies/request";
import { CompaniesProps } from "@/app/api/companies/types";
import { ButtonComponent } from "@/components/Button";
import { InputComponent } from "@/components/Input";
import ModalComponent from "@/components/Modal";
import { NavbarComponent } from "@/components/Navbar";
import { ToastContext } from "@/context/toast/context";
import { UserContext } from "@/context/user/contex";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";

const CompaniesregisterOrEditScreen = () => {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { setToast } = useContext(ToastContext);
  const [nameCompanie, setNameCompanie] = useState("");
  const [collaboratorsCompanie, setCollaboratorsCompanie] = useState<number>(0);
  const [activeCompanie, setActiveCompanie] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const requestCompanie = useCallback(async () => {
    if (id) {
      try {
        const data = await getCompaniesById(String(id));
        setNameCompanie(data.companyName);
        setCollaboratorsCompanie(data.collaboratorsCount);
        setActiveCompanie(data.isActive);
      } catch (error) {
        console.log("erro");

        setToast({
          isOpen: true,
          message: `Erro ao buscar compania com o id: ${id}`,
          type: "error",
        });
      }
    }
  }, [id, setToast]);

  useEffect(() => {
    requestCompanie();
  }, [requestCompanie]);

  useEffect(() => {
    if (nameCompanie && collaboratorsCompanie) {
      setDisableButton(false);
      return;
    }
    setDisableButton(true);
  }, [collaboratorsCompanie, nameCompanie]);

  const handleClear = useCallback(() => {
    setNameCompanie("");
    setCollaboratorsCompanie(0);
    setActiveCompanie(false);
    router.back();
  }, [router]);

  const updateComapanie = useCallback(
    async (registerCompanie: CompaniesProps) => {
      const dataPutCompanie: CompaniesProps = {
        ...registerCompanie,
        id: String(id),
        lastSubmit: new Date().toISOString(),
      };

      try {
        await pustCompanieById(dataPutCompanie);
        setToast({
          isOpen: true,
          message: "Compania atualizado com sucesso",
          type: "success",
        });
        router.back();
      } catch (error) {
        setToast({
          isOpen: true,
          message: "Erro ao atualizar compania",
          type: "error",
        });
      }
    },
    [id, router, setToast]
  );

  const submitCompanie = useCallback(
    async (registerPartners: CompaniesProps) => {
      setOpenModal(false);

      try {
        await postCompanie(registerPartners);

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
    [handleClear, setToast]
  );

  const handleSubmit = useCallback(async () => {
    const registerCompanie: CompaniesProps = {
      companyName: nameCompanie,
      collaboratorsCount: collaboratorsCompanie,
      isActive: activeCompanie,
      createdAt: new Date().toISOString(),
      lastSubmit: new Date().toISOString(),
    };

    if (id) {
      updateComapanie(registerCompanie);
      return;
    }

    submitCompanie(registerCompanie);
  }, [
    activeCompanie,
    collaboratorsCompanie,
    id,
    nameCompanie,
    submitCompanie,
    updateComapanie,
  ]);

  return (
    <section className="mt-8">
      <NavbarComponent userName={user.name} />
      <div className="flex flex-col gap-4 px-4">
        <h2 className="text-2xl font-bold text-center">Registrar Parceiros</h2>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          <InputComponent
            label="Nome da companhia"
            name="name"
            type="text"
            placeholder="Nome do parceiro"
            onChange={(ev) => setNameCompanie(ev.target.value)}
            value={nameCompanie}
          />
          <InputComponent
            label="Total de colaboradores"
            name="collaborators"
            type="number"
            placeholder="Total de colaboradores"
            onChange={(ev) => setCollaboratorsCompanie(Number(ev.target.value))}
            value={String(collaboratorsCompanie)}
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
        {id ? " Atualizar compania" : " Cadastrar compania"}
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

export default CompaniesregisterOrEditScreen;
