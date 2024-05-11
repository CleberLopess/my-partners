"use client";
import { getPartners, getTypes } from "@/app/api/partners/get/route";
import { CardPartners } from "@/components/Card/Partners";
import { NavbarComponent } from "@/components/Navbar";
import { PaginationComponent } from "@/components/Pagination";
import { UserContext } from "@/context/user/contex";
import { useCallback, useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/helpers/localStorage";
import { LOCALSTORAGE_KEYS } from "@/helpers/localStorage/types";
import { useRouter, useParams, usePathname } from "next/navigation";

export const ListPartnersScreen = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const { pagePagination } = useParams();
  const [partnersData, setPartnersData] = useState<getTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1 || Number(pagePagination));
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const currentPage = getLocalStorage(LOCALSTORAGE_KEYS.PAGINATION_PARTNERS);

    if (!!currentPage) {
      setCurrentPage(Number(currentPage));
    }
  }, []);

  useEffect(() => {
    if (pagePagination) {
      setLocalStorage(
        LOCALSTORAGE_KEYS.PAGINATION_PARTNERS,
        String(pagePagination)
      );
    }
  }, [pagePagination]);

  const fetchPartners = useCallback(async () => {
    const data = await getPartners();
    setPartnersData(data);
  }, []);

  useEffect(() => {
    fetchPartners();
  }, [fetchPartners]);

  const getCurrentPageItems = useCallback(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return partnersData.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, partnersData]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    router.push(`/listar-parceiros/${pageNumber}`);
  };

  return (
    <section className="mt-8">
      <NavbarComponent userName={user.name} />
      <h1 className="text-center text-3xl font-bold">Lista de parceiros</h1>
      <div className="flex flex-col gap-8 mt-8">
        {getCurrentPageItems().map((partner) => (
          <CardPartners
            key={partner.id}
            description={partner.description}
            id={partner.id}
            name={partner.name}
            clients={partner.clients.length}
            projects={partner.projects.length}
            linkDocs={partner.urlDoc}
            linkGithub={partner.repositoryGit}
            createdAt={partner.createdAt}
          />
        ))}
      </div>
      <PaginationComponent
        className="my-8"
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={Math.ceil(partnersData.length / itemsPerPage)}
      />
    </section>
  );
};
