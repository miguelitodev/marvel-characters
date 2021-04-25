import React from "react";
import { ListPages, Page, Button } from "./styles";

// Máximo de botões que vai ser mostrado na page
const MAX_ITEMS = 5;

// Quantos botões que você quer a direita e esquerda
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

/**
 * limit: quantos itens por page
 * total: total de itens na page
 * offset: quantos items você quer pular
 * setOffset:
 * */
const Pagination = ({ limit, total, offset, setOffset }) => {
    // Página atual, verifica se existe um valor e dps pega o número de pages
    // 20 no offset / 10 no limit = 2 + 1 = 3, então vamos estar na 3° page
    const current = offset ? offset / limit + 1 : 1;

    // Total de páginas, usa Math.ceil para não dar números quebrados e arredondar para cima
    const pages = Math.ceil(total / limit);

    // Qual o primeiro botão da paginação,
    // pegar o valor maior entre o primeiro valor e o 1, caso dê um valor negativo
    const first = Math.max(current - MAX_LEFT, 1);

    function onPageChange(page) {
        setOffset((page - 1) * limit);
    }

    return (
        <ListPages>
            <Page>
                <Button
                    onClick={() => onPageChange(current - 1)}
                    disabled={current === 1}
                >
                    Back
                </Button>
            </Page>

            {/* Criar um Array com o tamanho passado, no caso vai mostrar 9 itens */}
            {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                // Transformar um array de undefined em um array de números
                .map((_, index) => index + first)
                // Listando valores do array
                .map((page) => (
                    <Page key={page}>
                        <Button
                            onClick={() => onPageChange(page)}
                            className={
                                page === current ? "btn-is-active" : null
                            }
                        >
                            {page}
                        </Button>
                    </Page>
                ))}
            <Page>
                <Button
                    onClick={() => onPageChange(current + 1)}
                    disabled={current === pages}
                >
                    Next
                </Button>
            </Page>
        </ListPages>
    );
};

export default Pagination;
