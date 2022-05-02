import logo from './logo.svg';
import './App.css';

import CompUpdate from './components/compUpdate';
import CompResumen from './components/compResumen';
import CompProyecto from './components/compProyecto';
import CompFlujo from './components/compFlujo';
import CompNav from './components/compNav';
import CompListaProyectos from './components/compListaProyectos';

import Container from 'react-bootstrap/esm/Container';

import { Routes, Route } from "react-router-dom";

import React from 'react';

let dataPersona = [
  {
    id: 1,
    nombre: 'Hector',
    cargo: 'ingeniero de red',
    tipo: 'especialista',
  },
  {
    id: 2,
    nombre: 'Juan',
    cargo: 'gestor PEXT',
    tipo: 'especialista',
  },
  {
    id: 3,
    nombre: 'Marco',
    cargo: 'gestor UMG',
    tipo: 'especialista',
  },
  {
    id: 4,
    nombre: 'Maria',
    cargo: 'asistente',
    tipo: 'especialista',
  },
  {
    id: 5,
    nombre: 'Armando',
    cargo: 'IE',
    tipo: 'lider',
  },
  {
    id: 6,
    nombre: 'Luisandra',
    cargo: 'supervisor',
    tipo: 'lider',
  },
  {
    id: 7,
    nombre: 'Melvin',
    cargo: 'IE',
    tipo: 'lider',
  },
  {
    id: 8,
    nombre: 'Josue',
    cargo: 'IE',
    tipo: 'lider',
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
    descripcion: 'instalacion de equipos mas FO',
    coordenadas:[1,1],
    inicio: { nombre: 'inicio', id: 0, color: 'lightblue' },
    fin: { nombre: 'fin', id: 1, color: 'lightblue' },
    tarea1: { nombre: 'tarea 1', id: 2, color: 'pink' },
    tarea2: { nombre: 'tarea 2', id: 3, color: 'pink' },
    tarea3: { nombre: 'tarea 3', id: 4, color: 'pink' },
    flujo: [
      { key: 0, text: 'inicio', color: 'lightblue', loc: '0 150' },
      { key: 1, text: 'fin', color: 'lightblue', loc: '450 150' },
      { key: 2, text: 'tarea 1', color: 'pink', loc: '300 0' },
      { key: 3, text: 'tarea 2', color: 'pink', loc: '150 0' },
      { key: 4, text: 'tarea 3', color: 'pink', loc: '150 300' },
    ],
    conexion: [
      { key: -2, from: 0, to: 3 },
      { key: -4, from: 4, to: 1 },
      { key: -5, from: 2, to: 1 },
      { key: -6, from: 3, to: 4 },
    ],
  },
  {
    id: 2,
    fkProyecto: 1,
    descripcion: 'instalacion de equipos mas FO',
    coordenadas:[1,1],
    inicio: { nombre: 'inicio', id: 0, color: 'lightblue' },
    fin: { nombre: 'fin', id: 1, color: 'lightblue' },
    tarea1: { nombre: 'tarea 1', id: 2, color: 'pink' },
    tarea2: { nombre: 'tarea 2', id: 3, color: 'pink' },
    tarea3: { nombre: 'tarea 3', id: 4, color: 'pink' },
    flujo: [
      { key: 0, text: 'inicio', color: 'lightblue', loc: '0 150' },
      { key: 1, text: 'fin', color: 'lightblue', loc: '450 150' },
      { key: 2, text: 'tarea 1', color: 'pink', loc: '300 0' },
      { key: 3, text: 'tarea 2', color: 'pink', loc: '150 0' },
      { key: 4, text: 'tarea 3', color: 'pink', loc: '150 300' },
    ],
    conexion: [
      { key: -1, from: 0, to: 2 },
      { key: -3, from: 0, to: 4 },
      { key: -5, from: 2, to: 1 },
      { key: -6, from: 3, to: 4 },
    ],
  },
  {
    id: 3,
    fkProyecto: 2,
    descripcion: 'solo configuracion',
    coordenadas:[1,1],
  },
  {
    id: 4,
    fkProyecto: 2,
    descripcion: 'solo equipos',
    coordenadas:[1,1],
  },
];

let dataProyecto = [
  {
    id: 1,
    fkPersona: 6,
    cliente: 'Universidad de Lima',
    JP: 'Marco',
    descripcion: 'Migracion de la cabecera',
    flujosTotal: 10,
    flujosResueltos: 5,

  },
  {
    id: 2,
    fkPersona: 7,
    cliente: 'Rockys',
    JP: 'Julio Ponce',
    descripcion: 'baja de enlaces',
    flujosTotal: 10,
    flujosResueltos: 5,
  },
  {
    id: 3,
    fkPersona: 5,
    cliente: 'Petroperu',
    JP: 'Katherine',
    descripcion: 'SDWAN',
    flujosTotal: 8,
    flujosResueltos: 7,
  },
  {
    id: 4,
    fkPersona: 8,
    cliente: 'Llamagas',
    JP: 'Karin Mendoza',
    descripcion: 'cambio de medio',
    flujosTotal: 15,
    flujosResueltos: 14,
  },
  {
    id: 5,
    fkPersona: 8,
    cliente: 'Chinalco',
    JP: 'Denisse',
    descripcion: 'metrolan',
    flujosTotal: 20,
    flujosResueltos: 8,
  },
  {
    id: 6,
    fkPersona: 7,
    cliente: 'BCP',
    JP: 'Denisse',
    descripcion: 'migracion de red',
    flujosTotal: 12,
    flujosResueltos: 3,
  }
];

function App() {
  return (
    <div>
      <CompNav />
      <Container>
        <h2>Lista de proyectos</h2>
        <CompListaProyectos dataProyecto={dataProyecto} dataPersona={dataPersona} />
        <h2>Vista proyecto</h2>
        <CompProyecto dataProyecto={dataProyecto} dataFlujo={dataFlujo} />
        <h2>Vista por Flujo</h2>
        <CompFlujo dataTrabajo={dataTrabajo} dataFlujo={dataFlujo} />
        <h2>Backlog</h2>
        <CompResumen dataTrabajo={dataTrabajo} dataPersona={dataPersona} />
      </Container>
      <Routes>
        <Route path="update" element={<CompUpdate />} />
        <Route path="" element={<div></div>} />
      </Routes>
    </div>
  );
}


export default App;