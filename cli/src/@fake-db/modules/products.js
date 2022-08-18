import GroupIcon from "@material-ui/icons/Group";
import React from "react";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import DeleteIcon from "@material-ui/icons/Delete";

// const today = new Date();

export const foldersList = [
  {id: 1, name: "All Items", slug: "products", icon: <GroupIcon />},
  {id: 2, name: "Available stocks", slug: "available", icon: <AccessTimeIcon />},
  {id: 3, name: "Out of stocks", slug: "unavailable", icon: <AccessTimeIcon />},
  {id: 4, name: "Starred Items", slug: "starred", icon: <StarIcon />},
  // {id: 5, name: "Trash", slug: "trash", icon: <DeleteIcon />}
];

export const popularFoldersList = [
  {id: 1, name: "All Items", slug: "products", icon: <GroupIcon />},
  {id: 3, name: "Out of stocks", slug: "unavailable", icon: <AccessTimeIcon />},
  {id: 4, name: "Starred Items", slug: "starred", icon: <StarIcon />},
  // {id: 5, name: "Trash", slug: "trash", icon: <DeleteIcon />}
];

export const labelsList = [
  {id: 1, name: "Electronics", slug: "electronics", color: "#FF8C00"},
  {id: 2, name: "Hardwares", slug: "hardwares", color: "#00C4B4"},
];

export const products = [
  {
    id: 1457690400,
    name: "Alex Dolgove",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "alex-dolgove@example.com",
    phones: [ {phone: "(215)-659-7529", label: "Home"} ],
    address: "CEO",
    starred: false,
    labels: [ 2 ],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 4800888209566,
    name: "Cream Silk - Triple Keratin",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "chelsea-johnss@example.com",
    phones: [ {phone: "(215)-659-7529", label: "home"} ],
    address: "CFO",
    starred: false,
    labels: [ 2, 1 ],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 6958898101689,
    name: "Pentel Pen - BLUE",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "domnic-brown@example.com",
    phones: [ {phone: "(215)-748-7855", label: "home"} ],
    address: "Designer",
    starred: false,
    labels: [ 3 ],
    balance: 0,
    limit: 1000,
    folder: "products"
  },
  {
    id: 4800049720114,
    name: "Meniral Tubig",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "domnic-brown@example.com",
    phones: [ {phone: "(215)-659-7529", label: "home"} ],
    address: "PHP Developer",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 48042772,
    name: "Cigarilyo",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "garry-sobars@example.com",
    phones: [ {phone: "(215)-659-8965", label: "home"} ],
    address: "HR Manager",
    starred: true,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 4801981118601,
    name: "Esparkol - Sprite",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "jeson-born@example.com",
    phones: [ {phone: "(215)-876-5434", label: "home"} ],
    address: "Marketing Head",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690406,
    name: "Jimmy Jo",
    dpUrl: "https://via.placeholder.com/150g",
    email_address: "jimmy-jo@example.com",
    phones: [ {phone: "(215)-659-7529", label: "home"} ],
    address: "BDO",
    starred: true,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690407,
    name: "John Smith",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "john-smith@example.com",
    phones: [ {phone: "(215)-456-2346", label: "home"} ],
    address: "CCO",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690408,
    name: "Jonathan Modano",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "jonathan-modano@example.com",
    phones: [ {phone: "(215)-278-4357", label: "home"} ],
    address: "Developer",
    starred: true,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690409,
    name: "Kadir M",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "kadir-m@example.com",
    phones: [ {phone: "(215)-286-0788", label: "home"} ],
    address: "UI-UX Designer",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690410,
    name: "Ken Ramirez",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "ken-remirez@example.com",
    phones: [ {phone: "(215)-586-4676", label: "home"} ],
    address: "CEO",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690500,
    name: "Michael Dogov",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "michael-dogov@example.com",
    phones: [ {phone: "(215)-659-7529", label: "home"} ],
    address: "CEO",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690501,
    name: "Stella Johnson",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "stella-johnson@example.com",
    phones: [ {phone: "(215)-745-2345", label: "home"} ],
    address: "CFO",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690502,
    name: "Steve Smith",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "steve-smith@example.com",
    phones: [ {phone: "(215)-748-3265", label: "home"} ],
    address: "Designer",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 6930446819833,
    name: "Nexu",
    dpUrl: "https://via.placeholder.com/150",
    email_address: "noah-owens@example.com",
    phones: [ {phone: "(215)-756-3465", label: "home"} ],
    address: "PHP Developer",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690404,
    name: "Ellen Manning",
    dpUrl: "",
    email_address: "ellen-manning@example.com",
    phones: [ {phone: "(215)-659-3246", label: "home"} ],
    address: "HR Manager",
    starred: true,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690505,
    name: "Angel Jones",
    dpUrl: "",
    email_address: "angel-jones@example.com",
    phones: [ {phone: "(215)-876-3246", label: "home"} ],
    address: "Marketing Head",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690506,
    name: "Dollie Norton",
    dpUrl: "",
    email_address: "dollie-norton@example.com",
    phones: [ {phone: "(215)-785-0967", label: "home"} ],
    address: "BDO",
    starred: true,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690507,
    name: "Joshua Brian",
    dpUrl: "",
    email_address: "joshua-brian@example.com",
    phones: [ {phone: "(215)-456-0677", label: "home"} ],
    address: "CCO",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690508,
    name: "Amay Mathur",
    dpUrl: "",
    email_address: "amay-mathur@example.com",
    phones: [ {phone: "(215)-278-5475", label: "home"} ],
    address: "Developer",
    starred: true,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690509,
    name: "Chris Mathew",
    dpUrl: "",
    email_address: "chris-mathew@example.com",
    phones: [ {phone: "(215)-286-0456", label: "home"} ],
    address: "UI-UX Designer",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  },
  {
    id: 1457690510,
    name: "Nikki Johnson",
    dpUrl: "",
    email_address: "nikki-johnson@example.com",
    phones: [ {phone: "(215)-586-2355", label: "home"} ],
    address: "CEO",
    starred: false,
    labels: [],
    balance: 900,
    limit: 1000,
    folder: "products"
  }
];



export const popularProducts = [
  {
    id: 1,
    name: "Screw Driver",
    description: "Mekata screw driver. size - 10mm, color - yellow sdaddawdwadwa",
    price: 200,
    discount_price: 180,
    cover: "https://via.placeholder.com/80x80",
    stocks: 100,
    labels: [ 2 ],
    limit: 10,
    folder: "products"

  },
  {
    id: 2,
    name: "Hammer",
    description: "Samsung rechargable hammer.",
    price: 100,
    discount_price: 80,
    cover: "https://via.placeholder.com/80x80",
    stocks: 10,
    labels: [ 1, 2 ],
    limit: 10,
    folder: "products"
  }
];
