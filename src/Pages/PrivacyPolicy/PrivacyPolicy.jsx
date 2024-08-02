import React from 'react'
import Aside from '../../Components/Aside/Aside'
import Navlist from '../../Components/NavList/NavList'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import "./privacyPolicy.css"

function PrivacyPolicy() {
    return (
        <main>
            <Aside>
                <Navlist />
            </Aside>
            <Header />
            <Navlist addStyle="position-absolute d-lg-none" />
            <Main>
                <h1 className="text-center">Politique de Confidentialité</h1>

                <h2 className="my-5 text-start ms-5 fw-semibold">1. Introduction</h2>

                <p className="ms-5 me-5">La présente politique de confidentialité décrit les types de données personnelles que nous recueillons sur le site Quiz MNS (ci-après dénommé « le Site »), la manière dont nous les utilisons, les options dont vous disposez concernant notre utilisation de ces informations, et les mesures que nous prenons pour les protéger.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">2. Collecte des données personnelles</h2>

                <p className="ms-5 me-5">Nous collectons différentes informations lorsque vous utilisez notre Site :<br />
                    <br />
                    Informations fournies par l’utilisateur :<br />
                    Lorsque vous vous inscrivez sur notre Site, créez un compte, participez à un quiz, ou utilisez d'autres services, nous pouvons recueillir des informations telles que votre nom, adresse e-mail, date de naissance, et autres informations nécessaires à l'utilisation de nos services.<br />
                    <br />
                    Données de navigation :<br />
                    Nous recueillons des informations lorsque vous accédez et naviguez sur notre Site, telles que l'adresse IP, le type de navigateur, les pages visitées, et la durée de la visite. Ces informations sont recueillies par le biais de cookies et autres technologies de suivi.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">3. Utilisation des données personnelles</h2>

                <p className="ms-5 me-5">Les informations que nous recueillons sont utilisées pour :<br />
                    <br />
                    Fournir, exploiter et améliorer nos services.<br />
                    Gérer votre compte utilisateur.<br />
                    Personnaliser votre expérience utilisateur.<br />
                    Communiquer avec vous concernant nos services, promotions et événements.<br />
                    Assurer la sécurité et la protection de nos utilisateurs.<br />
                    Analyser l'utilisation du Site pour améliorer notre offre de services.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">4. Partage des données personnelles</h2>

                <p className="ms-5 me-5">Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants :<br />
                    <br />
                    Avec votre consentement explicite.<br />
                    Pour répondre à une obligation légale, une ordonnance judiciaire, ou pour défendre nos droits en justice.<br />
                    Avec nos prestataires de services qui travaillent en notre nom et pour notre compte, dans la mesure où ils respectent cette politique de confidentialité et les lois en vigueur en matière de protection des données.<br />
                    En cas de fusion, acquisition ou vente de tout ou partie de nos actifs, vos données pourront être transférées au nouvel organisme.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">5. Sécurité des données</h2>

                <p className="ms-5 me-5">Nous prenons des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Cependant, aucun système de transmission de données via Internet ou de stockage électronique n'est totalement sécurisé. Par conséquent, nous ne pouvons garantir une sécurité absolue.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">6. Vos droits</h2>

                <p className="ms-5 me-5">Conformément aux lois en vigueur, vous disposez des droits suivants concernant vos données personnelles :<br />
                    <br />
                    Droit d'accès : Vous pouvez demander l'accès à vos données personnelles que nous détenons.<br />
                    Droit de rectification : Vous pouvez demander la correction des données inexactes ou incomplètes.<br />
                    Droit à l'effacement : Vous pouvez demander la suppression de vos données personnelles, sous certaines conditions.<br />
                    Droit à la limitation du traitement : Vous pouvez demander de restreindre le traitement de vos données personnelles, sous certaines conditions.<br />
                    Droit d'opposition : Vous pouvez vous opposer au traitement de vos données personnelles, sous certaines conditions.<br />
                    Droit à la portabilité : Vous pouvez demander que vos données personnelles soient transférées à un autre responsable du traitement.<br />
                    <br />
                    Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : contact@quizmns.com.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">7. Cookies</h2>

                <p className="ms-5 me-5">Le Site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du Site. Vous pouvez configurer votre navigateur pour refuser les cookies ou pour vous avertir lorsque des cookies sont envoyés. Cependant, certaines fonctionnalités du Site peuvent ne pas fonctionner correctement sans cookies.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">8. Modifications de la politique de confidentialité</h2>

                <p className="ms-5 me-5">Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de toute modification en publiant la nouvelle politique sur cette page. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">9. Contact</h2>

                <p className="ms-5 me-5">Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à l'adresse suivante : contact@quizmns.com.</p>
            </Main>
        </main>
    )
}

export default PrivacyPolicy