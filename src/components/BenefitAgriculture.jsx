import React from 'react'
import Agriculture from '../images/Agriculture.svg'

function BenefitAgriculture({ img, title, subtitle, span, bold, normal, br, brake}) {
    return (

        <div className='benefits_info_item'>
            <img className='benefit_photo' src={img} alt="Agriculture" />
            <h3 className='benefits_info_title'>{title}</h3>
            <p className={`benefits_info_text ${bold}`}>{subtitle}{br}
                <span className={`benefits_span ${normal} ${brake}`}> {span} </span>
            </p>
        </div>

    )
}

export default BenefitAgriculture
