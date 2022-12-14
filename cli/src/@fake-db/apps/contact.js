import GroupIcon from '@material-ui/icons/Group';
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DeleteIcon from '@material-ui/icons/Delete';

export const foldersList = [
  { id: 1, name: 'All Customers', slug: 'customers', icon: <GroupIcon /> },
  { id: 2, name: 'Unpaid Customers', slug: 'unpaid', icon: <AccessTimeIcon /> },
  { id: 3, name: 'Starred Customers', slug: 'starred', icon: <StarIcon /> },
  { id: 4, name: 'Trash', slug: 'trash', icon: <DeleteIcon /> },
];

export const labelsList = [
  { id: 1, name: 'A', slug: 'banking', color: '#FF8C00' },
  { id: 2, name: 'Company', slug: 'company', color: '#00C4B4' },
  { id: 3, name: 'Payments', slug: 'payments', color: '#0F9AF7' },
];

export const contacts = [
  {
    id: 1457690400,
    fullName: 'Stella Johnson',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'stella.johnson@example.com',
    phone: '(215)-659-7529',
    limit: 1000,
    balance: 999,
    designation: 'CEO',
    starred: false,
    unpaid: true,
    company: 'TCS',
    labels: [2],
    folder: 'customers',
  },
  {
    id: 1457690401,
    fullName: 'Garry Sobars',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'garry.sobars@example.com',
    phone: '(215)-659-7529',
    limit: 1000,
    balance: 999,
    designation: 'CFO',
    starred: false,
    unpaid: false,
    company: 'Infosys',
    labels: [2, 1],
    folder: 'customers',
  },
  {
    id: 1457690402,
    fullName: 'Alex Dolgove',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'alex.dolgove@example.com',
    phone: '(215)-748-7855',
    limit: 1000,
    balance: 999,
    designation: 'Designer',
    starred: false,
    unpaid: false,
    company: 'Accenture',
    labels: [3],
    folder: 'customers',
  },
  {
    id: 1457690403,
    fullName: 'Domnic Brown',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'domnic.brown@example.com',
    phone: '(215)-659-7529',
    limit: 1000,
    balance: 999,
    designation: 'PHP Developer',
    starred: false,
    unpaid: true,
    company: 'Pizza Hut',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690404,
    fullName: 'Kadir M',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'kadir.m@example.com',
    phone: '(215)-659-8965',
    limit: 1000,
    balance: 999,
    designation: 'HR Manager',
    starred: true,
    unpaid: false,
    company: 'Dominos',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690405,
    fullName: 'John Smith',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'john.smith@example.com',
    phone: '(215)-876-5434',
    limit: 1000,
    balance: 999,
    designation: 'Marketing Head',
    starred: false,
    unpaid: false,
    company: 'Subway',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690406,
    fullName: 'Domnic Harris',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'domnic.harris@example.com',
    phone: '(215)-659-7529',
    limit: 1000,
    balance: 999,
    designation: 'BDO',
    starred: true,
    unpaid: true,
    company: 'Honda',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690407,
    fullName: 'Jimmy Jo',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'jimmy.jo@example.com',
    phone: '(215)-456-2346',
    limit: 1000,
    balance: 999,
    designation: 'CCO',
    starred: false,
    unpaid: false,
    company: 'TVS',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690408,
    fullName: 'Jimmy Jon',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'jimmy.jon@example.com',
    phone: '(215)-278-4357',
    limit: 1000,
    balance: 999,
    designation: 'Developer',
    starred: true,
    unpaid: false,
    company: 'Hero',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690409,
    fullName: 'Jeson Born',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'jeson.born@example.com',
    phone: '(215)-286-0788',
    limit: 1000,
    balance: 999,
    designation: 'UI-UX Designer',
    starred: false,
    unpaid: false,
    company: 'Hyundai',
    labels: [],
    folder: 'trash',
  },
  {
    id: 1457690410,
    fullName: 'Steve Smith',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'steve.smith@example.com',
    phone: '(215)-586-4676',
    limit: 1000,
    balance: 999,
    designation: 'CEO',
    starred: false,
    unpaid: false,
    company: 'Maruti',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690500,
    fullName: 'Stella Johnson',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'stella.johnson@example.com',
    phone: '(215)-659-7529',
    limit: 1000,
    balance: 999,
    designation: 'CEO',
    starred: false,
    unpaid: true,
    company: 'Chevrolet',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690501,
    fullName: 'Garry Sobars',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'garry.sobars@example.com',
    phone: '(215)-745-2345',
    limit: 1000,
    balance: 999,
    designation: 'CFO',
    starred: false,
    unpaid: true,
    company: 'Morgan Garrage',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690502,
    fullName: 'Alex Dolgove',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'alex.dolgove@example.com',
    phone: '(215)-748-3265',
    limit: 1000,
    balance: 999,
    designation: 'Designer',
    starred: false,
    unpaid: false,
    company: 'Tata',
    labels: [],
    folder: 'trash',
  },
  {
    id: 1457690503,
    fullName: 'Domnic Brown',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'domnic.brown@example.com',
    phone: '(215)-756-3465',
    limit: 1000,
    balance: 999,
    designation: 'PHP Developer',
    starred: false,
    unpaid: true,
    Company: 'Levis',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690404,
    fullName: 'Kadir M',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'kadir.m@example.com',
    phone: '(215)-659-3246',
    limit: 1000,
    balance: 999,
    designation: 'HR Manager',
    starred: true,
    unpaid: false,
    company: 'John Players',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690505,
    fullName: 'John Smith',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'john.smith@example.com',
    phone: '(215)-876-3246',
    limit: 1000,
    balance: 999,
    designation: 'Marketing Head',
    starred: false,
    unpaid: false,
    company: 'Jaguar',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690506,
    fullName: 'Domnic Harris',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'domnic.harris@example.com',
    phone: '(215)-785-0967',
    limit: 1000,
    balance: 999,
    designation: 'BDO',
    starred: true,
    unpaid: false,
    company: 'Reliance',
    labels: [],
    folder: 'trash',
  },
  {
    id: 1457690507,
    fullName: 'Jimmy Jo',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'jimmy.jo@example.com',
    phone: '(215)-456-0677',
    limit: 1000,
    balance: 999,
    designation: 'CCO',
    starred: false,
    unpaid: false,
    company: 'Flipkart',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690508,
    fullName: 'Jimmy Jon',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'jimmy.jon@example.com',
    phone: '(215)-278-5475',
    limit: 1000,
    balance: 999,
    designation: 'Developer',
    starred: true,
    unpaid: false,
    company: 'Snapdeal',
    labels: [],
    folder: 'trash',
  },
  {
    id: 1457690509,
    fullName: 'Jeson Born',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'jeson.born@example.com',
    phone: '(215)-286-0456',
    limit: 1000,
    balance: 999,
    designation: 'UI-UX Designer',
    starred: false,
    unpaid: false,
    company: 'Amazon',
    labels: [],
    folder: 'customers',
  },
  {
    id: 1457690510,
    fullName: 'Steve Smith',
    dpUrl: 'https://via.placeholder.com/150x150',
    email_address: 'steve.smith@example.com',
    phone: '(215)-586-2355',
    limit: 1000,
    balance: 999,
    designation: 'CEO',
    starred: false,
    unpaid: false,
    company: 'Myntra',
    labels: [],
    folder: 'customers',
  },
];
