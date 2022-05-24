import React from 'react'
import './register.css';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';


export default function register() {
  return (
  <div class="signup__container">
  <div class="container__child signup__thumbnail">
    <div class="thumbnail__logo">
      <h1 class="logo__text">ESP</h1>
    </div>
    <div class="thumbnail__content text-center">
      <h1 class="heading--primary">Welcome to MI6.</h1>
      <h2 class="heading--secondary">Are you ready to join the elite?</h2>
    </div>
    <div class="thumbnail__links">
      <ul class="list-inline m-b-0 text-center list-inlineIcon">
        <li><a href="http://alexdevero.com/" target="_blank"><i class="fa fa-globe"></i>fb</a></li>
        <li><a href="https://www.behance.net/alexdevero" target="_blank"><fa class="fa fa-behance"></fa>Insta</a></li>
        <li><a href="https://github.com/alexdevero" target="_blank"><i class="fa fa-github"></i>Twitter</a></li>
        <li><a href="https://twitter.com/alexdevero" target="_blank"><i class="fa fa-twitter"></i>Github</a></li>
      </ul>
    </div>
    <div class="signup__overlay"></div>
  </div>
  <div class="container__child signup__form">
    <form action="#">
      <div class="form-group">
        <label for="username">Username</label>
        <input class="form-control" type="text" name="username" id="username" placeholder="james.bond" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input class="form-control" type="text" name="email" id="email" placeholder="james.bond@spectre.com" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control" type="password" name="password" id="password" placeholder="********" required />
      </div>
      <div class="form-group">
        <label for="passwordRepeat">Repeat Password</label>
        <input class="form-control" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" required />
      </div>
      <div class="m-t-lg">
        <ul class="list-inline">
          <li>
            <input class="btn btn--form" type="submit" value="Register" />
          </li>
          <li>
            <Link class="signup__link" to="/">I am already a member</Link>
          </li>
        </ul>
      </div>
    </form>  
  </div>
</div>









  )
}
