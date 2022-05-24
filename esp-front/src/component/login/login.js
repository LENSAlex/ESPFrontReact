
import React from 'react'
import { Router } from 'react-router-dom'
import './login.css';


import {
    Routes,
    Route,
    Link
  } from 'react-router-dom';

export default function login() {
  return (
    // <div>
    //     <h1>login</h1>
    //     <Link to="/register">register</Link>
    // </div>
    <div class="signup__container">
        <div class="container__child signup__form">
            <form action="#">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" type="text" name="email" id="email" placeholder="james.bond@spectre.com" required />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input class="form-control" type="password" name="password" id="password" placeholder="********" required />
                </div>
                <div class="m-t-lg">
                    <ul class="list-inline">
                    <li>
                        <input class="btn btn--form" type="submit" value="LOGIN" />
                    </li>
                    <li>
                        <Link class="signup__link" to="/register">I am not a member</Link>
                    </li>
                    </ul>
                </div>
            </form>  
        </div>
    </div>
  )
}
