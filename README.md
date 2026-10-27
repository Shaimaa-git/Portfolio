# TRA Developer Portfolio (Angular 19)

## Run locally

```bash
npm install
npm start
```

Open http://localhost:4200.

## Production build

```bash
npm run build
```

## Customize before publishing

1. Replace the generic PORTFOLIO brand and hero copy with your name/title.
2. Update `src/app/pages/home.component.ts` contactEmail, linkedinUrl, githubUrl (currently placeholders).
3. Verify each project description, exact role, feature list and technology stack in `src/app/core/content.ts`. The initial case studies intentionally contain editable descriptions rather than unverified accomplishments.
4. Add only screenshots and assets you have permission to publish. The included graphics are CSS-based placeholders.
5. Review all Arabic/English translations in `src/app/core/language.service.ts`.
6. Add an approved CV file under `src/assets/` and link to it if desired.

## Structure
- `src/app/core/content.ts`: bilingual case-study content
- `src/app/core/language.service.ts`: translations, language persistence, RTL/LTR
- `src/app/pages/home.component.*`: complete homepage
- `src/app/pages/project.component.*`: dynamic case-study page
- `src/app/app.routes.ts`: routes
- `src/styles.scss`: global dark design system

This is a static portfolio: no database or backend required.
