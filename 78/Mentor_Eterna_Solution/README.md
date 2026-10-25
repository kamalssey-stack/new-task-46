# Mentor + Eterna Solution

Two separate static frontend apps built with HTML, CSS, and JavaScript:
- `Mentor/` — education/learning template starter.
- `Eterna/` — multipurpose business template with the requested pages and sections.

## Run
Open `Mentor/index.html` or `Eterna/index.html` in a browser. No build tools required.

## SQL Server
These apps currently use demo data in JavaScript and `localStorage`; static browser apps must not connect directly to SQL Server because that would expose database credentials.
To use SQL Server, add a backend API (for example ASP.NET Core Web API) that accesses SQL Server, then replace the demo data functions in `Eterna/assets/js/app.js` with `fetch()` calls to that API.

## Structure
- Each app has its own `index.html`, CSS, and JS.
- Eterna includes Home, Service, Team, Pricing, and Blog pages.
- The Eterna blog list has simple category filtering and a recent-post list.
- The contact forms show a demo success message; connect them to a backend to send/store submissions.


## Код для начинающего уровня
HTML, CSS и JavaScript отформатированы для удобного чтения. В JavaScript используются простые переменные, функции и обработчики событий. Формы на страницах демонстрационные и пока не сохраняют данные в SQL Server.


Eterna home slider uses the Bootstrap 5 Carousel component via CDN. An internet connection is needed to load Bootstrap.


Mentor homepage now includes a Bootstrap 5 Carousel with three photo slides, indicators, previous/next controls, and automatic switching. Bootstrap is loaded from CDN, so internet access is required. The visual structure is a student-made implementation inspired by the reference, not a bundled copy of BootstrapMade source files.
