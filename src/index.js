import React from "react";
import './index.css'
import  {createRoot} from "react-dom/client"
import GifApp from "./GifApp";



const root=document.querySelector("#root");

const root2 = createRoot(root);

root2.render(<GifApp />)