# Sécurité du site public ALJAMÏGUIDE

## Périmètre

Site vitrine statique sur GitHub Pages. Aucun compte administrateur, secret serveur, paiement ou base clients dans ce dépôt. Le formulaire prépare une demande vers WhatsApp ; il n'est pas relié à la plateforme administrative. L'administration privée est un service distinct.

## Renforcement du 22 novembre 2026

- CSP déclarée dans le HTML avant les ressources : scripts locaux et SDK Meta uniquement ; pas de scripts inline, de gestionnaires inline, d'eval ni d'objets ; origines de polices, images, connexions et cadres limitées.
- Pas de balise base autorisée ; aucune navigation de formulaire autorisée par la CSP.
- Politique de référent `no-referrer` sur toutes les pages.
- Liens en nouvel onglet protégés par `noopener noreferrer`.
- Formulaire avec méthode POST de repli plutôt que GET, bouton désactivé sans initialisation JavaScript réussie, message de repli sans JavaScript, limites de taille et validation du navigateur. Les données restent encodées dans le message WhatsApp prévu, sans ajout à l'URL du site.
- Le pixel Meta ne charge qu'après consentement. Aucune transmission explicite des champs du formulaire n'est ajoutée.

## Vérifications réalisées

Sur les trois pages, injection d'un script inline bloquée par le navigateur, absence d'erreurs JavaScript et fonctionnement du changement de langue. Vérification du refus de suivi, du chargement Meta après accord, du parcours WhatsApp et du comportement du formulaire sans JavaScript. Le SDK Meta a été simulé pour ne pas envoyer les visites de test à Meta : la réception réelle doit être vérifiée séparément dans le Gestionnaire d'événements.

## Limites d'hébergement et actions de l'administrateur

Le certificat GitHub est déclaré approuvé pour aljamiguide.com et www.aljamiguide.com lors de la vérification. La redirection obligatoire HTTPS était encore désactivée. L'API a refusé l'activation avec la connexion disponible (403). Activer **Settings > Pages > Enforce HTTPS** dans GitHub.

GitHub Pages ne permet pas de définir librement les en-têtes HTTP. Les directives `frame-ancestors`, HSTS, `X-Frame-Options`, `X-Content-Type-Options` et `Permissions-Policy` ne sont pas prétendument activées par de fausses balises meta. Pour maîtriser ces en-têtes, utiliser un hébergement ou une couche HTTP adaptés.

Protéger les comptes GitHub et OVH par double authentification, garder le domaine renouvelé et vérifier sa propriété dans GitHub. Ces réglages de comptes ne peuvent pas être attestés par les tests du site. Les changements DNS doivent être effectués chez OVH si nécessaire. Aucun système n'est garanti inviolable ; ce contrôle ciblé ne constitue pas un audit indépendant ni un test d'intrusion complet.
