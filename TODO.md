# Portfolio Refactor TODO

## Step 1: Move Projects Pages to App Router Structure
- [ ] Create app/projects/page.tsx with content from components/projects/page.tsx
- [ ] Create app/projects/[id]/page.tsx with content from components/projects/[id]/page.tsx

## Step 2: Update Layout for Common Header
- [ ] Add Navigation component to app/layout.tsx

## Step 3: Cleanup
- [ ] Delete components/ui/project-modal.tsx
- [ ] Remove old components/projects/ directory

## Step 4: Testing
- [ ] Test routing between /projects and /projects/[id]
- [ ] Verify common header across all pages
- [ ] Ensure no modal states or z-index hacks remain
