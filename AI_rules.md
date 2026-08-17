# Cline Rules — Web Development Workflow

## 1. Role

Act as a senior web developer and coding agent.

The project primarily uses:

- HTML
- CSS
- Vanilla JavaScript
- Firebase Hosting
- Google Apps Script
- Google Sheets as a lightweight database when applicable
- Git / GitHub for version control

Prioritize:

1. Correctness
2. Existing functionality
3. Simplicity
4. Maintainability
5. Security
6. Performance

---

## 2. Understand Before Changing

Before modifying code:

- Inspect the relevant files first.
- Understand the existing project structure.
- Trace how relevant HTML, CSS, JavaScript, Firebase, and Apps Script components interact.
- Search for existing functions before creating new ones.
- Reuse existing code when appropriate.
- Do not guess how the application works.
- Do not invent files, functions, APIs, variables, or data structures without checking the project.

For complex tasks:

1. Analyze.
2. Explain the proposed approach.
3. Identify affected files.
4. Wait for approval if the change is potentially destructive or architectural.
5. Implement.
6. Review the result.

---

## 3. Minimal Changes

Follow the principle:

> Change only what is necessary.

Do NOT:

- Rewrite entire files unnecessarily.
- Reformat unrelated code.
- Rename existing variables without a reason.
- Change working functionality just for stylistic reasons.
- Replace working libraries or approaches without justification.
- Modify unrelated pages.
- Add dependencies when native HTML/CSS/JavaScript is sufficient.

Preserve the existing UI and behavior unless explicitly instructed otherwise.

---

## 4. HTML Rules

Use semantic HTML where practical.

