# ✅ MVP Checklist for Lingua-Note

This checklist tracks the implementation progress of the core features for the Lingua-Note app.

---

## ✅ Completed Features

- [x] Note-taking page (UI for creating/viewing notes)
- [x] NoteCard component with Darija, French, pronunciation, and tags
- [] Search functionality
- [] Review page scaffolded
- [] User profile page
- [x] App router structure using `app/` directory
- [x] Theme switching setup with `next-themes`
- [x] Radix UI + Tailwind CSS integration
- [x] Floating action button (FAB) for adding new notes
- [x] Responsive dark mode UI
- [x] Prisma integration with full schema
- [x] Server component + client state hybrid pattern (e.g., for dialogs)
- [x] Seed notes data in multiple languages

---

## 🛠️ In Progress / Needs Review

- [ ] Flashcard exercise logic (e.g., flipping, spaced repetition, SM2 algorithm)
- [ ] Review logic (e.g., due notes based on `nextReviewAt`)
- [ ] Proper theme hydration (fix SSR mismatch via `suppressHydrationWarning` or cookies)
- [ ] Loading UI for root route
- [ ] User settings (language preference, theme, etc.)
- [ ] Favorite notes toggle
- [ ] Audio recording + playback integration (with status sync)

---

## ❌ Missing or Not Started

- [ ] Offline support / PWA configuration
- [ ] Global loading spinner (e.g., `nprogress` or `layout.tsx` fallback)
- [ ] Language pair selection (native and learning language)
- [ ] Review/quiz mode (e.g., reveal answer, mark correct/incorrect)
- [ ] Note analytics (review stats, success rates)
- [ ] Filter notes by tag or type

---