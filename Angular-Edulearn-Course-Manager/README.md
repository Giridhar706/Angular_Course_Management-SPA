# Angular EduLearn Course Manager

A module-based Angular SPA for managing educational courses — built with `AppModule`, `CourseListComponent`, and `CourseDetailComponent` demonstrating **Property Binding**, **Event Binding**, and **Two-Way Binding**.

## Features

- View a grid of 4 mock courses with title, instructor, and description
- Click **View Details** to select a course and display its full information
- Edit the course title inline via two-way binding with real-time UI updates
- Clean, responsive CSS with no external dependencies

## Project Structure

```
src/
├── app/
│   ├── app.module.ts              # Root module — declares components, imports FormsModule
│   ├── app.component.ts/html/css  # Root component — app shell with header
│   ├── course.model.ts            # Course interface (id, title, description, instructor)
│   ├── course-list/
│   │   ├── course-list.component.ts   # Manages courses[] array & selectedCourse state
│   │   ├── course-list.component.html # *ngFor, (click) event binding, [course] property binding
│   │   └── course-list.component.css
│   └── course-detail/
│       ├── course-detail.component.ts   # @Input() course, *ngIf guard
│       ├── course-detail.component.html # [(ngModel)] two-way binding on title
│       └── course-detail.component.css
```

## Data Binding Breakdown

| Binding | Directive | Location | Purpose |
|---|---|---|---|
| **Event** | `(click)="selectCourse(course)"` | `CourseListComponent` template | Sets `selectedCourse` on button click |
| **Property** | `[course]="selectedCourse"` | `CourseListComponent` → `CourseDetailComponent` | Passes selected course down via `@Input()` |
| **Two-Way** | `[(ngModel)]="course.title"` | `CourseDetailComponent` input field | Real-time title editing reflected in parent list |

## Prerequisites

- **Node.js** ≥ 18
- **npm** (bundled with Node.js)

## Quick Start

```bash
# 1. Navigate to the project
cd Angular-edulearn-course-manager

# 2. Install dependencies
npm install

# 3. Serve the application
npx ng serve

# 4. Open in browser
# → http://localhost:4200
```

## Build

```bash
npx ng build
```

Output lands in `dist/edulearn-course-manager/`.

## Tech Stack

- **Angular** (module-based, non-standalone)
- **TypeScript**
- **CSS** (no framework)
- **Angular FormsModule** (for `ngModel`)
