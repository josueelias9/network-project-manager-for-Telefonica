import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table';

function CompTablas(props) {
    //const theme = useContext(DataContext);
    const dataProyecto = props.dataProyecto;
    const dataTrabajo = props.dataTrabajo;
    const dataFlujo = props.dataFlujo;
    const dataPersona = props.dataPersona;


    const a = dataProyecto.map((d) => {
        return <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.fkPersona}</td>
            <td>{d.cliente}</td>
            <td>{d.JP}</td>
            <td>{d.descripcion}</td>
            <td>{d.flujosTotal}</td>
            <td>{d.flujosResueltos}</td>
        </tr>

    });
    const b = dataTrabajo.map((d) => {
        return <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.fkFlujo}</td>
            <td>{d.fkPersona}</td>
            <td>{d.trabajo}</td>
            <td>{d.responsable}</td>
            <td>{d.estado_requiere}</td>
            <td>{d.estado_activo}</td>
            <td>{d.estado_finalizado}</td>
            <td>{d.informacion}</td>
            <td>{d.sede}</td>
        </tr>
    });

    const c = dataPersona.map((d) => {
        return <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.nombre}</td>
            <td>{d.cargo}</td>
            <td>{d.tipo}</td>
        </tr>
    });

    const d = dataFlujo.map((d) => {
        return <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.fkProyecto}</td>
            <td>{d.descripcion}</td>
            <td>{d.coordenadas}</td>
            <td>{JSON.stringify(d.inicio)}</td>
            <td>{JSON.stringify(d.fin)}</td>
            <td>{JSON.stringify(d.tarea1)}</td>
            <td>{JSON.stringify(d.tarea2)}</td>
            <td>{JSON.stringify(d.tarea3)}</td>
            <td>{JSON.stringify(d.flujo)}</td>
            <td>{JSON.stringify(d.conexion)}</td>
        </tr>
    });

    return <Container clr="red">
        <h3>sss</h3>

        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>fkPersona</th>
                    <th>cliente</th>
                    <th>JP</th>
                    <th>descripcion</th>
                    <th>flujosTotal</th>
                    <th>flujosResueltos</th>
                </tr>
            </thead>
            <tbody>
                {a}
            </tbody>
        </Table>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>fkFlujo</th>
                    <th>fkPersona</th>
                    <th>trabajo</th>
                    <th>responsable</th>
                    <th>estado_requiere</th>
                    <th>estado_activo</th>
                    <th>estado_finalizado</th>
                    <th>informacion</th>
                    <th>sede</th>
                </tr>
            </thead>
            <tbody>
                {b}
            </tbody>
        </Table>

        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nombre</th>
                    <th>cargo</th>
                    <th>tipo</th>
                </tr>
            </thead>
            <tbody>
                {c}
            </tbody>
        </Table>

        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>fkProyecto</th>
                    <th>descripcion</th>
                    <th>coordenadas</th>
                    <th>inicio</th>
                    <th>fin</th>
                    <th>tarea1</th>
                    <th>tarea2</th>
                    <th>tarea3</th>
                    <th>flujo</th>
                    <th>conexion</th>
                </tr>
            </thead>
            <tbody>
                {d}
            </tbody>
        </Table>

    </Container>;

}

export default CompTablas;