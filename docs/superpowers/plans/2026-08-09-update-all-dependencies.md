# Dependency Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update every direct project dependency and the pnpm toolchain metadata to current releases while preserving a successful Astro production build.

**Architecture:** Keep the existing Astro, React, Tailwind, Supabase, and Vercel architecture unchanged. Use pnpm to rewrite direct version ranges and regenerate the lockfile, migrate pnpm's build allowlist to its current configuration location, then validate static analysis and the production bundle.

**Tech Stack:** Node.js 24, pnpm 11, Astro 7, React 19, Tailwind CSS 4, TypeScript 6

## Global Constraints

- Update all direct dependencies and devDependencies to the latest compatible registry releases.
- Preserve the build allowlist for `esbuild` and `sharp` using pnpm 11's `allowBuilds` setting.
- Do not change application behavior unless a dependency migration requires it.
- Keep the existing pnpm lockfile as the sole lockfile.

---

### Task 1: Refresh package versions and pnpm configuration

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Create: `pnpm-workspace.yaml`

- [x] Upgrade pnpm metadata to 11.21.0 and migrate `onlyBuiltDependencies` to `allowBuilds`.
- [x] Update all direct dependencies with `pnpm update --latest`.
- [x] Add the official Astro and TypeScript diagnostic dependencies.
- [x] Keep TypeScript on 6.0.3 because Astro Check 0.9.10 does not support TypeScript 7.
- [x] Verify the final lockfile with a frozen installation.

### Task 2: Migrate and validate the upgraded application

**Files:**
- Modify: `src/actions/index.ts`

- [x] Migrate `astro:schema` to Astro 7's `astro/zod` API while preserving email validation messages.
- [x] Run pnpm peer dependency validation.
- [x] Run Astro diagnostics and confirm zero errors.
- [x] Build the production site.
- [x] Run a high-severity audit and override vulnerable transitive packages with patched releases.
- [x] Review the final diff and dependency state.
