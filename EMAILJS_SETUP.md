# EmailJS Setup Instructies

Het contactformulier gebruikt EmailJS om e-mails te versturen. Volg deze stappen om het in te stellen:

## Stap 1: Maak een gratis EmailJS account
1. Ga naar https://www.emailjs.com/
2. Klik op "Sign Up" en maak een gratis account aan
3. Bevestig je e-mailadres

## Stap 2: Voeg een Email Service toe
1. Ga naar "Email Services" in het dashboard
2. Klik op "Add New Service"
3. Kies je e-mailprovider (Gmail, Outlook, etc.)
4. Volg de instructies om je e-mailaccount te verbinden
5. **Kopieer de Service ID** (bijvoorbeeld: `service_xxxxxxx`)

## Stap 3: Maak een Email Template
1. Ga naar "Email Templates" in het dashboard
2. Klik op "Create New Template"
3. Gebruik deze template variabelen:
   - `{{from_name}}` - Naam van de afzender
   - `{{from_email}}` - E-mail van de afzender
   - `{{phone}}` - Telefoonnummer (of "Niet opgegeven")
   - `{{subject}}` - Onderwerp
   - `{{message}}` - Bericht
   - `{{to_email}}` - Ontvanger (info@duadecor.be)

   **Gebruik de HTML template:**
   - Open het bestand `EMAIL_TEMPLATE.html` in je project
   - Kopieer de HTML code
   - Plak deze in je EmailJS template editor
   - De template is al volledig gestyled in de Dua Decor stijl met alle formuliervelden

4. Stel "To Email" in op: `info@duadecor.be`
5. Stel "From Name" in op: `{{from_name}}`
6. Stel "Reply To" in op: `{{from_email}}`
7. **Kopieer de Template ID** (bijvoorbeeld: `template_xxxxxxx`)

## Stap 4: Haal je Public Key op
1. Ga naar "Account" > "General"
2. **Kopieer je Public Key** (bijvoorbeeld: `xxxxxxxxxxxxx`)

## Stap 5: Configureer de environment variabelen
1. Maak een `.env` bestand in de root van het project
2. Voeg de volgende regels toe:
   ```
   VITE_EMAILJS_SERVICE_ID=je_service_id_hier
   VITE_EMAILJS_TEMPLATE_ID=je_template_id_hier
   VITE_EMAILJS_PUBLIC_KEY=je_public_key_hier
   ```
3. Vervang de waarden met je eigen credentials

## Stap 6: Herstart de development server
Na het toevoegen van de `.env` bestand, herstart de server:
```bash
npm run dev
```

## Gratis Tier Limieten
- 200 e-mails per maand (gratis tier)
- Genoeg voor de meeste websites
- Upgrade beschikbaar als je meer nodig hebt

## Testen
1. Vul het contactformulier in op de website
2. Controleer of je een e-mail ontvangt op info@duadecor.be
3. Controleer de EmailJS dashboard voor logs

## Problemen oplossen
- Controleer of alle environment variabelen correct zijn ingesteld
- Controleer de EmailJS dashboard voor foutmeldingen
- Zorg ervoor dat je e-mailservice correct is verbonden
- Controleer de browser console voor JavaScript errors
