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
            <div class="nav-item has-sub toggle-hover" id="dropdown">
                <a class="nav-dropdown-link">Animated</a>
                <ul class="dropdown-menu dropdown-animated" role="menu">
                    <li role="menu-item"><a href="#">First Item</a></li>
                    <li role="menu-item"><a href="#">Second Item</a></li>
                    <li role="menu-item"><a href="#">Third Item</a></li>
                </ul>
            </div>
        </div>

        <div class="nav-right">
            <div class="nav-item active">
                <a href="#">Active</a>
            </div>
            <div class="nav-item">
                <a href="#">Link 1</a>
            </div>
            <div class="nav-item has-sub" id="dropdown">
                <ul class="dropdown-menu" role="menu">
                    <li role="menu-item"><a href="#">First Item</a></li>
                    <li role="menu-item"><a href="#">Second Item</a></li>
                    <li role="menu-item"><a href="#">Third Item</a></li>
                    <li class="dropdown-menu-divider"></li>
                    <li role="menu-item"><a href="#">Fourth Item</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Nav