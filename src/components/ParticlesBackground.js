import React from "react";
import Particles from "react-tsparticles";
import ParticlesConfig from "../components/Particles-config"


export function ParticleBackground() {
    return(
        <Particles params={ParticlesConfig} ></Particles>
    );
}