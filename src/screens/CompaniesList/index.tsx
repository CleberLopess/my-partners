"use client";

import { getCompanies } from "@/app/api/companies/request";
import { CompaniesProps } from "@/app/api/companies/types";
import { CardCompanies } from "@/components/Card/Companies";
import { NavbarComponent } from "@/components/Navbar";
import { PaginationComponent } from "@/components/Pagination";
import { UserContext } from "@/context/user/contex";
import { getLocalStorage, setLocalStorage } from "@/helpers/localStorage";
import { LOCALSTORAGE_KEYS } from "@/helpers/localStorage/types";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";

const CompaniesExternalsScreen = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const { pagePagination } = useParams();
  const [companiesData, setCompaniesData] = useState<CompaniesProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1 || Number(pagePagination));
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const currentPage = getLocalStorage(LOCALSTORAGE_KEYS.PAGINATION_COMPANIES);

    if (!!currentPage) {
      setCurrentPage(Number(currentPage));
    }
  }, []);

  useEffect(() => {
    if (pagePagination) {
      setLocalStorage(
        LOCALSTORAGE_KEYS.PAGINATION_COMPANIES,
        String(pagePagination)
      );
    }
  }, [pagePagination]);

  const fetchPartners = useCallback(async () => {
    const data = await getCompanies();
    setCompaniesData(data);
  }, []);

  useEffect(() => {
    fetchPartners();
  }, [fetchPartners]);

  const getCurrentPageItems = useCallback(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return companiesData.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, companiesData]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    router.push(`/listar-companhias/${pageNumber}`);
  };

  return (
    <section className="mt-8">
      <NavbarComponent userName={user.name} />
      <h1 className="text-center text-3xl font-bold">Lista de companias</h1>
      <div className="flex flex-col gap-8 mt-8">
        {getCurrentPageItems().map((companies) => (
          <CardCompanies
            key={companies.id}
            id={companies.id!}
            companyName={companies.companyName}
            createdAt={companies.createdAt}
            collaboratorsCount={companies.collaboratorsCount}
            lastSubmit={companies.lastSubmit}
            handleClickCard={() => router.push(`/companhia/${companies.id}`)}
          />
        ))}
      </div>
      {getCurrentPageItems().length > 0 && (
        <PaginationComponent
          className="my-8"
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={Math.ceil(companiesData.length / itemsPerPage)}
        />
      )}
    </section>
  );
};

export default CompaniesExternalsScreen;
