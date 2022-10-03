import React from "react";
import './App.css';

const d = new Date();
let year = d.getFullYear();

const fname = "Mohan";
const lname = "Reddy";

function Footer()
{
    return (
        <footer>
            <h1>Created by {fname + " " + lname}</h1>
            <p>Copyright Ⓒ { year}</p>
        </footer>
    );
}
export default Footer;