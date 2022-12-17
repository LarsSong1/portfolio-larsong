import React from 'react'
import '../css/sobremi.css'

function Herramientas({img, herraname, clase1, clase2}) {
    return (
        <div class={clase1}>
            <img class="img-fluid" src={img} alt="herramientas" />
                <div>
                    <h2>{herraname}</h2>
                    <div class={clase2}>
                        <span class="level1"></span>
                        <span class="level2"></span>
                        <span class="level3"></span>
                        <span class="level4"></span>
                        <span class="level5"></span>
                    </div>
                </div>
        </div>
    )
}

export default Herramientas