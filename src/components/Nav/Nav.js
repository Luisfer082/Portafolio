import React from 'react'

function Nav() {
  return (
    <>
    <div class="header header-fixed u-unselectable header-animated bg-blue-200" >
    <div class="header-brand">
        <div class="nav-item no-hover">
            <a><h6 class="title">Logo</h6></a>
        </div>
        <div class="nav-item nav-btn" id="header-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="header-nav" id="header-menu">
        <div class="nav-left">
            <div class="nav-item text-center">
                <a href="#">
                    <span class="icon">
                        <i class="fab fa-wrapper fa-github" aria-hidden="true"></i>
                    </span>
                </a>
            </div>
            <div class="nav-item text-center">
                <a href="#">
                    <span class="icon">
                        <i class="fab fa-wrapper fa-slack" aria-hidden="true"></i>
                    </span>
                </a>
            </div>
            <div class="nav-item text-center">
                <a href="#">
                    <span class="icon">
                        <i class="fab fa-wrapper fa-twitter" aria-hidden="true"></i>
                    </span>
                </a>
            </div>
        </div>


        <div class="nav-right">
            <div class="nav-item active">
                <a href="#">Inicio</a>
            </div>
            <div class="nav-item">
                <a href="#">Tecnologias</a>
            </div>
            <div class="nav-item">
                <a href="#">Proyectos</a>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Nav