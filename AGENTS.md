<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- The school logo renders only through `src/components/Logo.tsx`, which locks it in a circular frame — the brand mark is a circular badge, so a bare `<img>` of it is a bug.
- Shared school facts (NAP, grades, nav, grade list) live in `src/lib/school.ts` so every page shows identical, verified information.
- Site chrome (header, footer, sticky mobile CTA) lives in `src/routes/__root.tsx`; page routes render content only.
