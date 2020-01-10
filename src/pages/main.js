import React from 'react';
import illustrationmockups from "../images/illustration-mockups.svg";
import "../components/main.css"

const Main = () => (
        <main>
                    <div class="bgpic">
                        <img src={illustrationmockups} alt="logo" /> 
                    </div>
                    <div class="content">
                        <h1>Build The Community <br /> Your Fans Will Love</h1>
                        <p class="description">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                        Create connections with your users as you engage in genuine discussion.</p>
                        <button class="btn-register">Register</button>
                    </div>
        </main>
)
export default Main;