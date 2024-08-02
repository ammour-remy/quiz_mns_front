import React from 'react'
import Aside from '../../Components/Aside/Aside'
import Navlist from '../../Components/NavList/NavList'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import "./legalNotice.css"

function LegalNotice() {
    return (
        <main>
            <Aside>
                <Navlist />
            </Aside>
            <Header />
            <Navlist addStyle="position-absolute d-lg-none" />
            <Main>
                <h1 className="text-center">Mentions Légales</h1>

                <h2 className="my-5 text-start ms-5 fw-semibold">1. Présentation du site</h2>

                <p className="ms-5 me-5">Nom du site : Quiz MNS<br />
                    URL : https://www.quizmns.com<br />
                    Éditeur du site : PAQUAM<br />
                    Responsable de la publication : Remy Ammour & Rémy Paquin<br />
                    Hébergeur : OVH - 2, rue Kellermann - 59100 Roubaix</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">2. Propriété intellectuelle</h2>

                <p className="ms-5 me-5">L’ensemble des contenus présents sur ce site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de PAQUAM à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">3. Conditions d'utilisation</h2>

                <p className="ms-5 me-5">L’utilisation du site Quiz MNS implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ci-après. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site Quiz MNS sont donc invités à les consulter de manière régulière.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">4. Description des services fournis</h2>

                <p className="ms-5 me-5">Le site Quiz MNS a pour objet de fournir une information concernant l'ensemble des activités de la société. PAQUAM s’efforce de fournir sur le site Quiz MNS des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">5. Limitations de responsabilité</h2>

                <p className="ms-5 me-5">PAQUAM ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site Quiz MNS, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">6. Gestion des données personnelles</h2>

                <p className="ms-5 me-5">En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et le Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>

                <p className="ms-5 me-5">À l'occasion de l'utilisation du site Quiz MNS, peuvent être recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site Quiz MNS, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.</p>

                <p className="ms-5 me-5">En tout état de cause PAQUAM ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site Quiz MNS. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site Quiz MNS l’obligation ou non de fournir ces informations.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">7. Liens hypertextes et cookies</h2>

                <p className="ms-5 me-5">Le site Quiz MNS contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de PAQUAM. Cependant, PAQUAM n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>

                <p className="ms-5 me-5">La navigation sur le site Quiz MNS est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">8. Droit applicable et attribution de juridiction</h2>

                <p className="ms-5 me-5">Tout litige en relation avec l’utilisation du site Quiz MNS est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de [Ville de l'éditeur].</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">9. Les principales lois concernées</h2>

                <p className="ms-5 me-5">Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.<br />
                    Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>

                <h2 className="my-5 text-start ms-5 fw-semibold">10. Lexique</h2>

                <p className="ms-5 me-5">Utilisateur : Internaute se connectant, utilisant le site susnommé.<br />
                    Informations personnelles : « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
            </Main>
        </main>
    )
}

export default LegalNotice