import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
export function NotFoundPage(): ReactElement {
    useDocumentTitle("Page introuvable")
    return (
        <div className="not-found-page">
            <h2>404- Page non trouvée</h2>
            <p>La page demandée n'existe pas</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    )
}