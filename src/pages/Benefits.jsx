import React from 'react'
import BenefitAgriculture from '../components/BenefitAgriculture'
import Agriculture from '../images/Agriculture.svg'
import HighQuality from '../images/HighQuality.svg'
import Match from '../images/Match.svg'
import dev from '../images/dev.mp4'


function Benefits() {
  return (
    <div>
      <div className='container'>

        <h2 className='benefits_title'>What You Get</h2>


        <div className="benefit_video_wrap">
          <video className='benefit_video' controls >
            <source src={dev} type="video/mp4" />
          </video>
        </div>
        <div className="benefits_info_wrap">
          <div className="benefits_info">
            <BenefitAgriculture br={<br/>} img={Agriculture} title={'Efficient Recruiting'} subtitle={'Connect with pre-qualified talents'} brake={'benefits_span_width'} span={' - save valuable time and resources.'} />

            <BenefitAgriculture br={<br/>} bold={'benefits_span_reverseBold'} normal={'benefits_span_reverseNormal'} img={Match} title={'Pre-qualified Talents'} subtitle={'Get high-quality candidates'} span={'from the very start.'} />

            <BenefitAgriculture img={HighQuality} title={'Your Perfect Shortcut'} subtitle={'Focus your recruiting effort -'} span={'start interviewing straight away.'} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
