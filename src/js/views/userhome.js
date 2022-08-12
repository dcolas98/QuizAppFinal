import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const UserHome = () => {
    return (
<div> 
< Link to="/quiz">
<button type="submit" className="btn btn-primary mt-2">Start Quiz!</button>
</Link>
</div>
)};