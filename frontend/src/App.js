import logo from './logo.svg';
import './App.css';

import CompUpdate from './components/compUpdate';
import CompResumen from './components/compResumen';
import CompProyecto from './components/compProyecto';
import CompFlujo from './components/compFlujo';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';

import { Routes, Route } from "react-router-dom";

import React from 'react';

let dataPersona = [
  {
    nombre: 'Hector',
    id: 1
  },
  {
    nombre: 'Juan',
    id: 2
  },
  {
    nombre: 'Marco',
    id: 3
  }
]


let dataTrabajo = [
  {
    id: 1,
    fkFlujo: 1,
    fkPersona: 1,
    trabajo: 'tarea 1',
    responsable: 'Hector',
    estado_requiere: 1,
    estado_activo: 0,
    estado_finalizado: 0,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'encalada'
  },
  {
    id: 2,
    fkFlujo: 1,
    fkPersona: 2,
    trabajo: 'tarea 2',
    responsable: 'Juan',
    estado_requiere: 1,
    estado_activo: 1,
    estado_finalizado: 0,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'encalada'
  },
  {
    id: 3,
    fkFlujo: 1,
    fkPersona: 3,
    trabajo: 'tarea 3',
    responsable: 'Marco',
    estado_requiere: 0,
    estado_activo: 0,
    estado_finalizado: 0,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'encalada'
  },
  {
    id: 4,
    fkFlujo: 2,
    fkPersona: 1,
    trabajo: 'tarea 1',
    responsable: 'Hector',
    estado_requiere: 0,
    estado_activo: 1,
    estado_finalizado: 0,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'jesus maria'
  },
  {
    id: 5,
    fkFlujo: 2,
    fkPersona: 2,
    trabajo: 'tarea 2',
    responsable: 'Juan',
    estado_requiere: 1,
    estado_activo: 1,
    estado_finalizado: 1,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'jesus maria'
  },
  {
    id: 6,
    fkFlujo: 2,
    fkPersona: 3,
    trabajo: 'tarea 3',
    responsable: 'Marco',
    estado_requiere: 1,
    estado_activo: 1,
    estado_finalizado: 0,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'jesus maria'
  }
];

let dataFlujo = [
  {
    id: 1,
    fkProyecto: 1,
    inicio: { nombre: 'inicio', id: 0, color: 'lightblue' },
    tarea1: { nombre: 'tarea 1', id: 1, color: 'pink' },
    tarea2: { nombre: 'tarea 2', id: 2, color: 'pink' },
    tarea3: { nombre: 'tarea 3', id: 3, color: 'pink' },
    fin: { nombre: 'fin', id: 4, color: 'lightblue' },
    flujo: [
      { key: 0, text: 'inicio', color: 'lightblue', loc: '0 150' },
      { key: 1, text: 'tarea 1', color: 'pink', loc: '300 0' },
      { key: 2, text: 'tarea 2', color: 'pink', loc: '150 0' },
      { key: 3, text: 'tarea 3', color: 'pink', loc: '150 300' },
      { key: 4, text: 'fin', color: 'lightblue', loc: '450 150' }
    ],
    conexion: [
      { key: -1, from: 0, to: 2 },
      { key: -2, from: 0, to: 3 },
      { key: -3, from: 0, to: 4 },
      { key: -4, from: 1, to: 4 },
      { key: -5, from: 2, to: 1 },
      { key: -6, from: 3, to: 0 },
    ],
  },
  {
    id: 2,
    fkProyecto: 1
  },
  {
    id: 3,
    fkProyecto: 2
  },
  {
    id: 4,
    fkProyecto: 2
  },
];

let dataProyecto = [
  {
    id: 1,
    cliente: 'Universidad de Lima',
    JP: 'Marco',
    IE: 'Luisandra',
    descripcion: ''
  },
  {
    id: 2,
    cliente: 'Rockys',
    JP: 'Marco',
    IE: 'Luisandra',
    descripcion: ''
  },
  {
    id: 3,
    cliente: 'Petroperu',
    JP: 'Marco',
    IE: 'Luisandra',
    descripcion: ''
  }
];

function App() {

  return (
    <div>
      <Container>
        <Row>
          <Col><CompFlujo dataTrabajo={dataTrabajo} dataFlujo={dataFlujo} /></Col>
        </Row>
        <Row>
          <Col><CompResumen dataTrabajo={dataTrabajo} dataPersona={dataPersona} /></Col>
          <Col><CompProyecto dataProyecto={dataProyecto} /></Col>
        </Row>
      </Container>
      <Routes>
        <Route path="update" element={<CompUpdate />} />
        <Route path="" element={<div></div>} />
      </Routes>
    </div>
  );
}


export default App;