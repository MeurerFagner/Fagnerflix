import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresiniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }
    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState([valoresiniciais])
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor
        })
    }
    function handleChange(infoEvento) {
        console.log(infoEvento.target)
        const { name, value } = infoEvento.target;
        setValue(name, value)
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome} </h1>
            <form onSubmit={function handleSubmit(eventInfo) {
                eventInfo.preventDefault()
                setCategorias([
                    ...categorias,
                    values
                ])
                setValues(valoresiniciais)
            }}>
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <div>
                    <label>
                        Descrição:
                    <textArea
                            type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <FormField
                    label={"Cor"}
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>Cadastrar</button>
            </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={indice}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;