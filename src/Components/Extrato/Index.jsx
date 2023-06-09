import React from "react";
import { Botao, Box } from "../UI";
import { extratoLista } from "../../info";
import Itens from "../Itens";

const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(({id, type, from, value, date}) => (
                        <Itens key={id} type={type} from={from} value={value} date={date}></Itens>
                ))
            };
            <Botao>Ver Mais</Botao>
        </Box>

    );
};

export default Extrato;