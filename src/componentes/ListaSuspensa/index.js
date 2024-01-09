import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    // console.log(props.itens);
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.valor}
                required={props.obrigatorio}
            >
                <option value="">Selecione o time correspondente</option>
                {props.itens.map((item) => (<option key={item}>{item}</option>))}
            </select>
        </div>
    );
};

export default ListaSuspensa;