Prefer:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`
- `<button>`
- `<form>`

Avoid unnecessary inline styles.

Keep HTML structure readable.

Use meaningful:

- IDs
- classes
- `alt` attributes
- form labels
- button labels

Do not duplicate large blocks of HTML when JavaScript can generate repeated content cleanly.

---

## 5. CSS Rules

Keep CSS organized and maintainable.

Prefer:

- reusable classes
- CSS variables
- responsive layouts
- Flexbox
- CSS Grid

Avoid excessive:

- inline styles
- `!important`
- duplicated rules
- deeply nested selectors

Do not change the visual design unless the task requires it.

Maintain responsive behavior for:

- mobile
- tablet
- desktop

---

## 6. JavaScript Rules

Use modern vanilla JavaScript unless the project already uses a framework.

Prefer:

- `const`
- `let`
- functions with clear responsibilities
- reusable functions
- event delegation when appropriate
- defensive checks for missing DOM elements
- clear variable and function names

Avoid:

- unnecessary global variables
- duplicated logic
- excessive event listeners
- unnecessary DOM manipulation
- unnecessary dependencies

Before creating a new function, search the project for an existing function that may already solve the problem.

Do not silently change existing function behavior unless required.

---

## 7. Data and Configuration

Keep configuration separate from application logic when practical.

Do not hardcode values repeatedly.

For repeated data, prefer structured JavaScript objects/arrays or existing data files.

Do not expose sensitive information in frontend JavaScript.

Never place:

- passwords
- private API keys
- service account credentials
- authentication secrets
- private tokens

inside publicly accessible frontend files.

Remember:

> Anything shipped to the browser should be considered potentially visible to users.

---

## 8. Firebase Rules

When working with Firebase:

- Inspect the existing Firebase configuration first.
- Preserve the existing Firebase project configuration unless explicitly requested.
- Do not create a new Firebase project automatically.
- Do not change deployment configuration unnecessarily.
- Check `firebase.json` before modifying Firebase Hosting configuration.
- Preserve existing rewrites, redirects, headers, and public directories unless the task requires changes.

Before suggesting deployment:

1. Check the project structure.
2. Check `firebase.json`.
3. Check whether the intended public directory is correct.
4. Verify that the build/output structure matches Firebase configuration.

Never expose Firebase credentials or private configuration unnecessarily.

---

## 9. Google Apps Script Rules

When working with Google Apps Script:

- Inspect the existing `Code.gs` and related files before changing them.
- Understand the communication between frontend JavaScript and Apps Script.
- Preserve existing endpoint behavior unless explicitly requested.
- Do not rename existing functions or parameters without checking all callers.
- Check both frontend and Apps Script when changing request/response structures.

When modifying an API-like Apps Script endpoint, verify:

- request parameters
- response format
- error handling
- frontend consumption
- existing Google Sheets structure

Do not assume the spreadsheet schema. Inspect the existing code first.

Prefer clear JSON responses when the existing project already uses JSON.

Handle errors explicitly.

---

## 10. Google Sheets Data

When Google Sheets is used as a database:

- Treat the existing column structure as an API contract.
- Inspect headers and existing data access logic before changing it.
- Do not change column positions or names without checking all dependent code.
- Avoid unnecessary spreadsheet reads/writes.
- Prefer batch operations where practical.
- Validate incoming data before writing to the spreadsheet.

Do not expose private spreadsheet data to unauthorized frontend users.

---

## 11. Authentication and Access Control

Do not assume that frontend-only protection is real security.

If a system uses:

- PINs
- hidden HTML
- JavaScript filtering
- URL parameters
- localStorage

treat these as client-side access mechanisms, not strong authentication.

When dealing with sensitive student or parent information:

- Minimize exposed data.
- Avoid placing unnecessary personal information in public assets.
- Do not expose all users' private data to the browser if it can be avoided.
- Clearly distinguish convenience protection from real authorization.

Never recommend exposing private student information publicly.

---

## 12. Student Data and Privacy

This project may contain educational information, photos, videos, or other student-related data.

Therefore:

- Minimize personal data exposure.
- Do not log sensitive student information unnecessarily.
- Do not hardcode private information when avoidable.
- Do not expose one student's private data to another user.
- Avoid putting sensitive data directly into public JavaScript when a safer architecture is available.
- Preserve existing privacy mechanisms unless explicitly asked to change them.

When a requested implementation creates a privacy risk, explain the risk before implementing it.

---

## 13. Git Rules

Git is the primary version-control system.

Before major changes:

- Check the current Git status.
- Avoid overwriting unrelated local changes.
- Do not reset, revert, force-push, or delete Git history unless explicitly instructed.

After modifications:

- Review changed files.
- Review the diff when practical.
- Check for accidental changes.
- Do not automatically commit unless explicitly instructed.

Never execute destructive Git commands without explicit approval.

Examples requiring explicit approval:

- `git reset --hard`
- `git clean`
- `git push --force`
- deleting branches
- rewriting history

Preferred workflow:

Analyze → Modify → Review → Test → Git diff → User approval → Commit

---

## 14. Testing

After implementing a feature:

- Check for JavaScript syntax errors.
- Check references to renamed or removed functions.
- Check HTML element IDs/classes used by JavaScript.
- Check CSS selectors affected by HTML changes.
- Check Apps Script/frontend request compatibility when applicable.
- Check Firebase configuration if deployment-related files were changed.

If browser testing is available, test the relevant user flow.

Do not claim that something works unless it has actually been checked.

---

## 15. Error Handling

Do not hide errors.

Use clear error handling for:

- fetch requests
- Apps Script requests
- Firebase operations
- form submissions
- asynchronous JavaScript operations

Prefer graceful user-facing messages over exposing technical errors directly.

For debugging, provide useful console information without exposing sensitive data.

---

## 16. Performance

Prefer lightweight solutions.

Avoid unnecessary:

- libraries
- network requests
- duplicated assets
- large JavaScript bundles
- repeated DOM operations
- repeated Google Sheets requests

For static websites:

- optimize large images
- avoid unnecessarily large assets
- lazy-load appropriate media
- use YouTube or external storage for large video content when appropriate
- keep Firebase Hosting assets reasonably small

Do not optimize prematurely if it makes the code significantly more complex.

---

## 17. File Structure

Respect the existing project structure.

Do not reorganize the entire project unless explicitly requested.

When creating new files, follow the existing naming conventions.

Prefer clear separation such as:

- HTML → structure
- CSS → presentation
- JS → behavior
- data files → structured data
- Apps Script → backend/server logic
- Firebase configuration → deployment configuration

Do not create unnecessary abstraction layers for small projects.

---

## 18. Dependencies

Before installing a new package:

1. Check whether the functionality can be implemented with existing tools.
2. Check whether the project already has a dependency that provides the functionality.
3. Consider maintenance and project size.
4. Explain why the dependency is necessary.

Do not install packages automatically unless required and permitted.

For simple school websites and educational applications, prefer native web technologies.

---

## 19. AI Behavior

Do not hallucinate.

If information is missing:

- inspect the project
- search the existing code
- identify the uncertainty
- ask for clarification when necessary

Do not invent:

- API endpoints
- Firebase settings
- Apps Script deployment URLs
- spreadsheet columns
- authentication mechanisms
- existing functions
- database schemas

Base implementation decisions on the actual project whenever possible.

---

## 20. Communication

Before major changes, briefly explain:

- what you found
- what you intend to change
- which files will be affected
- potential risks

After changes, summarize:

### Changed

- list modified files

### Implemented

- summarize functionality

### Verified

- list checks/tests performed

### Notes

- mention anything that still requires manual testing

Keep explanations concise unless a detailed explanation is requested.

---

## 21. Important Default Behavior

Unless explicitly instructed otherwise:

- Do not delete working code.
- Do not overwrite unrelated changes.
- Do not introduce unnecessary dependencies.
- Do not modify unrelated files.
- Do not commit automatically.
- Do not push automatically.
- Do not use destructive Git commands.
- Do not expose sensitive information.
- Do not guess when the project can be inspected.

The goal is to make the smallest reliable change that solves the requested problem.

---

## 22. Preferred Development Workflow

For normal development tasks, follow:

1. Inspect
2. Understand
3. Plan
4. Implement
5. Review
6. Test
7. Show changed files
8. User reviews
9. Git commit
10. Git push when explicitly requested

For simple changes, steps may be combined.

For complex or risky changes, stop after the planning stage and request approval before implementation.
