import { Negociacao } from "../models/negociacao";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((dados) => {
            return dados.map((dadoDeHoje) => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
        });
    }
}
