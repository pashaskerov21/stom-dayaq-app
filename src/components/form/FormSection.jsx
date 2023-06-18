import React from 'react'
import LeftForm from './LeftForm'
import RightForm from './RightForm'

function FormSection() {
    const medicalAreaArr = ['surgery', 'implant', 'therapy', 'children_stomatology', 'orthodontics', 'periodontology', 'orthopedics', 'dental_technician'];
    const cityArr = ['Abşeron','Ağcabədi','Ağdam','Ağdaş','Ağstafa','Ağsu','Astara','Bakı','Babək','Balakən','Beyləqan','Bərdə','Biləsuvar','Cəbrayıl','Cəlilabad','Culfa','Daşkəsən','Füzuli','Gədəbəy','Gəncə','Goranboy','Göyçay','Göygöl','Hacıqabul','Xaçmaz','Xızı','Xocalı','Xocavənd','İmişli','İsmayıllı','Kəlbəcər','Kəngərli','Kürdəmir','Qax','Qazax','Qəbələ','Qobustan','Quba','Qubadlı','Qusar','Laçın','Lənkəran','Lerik','Lənkəran','Masallı','Mingəçevir','Naxçıvan','Naftalan','Neftçala','Oğuz','Ordubad','Saatlı','Sabirabad','Salyan','Samux','Sədərək','Şabran','Şahbuz','Şamaxı','Şəki','Şəmkir','Şərur','Siyəzən','ŞİRVAN','Şuşa','Sumqayıt','Tərtər','Tovuz','Ucar','Yardımlı','Yevlax','Xankəndi','Zaqatala','Zəngilan','Zərdab']
    return (
        <section className="form-section main-section" id='appeal'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6" data-aos="zoom-in">
                        <LeftForm medicalAreaArr={medicalAreaArr} cityArr={cityArr}/>
                    </div>
                    <div className="col-12 col-lg-6" data-aos="zoom-in">
                        <RightForm cityArr={cityArr}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormSection
